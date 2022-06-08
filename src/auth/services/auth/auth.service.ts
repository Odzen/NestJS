import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from '../../../users/services/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
  ) {}

  async validateUser(username: string, password: string) {
    console.log("Inside validateUser");
    const userDB = await this.userService.findUserByUsername(username);
    if (userDB && userDB.password === password) {
      console.log('User Validation Successful!!');
      return userDB;
    }
    console.log('User Validation Failed');
    return null;
  }
}
