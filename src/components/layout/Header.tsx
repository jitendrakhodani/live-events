import React from 'react';
import { useAuthStore } from '../../stores/useAuthStore';
import LoginPopover from '../auth/LoginPopover';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { 
  HomeIcon, 
  CalendarIcon, 
  PlusIcon, 
  UserIcon, 
  LogInIcon 
} from 'lucide-react';

const Header: React.FC = () => {
  const user = useAuthStore(state => state.user);
  return (
    <header className="sticky top-0 z-50 w-full header-bg bg-clip-padding backdrop-filter  backdrop-blur-none bg-opacity-20 backdrop-saturate-150 backdrop-contrast-50">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="flex items-center space-x-2 mr-20 text-white hover:text-white">
            <CalendarIcon className="h-6 w-6" />
            <span className="font-bold">NowCast</span>
          </Link>
          <nav className="flex items-center space-x-4 lg:space-x-6">
            <Link 
              to="/" 
              className="text-sm font-medium text-white/80 transition-colors hover:text-white flex items-center"
            >
              <HomeIcon className="mr-2 h-4 w-4" /> Home
            </Link>
            <Link 
              to="/events" 
              className="text-sm font-medium text-white/80 transition-colors hover:text-white flex items-center"
            >
              <CalendarIcon className="mr-2 h-4 w-4" /> Events
            </Link>
            <Link 
              to="/events/create" 
              className="text-sm font-medium text-white/80 transition-colors hover:text-white flex items-center"
            >
              <PlusIcon className="mr-2 h-4 w-4" /> Create Event
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-2">
            {user ? (
              <>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-white hover:bg-gray-800/50 hover:text-white"
                >
                  <UserIcon className="mr-2 h-4 w-4" /> {user.username}
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-white hover:bg-gray-800/50 hover:text-white"
                  onClick={() => useAuthStore.getState().clearUser()}
                >
                  <LogInIcon className="mr-2 h-4 w-4 rotate-180" /> Logout
                </Button>
              </>
            ) : (
              <>
                <LoginPopover>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-white"
                  >
                    <LogInIcon className="mr-2 h-4 w-4" /> Login
                  </Button>
                </LoginPopover>
                <Button 
                variant="ghost" 
                  className="text-white btn" 
                  asChild
                >
                  <Link to="/auth/register">
                    Register
                  </Link>
                </Button>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
