import { Injectable } from '@nestjs/common';
import { User } from '../../types/User';

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
    return this.users;
  }

  getUserNameById(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
