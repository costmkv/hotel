import { Injectable } from '@nestjs/common';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 } from 'uuid';

import { User } from './User';

type Ctor = {
  email: string;
};

@Injectable()
export class UserEntity {
  private readonly users: User[] = [];

  async create(user: Ctor): Promise<User> {
    const createdUser = { id: v4(), email: user.email };
    this.users.push(createdUser);
    return createdUser;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }
}
