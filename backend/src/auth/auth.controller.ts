import {
  Body,
  Controller,
  Post,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @Post('login')
 login(
  @Body()
  body: {
    username: string;
    password: string;
  },
  @Res({ passthrough: true }) res,
) {
    const result = this.authService.login(
      body.username,
      body.password,
    );

    res.cookie('admin_token', result.access_token, {
      httpOnly: true,
      sameSite: 'lax',
      secure: false,
    });

    return { message: 'Login successful' };
  }

  @Post('logout')
logout(@Res({ passthrough: true }) res) {
  res.clearCookie('admin_token');

  return { message: 'Logout successful' };
}

}

