import { Injectable } from '@nestjs/common';
import { UserRole } from '../enums/user.role.enum';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
      roles: [UserRole.USER, UserRole.ADMIN],
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
      roles: [UserRole.USER],
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
