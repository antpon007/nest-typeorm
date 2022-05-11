import { Controller, Res, Get, Param } from '@nestjs/common';
import { Req } from '@nestjs/common';
import { generalResponse } from 'src/backend/libs/general-response';
import { Request, Response } from 'express';
import { GetAccountService } from '../application/get-accounts.service';
import { ProductType } from '../../../shared/domain/product.dto';

@Controller('product')
export class GetAccountController {
  constructor(private findAccountService: GetAccountService) {}

  @Get('')
  async findByUserId(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<void> {
    try {
      const products: ProductType[] = await this.findAccountService.findByUserId();
      generalResponse(request, response, {
        data: products,
        status: 200,
      });
    } catch ({ message }) {
      generalResponse(request, response, { status: 500, error: message });
    }
  }
}
