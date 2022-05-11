import { IsNotEmpty, IsNumber } from 'class-validator';
import { MOVEMENT_TYPE } from 'src/modules/shared/domain/value-objects/movement-type';

export class MovementCreateDTO {
  @IsNotEmpty()
  @IsNumber()
  type: MOVEMENT_TYPE;

  productId: string;

  @IsNotEmpty()
  entity: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsNumber()
  tax: number;
}
