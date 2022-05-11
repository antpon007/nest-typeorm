import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty } from 'class-validator';
import { MovementType } from '../../shared/domain/movement.dto';

export type ResponseMovementType = {
  movements: MovementType[];
  average: number;
};

export class InputDateMovementDTO {
  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  startDate: Date;

  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  endDate: Date;
}
