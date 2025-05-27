'use server';

const DELAY = 1000;

type User = {
  id: string;
  name: string;
  permissions: string[];
};

export async function signIn(): Promise<User> {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          id: '1',
          name: 'Bob',
          permissions: ['admin'],
        }),
      DELAY,
    ),
  );
}

export async function signOut(): Promise<void> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(undefined), DELAY),
  );
}
