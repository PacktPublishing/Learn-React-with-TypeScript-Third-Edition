import { create } from 'zustand';
import { signIn, signOut } from '@/data/auth';
import { UserState } from './types';

export const useUserStore = create<UserState>(
  (set) => ({
    userName: undefined,
    permissions: undefined,
    loading: false,
    handleSignIn: async () => {
      set({ loading: true });
      const user = await signIn();
      set({
        userName: user.name,
        permissions: user.permissions,
        loading: false,
      });
    },
    handleSignOut: async () => {
      await signOut();
      set({
        userName: undefined,
        permissions: undefined,
        loading: false,
      });
    },
    togglePermissions: () =>
      set((state) =>
        state.permissions?.length === 0
          ? { permissions: ['admin'] }
          : { permissions: [] },
      ),
  }),
);
