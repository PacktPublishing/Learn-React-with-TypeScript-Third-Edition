export type UserState = {
  userName: undefined | string;
  permissions: undefined | string[];
  loading: boolean;
  handleSignIn: () => Promise<void>;
  handleSignOut: () => Promise<void>;
  togglePermissions: () => void;
};
