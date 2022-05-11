import { Controller, Res, Get, Param } from '@nestjs/common';
import { Req } from '@nestjs/common';
import { generalResponse } from 'src/backend/libs/general-response';
import { Request, Response } from 'express';
import { GetProductRequestService } from '../application/get-requests.service';
import { ProductRequestType } from '../../shared/domain/request.dto';

@Controller('product/request')
export class GetProductRequestController {
  constructor(private findRequestService: GetProductRequestService) {}

  @Get('')
  async findByUserId(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<void> {
    try {
      const products: ProductRequestType[] = await this.findRequestService.findByUserId();
      generalResponse(request, response, {
        data: products,
        status: 200,
      });
    } catch ({ message }) {
      generalResponse(request, response, { status: 500, error: message });
    }
  }

  @Get(':id')
  async findById(
    @Param('id') productId: string,
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<void> {
    try {
      const product: ProductRequestType = await this.findRequestService.findByProductId(
        productId,
      );
      generalResponse(request, response, {
        data: product,
        status: 200,
      });
    } catch ({ message }) {
      generalResponse(request, response, { status: 500, error: message });
    }
  }
}
