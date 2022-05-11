import { Body, Controller, Post, Res } from '@nestjs/common';
import { Req } from '@nestjs/common';
import { generalResponse } from 'src/backend/libs/general-response';
import { Request, Response } from 'express';
import { ProductRequestService } from '../application/request.service';
import { RequestCreateDTO } from '../domain/request.dto';

@Controller('product/request')
export class CreateController {
  constructor(private requestCreateServices: ProductRequestService) {}

  @Post('')
  async handle(
    @Body() input: RequestCreateDTO,
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<void> {
    try {
      await this.requestCreateServices.handle(input);
      generalResponse(request, response, {
        status: 200,
        message: 'successfully created request',
      });
    } catch ({ message }) {
      generalResponse(request, response, { status: 500, error: message });
    }
  }
}
