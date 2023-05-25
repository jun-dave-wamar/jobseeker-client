import {create} from 'zustand'
import { persist } from 'zustand/middleware'

 let authStore = (set) => ({
  role: '',
  user: '',
  email: '',
  token: '',
  isOpen: false,
  setRole: (newRole) => set(() => ({ role: newRole })),
  setUser: (newUser) => set(() => ({ user: newUser })),
  setEmail: (newEmail) => set(() => ({ email: newEmail })),
  setToken: (newToken) => set(() => ({ token: newToken })),
  setOpen: (newOpen) => set(()=>({isOpen: newOpen})),
  clearStore: () => set(() => ({ role: '', user: '', email: '', token: '' }))
})

authStore = persist(authStore, {name: 'user_settings'});

export const useStore = create(authStore);