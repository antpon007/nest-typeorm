import { Controller, Res, Get, Param, Body, Post } from '@nestjs/common';
import { Req } from '@nestjs/common';
import { generalResponse } from 'src/backend/libs/general-response';
import { Request, Response } from 'express';
import { GetMovementService } from '../application/get-movements.service';
import { MovementType } from '../../shared/domain/movement.dto';
import {
  InputDateMovementDTO,
  ResponseMovementType,
} from '../domain/get-movement.dto';

@Controller('movement')
export class GetMovementController {
  constructor(private findRequestService: GetMovementService) {}

  @Get('')
  async findByUserId(
    @Body() input: InputDateMovementDTO,
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<void> {
    try {
      const movements: ResponseMovementType = await this.findRequestService.findByUserId(
        new Date(input.startDate),
        new Date(input.endDate),
      );
      generalResponse(request, response, {
        data: movements,
        status: 200,
      });
    } catch ({ message }) {
      generalResponse(request, response, { status: 500, error: message });
    }
  }

  @Get(':id')
  async findById(
    @Param('id') movementId: string,
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<void> {
    try {
      const movement: MovementType = await this.findRequestService.findByMovementId(
        movementId,
      );
      generalResponse(request, response, {
        data: movement,
        status: 200,
      });
    } catch ({ message }) {
      generalResponse(request, response, { status: 500, error: message });
    }
  }

  @Post('producto/:id')
  async findByProductId(
    @Param('id') productId: string,
    @Body() input: InputDateMovementDTO,
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<void> {
    try {
      const movement: ResponseMovementType = await this.findRequestService.findByProductId(
        productId,
        new Date(input.startDate),
        new Date(input.endDate),
      );
      generalResponse(request, response, {
        data: movement,
        status: 200,
      });
    } catch ({ message }) {
      generalResponse(request, response, { status: 500, error: message });
    }
  }
}
