import { Controller, Post, Body, Res } from '@nestjs/common';
import { LoginService } from '../application/login.service';
import { ResponseLoginType, UserLoginDTO } from '../domain/login.dto';
import { Req } from '@nestjs/common';
import { generalResponse } from 'src/backend/libs/general-response';
import { Request, Response } from 'express';

@Controller('user')
export class LoginController {
  constructor(private userLoginServices: LoginService) {}

  @Post('login')
  async handle(
    @Body() input: UserLoginDTO,
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<void> {
    try {
      const login: ResponseLoginType = await this.userLoginServices.handle(
        input,
      );
      const responseUser = { ...login };
      delete responseUser.user.password;
      generalResponse(request, response, {
        data: login.valid ? responseUser.user : null,
        status: login.valid ? 200 : 401,
        message: login.valid ? 'successful login' : 'Invalid User/Password',
      });
    } catch ({ message }) {
      generalResponse(request, response, { status: 500, error: message });
    }
  }
}
