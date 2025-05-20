/// <reference types="vite/client" />

// This helps TypeScript understand the @/ path alias
declare module '@/hooks/useAuth' {
  import { AuthContextType } from '@/types/User';
  const useAuth: () => AuthContextType;
  export default useAuth;
}
