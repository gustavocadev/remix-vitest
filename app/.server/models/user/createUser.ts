import { User } from '@prisma/client';
import { db } from '../../prisma';

export const createUser = (user: Omit<User, 'id'>) => {
  return db.user.create({
    data: user,
  });
};
