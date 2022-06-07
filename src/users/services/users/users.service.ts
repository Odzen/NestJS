import { Injectable } from '@nestjs/common';
import { User, SerializedUser } from '../../types';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      username: 'Juanse',
      password: '291',
    },
    {
      id: 2,
      username: 'Mario',
      password: 'aasd',
    },
    {
      id: 3,
      username: 'Sofia',
      password: 'sadadf',
    },
    {
      id: 4,
      username: 'Mario',
      password: 'sdfsdfsa',
    },
    {
      id: 5,
      username: 'María',
      password: 'sdfgfs',
    },
    {
      id: 6,
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

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
