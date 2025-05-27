import { create } from 'zustand';
import { signIn, signOut } from '@/data/auth';
import { AuthState } from './types';

export const useAuthStore = create<AuthState>(
  (set) => ({
    userId: undefined,
    permissions: undefined,
    loading: false,
    handleSignIn: async () => {
      set({ loading: true });
      const { id, permissions } = await signIn();
      set({
        userId: id,
        permissions: permissions,
        loading: false,
      });
    },
    handleSignOut: async () => {
      await signOut();
      set({
        userId: undefined,
        permissions: undefined,
        loading: false,
      });
    },
  }),
);
