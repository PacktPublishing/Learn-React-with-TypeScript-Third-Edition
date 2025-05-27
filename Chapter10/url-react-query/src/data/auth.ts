'use server';

const DELAY = 1000;

type Auth = {
  id: string;
  permissions: string[];
};
export async function signIn(): Promise<Auth> {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          id: '1',
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
