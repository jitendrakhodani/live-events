import { useUser, useAuth as useClerkAuth } from '@clerk/clerk-react';
import { User } from '../types/User';

const useAuth = () => {
  const { user: clerkUser, isLoaded: isUserLoaded } = useUser();
  const { isSignedIn } = useClerkAuth();

  if (!isUserLoaded) {
    return {
      user: null,
      isLoading: true,
      isAuthenticated: false,
    };
  }

  // Map Clerk user to our User type
  const user: User | null = clerkUser ? {
    id: clerkUser.id,
    email: clerkUser.primaryEmailAddress?.emailAddress || '',
    name: `${clerkUser.firstName || ''} ${clerkUser.lastName || ''}`.trim() || clerkUser.username || 'User',
    imageUrl: clerkUser.imageUrl,
    // Add any additional fields you need from Clerk
  } : null;

  return {
    user,
    isLoading: false,
    isAuthenticated: isSignedIn,
    // You can also expose Clerk's signIn, signOut methods if needed
  };
};

export default useAuth;
