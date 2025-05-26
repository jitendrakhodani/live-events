import React from 'react';

import { Link } from 'react-router-dom';

import { 
  HomeIcon, 
  CalendarIcon, 
  PlusIcon,
  Phone
} from 'lucide-react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';


const Header: React.FC = () => {
  
  return (
    <header className="sticky top-0 z-50 w-full header-bg bg-clip-padding backdrop-filter  backdrop-blur-none bg-opacity-20 backdrop-saturate-150 backdrop-contrast-50">
      <div className="flex h-14 max-w-screen-2xl mx-4">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="flex items-center space-x-1 mr-10 text-white hover:text-white">
            <img src="../../src/styles/logo.avif" width="42" height="42" alt="NowCast" />
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
          <Link 
              to="/contact" 
              className="text-sm font-medium text-white transition-colors hover:text-white flex items-center"
            >
              <Phone className="mr-2 h-4 w-4" /> Contact Us
            </Link>
          <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
