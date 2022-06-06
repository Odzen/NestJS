import { Injectable } from '@nestjs/common';
import { User, SerializedUser } from '../../types';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      username: 'Juanse',
      password: '291',
    },
    {
      username: 'Mario',
      password: 'aasd',
    },
    {
      username: 'Sofia',
      password: 'sadadf',
    },
    {
      username: 'Mario',
      password: 'sdfsdfsa',
    },
    {
      username: 'María',
      password: 'sdfgfs',
    },
    {
      username: 'Carla',
      password: 'sdfeew',
    },
  ];

  getUsers() {
    return this.users.map((user) => new SerializedUser(user));
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
