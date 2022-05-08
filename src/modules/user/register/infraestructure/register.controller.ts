import { Controller, Post, Body, Res } from '@nestjs/common';
import { RegisterService } from '../application/register.service';
import { UserRegisterDTO } from '../domain/register.dto';
import { Req } from '@nestjs/common';
import { generalResponse } from 'src/backend/libs/general-response';
import { Request, Response } from 'express';

@Controller('user')
export class RegisterController {
  constructor(private userRegisterServices: RegisterService) {}

  @Post('register')
  async handle(
    @Body() input: UserRegisterDTO,
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<void> {
    try {
      await this.userRegisterServices.handle(input);
      generalResponse(request, response, {
        status: 200,
        message: 'successfully created user',
      });
    } catch ({ message }) {
      generalResponse(request, response, { status: 500, error: message });
    }
  }
}
