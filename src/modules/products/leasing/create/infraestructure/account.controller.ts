import { Controller, Post, Res } from '@nestjs/common';
import { Req } from '@nestjs/common';
import { generalResponse } from 'src/backend/libs/general-response';
import { Request, Response } from 'express';
import { AccountService } from '../application/account.service';

@Controller('product/leasing')
export class CreateController {
  constructor(private accountCreateServices: AccountService) {}

  @Post('')
  async handle(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<void> {
    try {
      await this.accountCreateServices.handle();
      generalResponse(request, response, {
        status: 200,
        message: 'successfully created account',
      });
    } catch ({ message }) {
      generalResponse(request, response, { status: 500, error: message });
    }
  }
}
