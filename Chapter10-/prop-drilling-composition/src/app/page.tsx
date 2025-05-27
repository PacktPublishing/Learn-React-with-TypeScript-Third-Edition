'use client';

import { useState, useCallback } from 'react';
import { Header } from '@/components/Header';
import { Main } from '@/components/Main';
import { signIn, signOut } from '@/data/auth';
import { Content } from '@/components/Content';

export default function Home() {
  const [userName, setUserName] = useState<
    string | undefined
  >();
  const [permissions, setPermissions] = useState<
    string[] | undefined
  >();
  const [loading, setLoading] = useState(false);

  const handleSignIn = useCallback(async () => {
    setLoading(true);
    const user = await signIn();
    setUserName(user.name);
    setPermissions(user.permissions);
    setLoading(false);
  }, []);
  const handleSignOut = useCallback(async () => {
    setLoading(true);
    await signOut();
    setUserName(undefined);
    setPermissions(undefined);
    setLoading(false);
  }, []);

  return (
    <>
      <Header
        userName={userName}
        onSignInClick={handleSignIn}
        onSignOutClick={handleSignOut}
        loading={loading}
      />
      <Main userName={userName}>
        <Content permissions={permissions} />
      </Main>
    </>
  );
}
