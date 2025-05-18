import axios from 'axios'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useAuthStore } from '@/stores/useAuthStore'

type User = {
  id: string
  username: string
  email: string
}

type LoginData = {
  email: string
  password: string
}

type RegisterData = {
  username: string
  email: string
  password: string
}

type AuthResponse = {
  user: User
}

const api = {
  login: (data: LoginData): Promise<AuthResponse> => 
    axios.post('/api/auth/login', data).then(res => res.data),
  
  register: (data: RegisterData): Promise<AuthResponse> =>
    axios.post('/api/auth/register', data).then(res => res.data),
  
  logout: (): Promise<void> => 
    axios.post('/api/auth/logout').then(res => res.data),
  
  getCurrentUser: (): Promise<AuthResponse> =>
    axios.get('/api/auth/user').then(res => res.data)
}

export function useLogin() {
  const setUser = useAuthStore(state => state.setUser)
  
  return useMutation<AuthResponse, Error, LoginData>({
    mutationFn: api.login,
    onSuccess: (data) => {
      setUser(data.user)
    }
  })
}

export function useRegister() {
  const setUser = useAuthStore(state => state.setUser)
  
  return useMutation<AuthResponse, Error, RegisterData>({
    mutationFn: api.register,
    onSuccess: (data) => {
      setUser(data.user)
    }
  })
}

export function useLogout() {
  const clearUser = useAuthStore(state => state.clearUser)
  
  return useMutation<void, Error, void>({
    mutationFn: api.logout,
    onSuccess: () => {
      clearUser()
    }
  })
}

export function useCurrentUser() {
  const setUser = useAuthStore(state => state.setUser)
  
  return useQuery<AuthResponse, Error>({
    queryKey: ['currentUser'],
    queryFn: api.getCurrentUser,
    retry: false,
    enabled: true
  })
}
