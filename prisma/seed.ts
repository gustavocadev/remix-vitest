import { faker } from '@faker-js/faker';
import { db } from '~/.server/prisma';

await db.user.create({
  data: {
    last_name: faker.person.firstName(),
    name: faker.person.lastName(),
    passwordHash: faker.internet.password(),
    username: faker.internet.userName(),
  },
});
