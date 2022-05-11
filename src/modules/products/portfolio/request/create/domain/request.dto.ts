import { IsNotEmpty, IsNumber } from 'class-validator';
import { PRODUCT_TYPE } from './../../../../../shared/domain/value-objects/product-type';

export class RequestCreateDTO {
  @IsNotEmpty()
  @IsNumber()
  type: PRODUCT_TYPE;

  userId: string;
}
