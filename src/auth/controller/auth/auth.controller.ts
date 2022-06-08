import { Controller, Post, UseGuards, Get, Session, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthenticatedGuard, LocalGuard } from '../../utils/LocalGuard';

@Controller('auth')
export class AuthController {
  @UseGuards(LocalGuard)
  @Post('login')
  async login(@Request() req) {}

  @Get('')
  async getAuthSession(@Session() session: Record<string, any>) {
    console.log(session);
    session.authenticated = true;
    return session;
  }

  @UseGuards(AuthenticatedGuard)
  @Get('status')
  async getAuthStatus() {}
}
