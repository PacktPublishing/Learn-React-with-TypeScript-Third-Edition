import {
  Address,
  Hobbies,
  Profile,
  User,
} from './schema';

const DELAY = 1000;

export async function getUser(
  id: string,
): Promise<User> {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          id,
          name: 'Bob',
          email: 'bob@somewhere.com',
        }),
      DELAY,
    ),
  );
}

export async function getAddress(
  id: string,
): Promise<Address> {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          id,
          line1: '56 Sawier Avenue',
          line2: 'Suite 3',
          state: 'Los Angeles',
          zipcode: 'CA 90001',
        }),
      DELAY,
    ),
  );
}

export async function getHobbies(
  id: string,
): Promise<Hobbies> {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          id,
          hobbies: ['Golf', 'Running'],
        }),
      DELAY,
    ),
  );
}

export async function getProfile(
  id: string,
): Promise<Profile> {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          id,
          dateOfBirth: '2074-12-19T00:00:00.000Z',
          gender: 'Male',
          occupation: 'Engineer',
        }),
      DELAY,
    ),
  );
}
