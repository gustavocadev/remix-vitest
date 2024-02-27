import type { MetaFunction } from '@remix-run/node';
import { Form, json, useLoaderData } from '@remix-run/react';
import { db } from '~/.server/prisma';
import { createUser } from '~/.server/models/user/createUser';
import { faker } from '@faker-js/faker/locale/es';

export async function loader() {
  const users = await db.user.findMany();
  return { users };
}

export const action = async () => {
  await createUser({
    name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    username: faker.internet.userName(),
    passwordHash: faker.internet.password(),
  });

  return json({});
};

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  const { users } = useLoaderData<typeof loader>();
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>Welcome to Remix</h1>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} {user.last_name} ({user.username})
          </li>
        ))}
      </ul>

      <Form method="post">
        <button type="submit">Create User</button>
      </Form>
    </div>
  );
}
