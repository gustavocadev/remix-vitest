import { afterEach, describe, expect } from 'vitest';
import { createUser } from '~/.server/models/user/createUser';
import { db } from '~/.server/prisma';

describe('creating a user', (it) => {
  afterEach(async () => {
    // clean up the database
    await db.user.deleteMany();
  });

  it('should create a user', async () => {
    const user = await createUser({
      last_name: 'Doe',
      name: 'John',
      passwordHash: 'password',
      username: 'john_doe',
    });

    expect(user).toBeDefined();
  });

  it('when creating a user with the same username, it should throw an error', async ({
    integration,
  }) => {
    const user = await integration.createNormalUser();

    await expect(
      // try to create a user with the same username
      createUser(user)
    ).rejects.toThrowError();
  });
});
