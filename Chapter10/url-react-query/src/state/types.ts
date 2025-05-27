export type AuthState = {
  userId: undefined | string;
  permissions: undefined | string[];
  loading: boolean;
  handleSignIn: () => Promise<void>;
  handleSignOut: () => Promise<void>;
};

export type UserState = {
  userId: string;
  userName: string;
  email: string;
};
