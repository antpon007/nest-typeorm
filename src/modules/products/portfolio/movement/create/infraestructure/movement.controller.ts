import { Body, Controller, Post, Res } from '@nestjs/common';
import { Req } from '@nestjs/common';
import { generalResponse } from 'src/backend/libs/general-response';
import { Request, Response } from 'express';
import { MovementService } from '../application/movement.service';
import { MovementCreateDTO } from '../domain/movement.dto';

@Controller('movement')
export class CreateController {
  constructor(private movementCreateServices: MovementService) {}

  @Post('')
  async handle(
    @Body() input: MovementCreateDTO,
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<void> {
    try {
      await this.movementCreateServices.handle(input);
      generalResponse(request, response, {
        status: 200,
        message: 'successfully created movement',
      });
    } catch ({ message }) {
      generalResponse(request, response, { status: 500, error: message });
    }
  }
}
