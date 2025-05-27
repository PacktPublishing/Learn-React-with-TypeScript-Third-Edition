export function Header({
  userName,
  onSignInClick,
  onSignOutClick,
  loading,
}: {
  userName: string | undefined;
  onSignInClick: () => void;
  onSignOutClick: () => void;
  loading: boolean;
}) {
  return (
    <header>
      {userName ? (
        <>
          <span>{userName} has signed in</span>
          <button
            type="button"
            onClick={onSignOutClick}
            disabled={loading}
          >
            {loading ? '...' : 'Sign out'}
          </button>
        </>
      ) : (
        <button
          type="button"
          onClick={onSignInClick}
          disabled={loading}
        >
          {loading ? '...' : 'Sign in'}
        </button>
      )}
    </header>
  );
}
