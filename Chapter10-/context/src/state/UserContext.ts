import { createContext } from 'react';

import type { UserState } from './types';

export const UserContext =
  createContext<UserState>({
    userName: undefined,
    permissions: undefined,
    loading: false,
    handleSignIn: () => new Promise(() => {}),
    handleSignOut: () => new Promise(() => {}),
    togglePermissions: () => {},
  });
