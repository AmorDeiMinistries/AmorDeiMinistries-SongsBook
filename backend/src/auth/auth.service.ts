import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  login(username: string, password: string) {
    const adminUsername = process.env.ADMIN_USERNAME;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (
      username !== adminUsername ||
      password !== adminPassword
    ) {
      throw new UnauthorizedException(
        'Invalid credentials',
      );
    }

    const payload = { role: 'admin' };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}