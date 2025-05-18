import express, { Request, Response, NextFunction, RequestHandler, Router } from 'express';
import session from 'express-session';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcryptjs';

type User = {
  id: string;
  username: string;
  email: string;
  password: string;
};

type SafeUser = Omit<User, 'password'>;

declare global {
  namespace Express {
    interface User extends SafeUser {}
  }
}

const app = express();
const router: Router = express.Router();
const users: User[] = [];

// Middleware
app.use(express.json());
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

app.use(passport.initialize());
app.use(passport.session());
app.use('/api/auth', router);

// Passport configuration
passport.use(new LocalStrategy(
  { usernameField: 'email' },
  async (email, password, done) => {
    try {
      const user = users.find(u => u.email === email);
      if (!user) {
        return done(null, false, { message: 'Invalid email or password' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return done(null, false, { message: 'Invalid email or password' });
      }

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
));

passport.serializeUser((user: Express.User, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
  const user = users.find(u => u.id === id);
  if (!user) {
    return done(new Error('User not found'));
  }
  done(null, {
    id: user.id,
    username: user.username,
    email: user.email
  });
});

// Auth middleware
type RegisterResponse = { user: Omit<User, 'password'> };
type LoginResponse = { user: Omit<User, 'password'> };
type ErrorResponse = { message: string };

const asyncHandler = (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

interface RegisterBody { username: string; email: string; password: string }
interface LoginBody { email: string; password: string }

const isAuthenticated: RequestHandler = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: 'Unauthorized' });
};

// Routes
router.post(['/register', '/register/'], asyncHandler(async (req: Request<{}, any, RegisterBody>, res: Response<RegisterResponse | ErrorResponse>, next: NextFunction) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    if (users.find(u => u.email === email)) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      username,
      email,
      password: hashedPassword
    };

    users.push(newUser);

    // Auto-login after registration
    const safeUser: SafeUser = {
      id: newUser.id,
      username: newUser.username,
      email: newUser.email
    };
    req.login(safeUser, (err) => {
      if (err) {
        return next(err);
      }
      return res.status(201).json({ user: { id: newUser.id, username: newUser.username, email: newUser.email } });
    });
  } catch (error) {
    next(error);
  }
}));

router.post('/login', passport.authenticate('local'), (req: Request<{}, any, LoginBody>, res: Response<LoginResponse | ErrorResponse>) => {
  if (req.user) {
    res.json({ user: req.user });
  } else {
    res.status(401).json({ message: 'Authentication failed' });
  }
});

router.post('/logout', asyncHandler(async (req: Request, res: Response<{ message: string }>) => {
  await new Promise<void>((resolve, reject) => {
    req.logout((err) => {
      if (err) reject(err);
      else resolve();
    });
  });
  res.json({ message: 'Logged out successfully' });
}));

router.get('/user', asyncHandler(async (req: Request, res: Response<LoginResponse | ErrorResponse>) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  res.json({ user: req.user });
}));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
