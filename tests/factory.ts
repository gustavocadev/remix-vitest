import { faker } from '@faker-js/faker';
import { createUser } from '~/.server/models/user/createUser';

// here we are creating a factory function that creates a user with random data
export const createNormalUser = async () => {
  const user = await createUser({
    last_name: faker.person.lastName(),
    name: faker.person.firstName(),
    username: faker.internet.userName(),
    passwordHash: faker.internet.password(),
  });
  return user;
};
