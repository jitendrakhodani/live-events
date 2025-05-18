import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type User = {
  id: string
  username: string
  email: string
} | null

type AuthStore = {
  user: User
  setUser: (user: User) => void
  clearUser: () => void
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: 'auth-storage',
    }
  )
)
