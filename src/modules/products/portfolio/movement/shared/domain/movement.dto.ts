import { IsNotEmpty } from 'class-validator';

export class MovementFindDTO {
  @IsNotEmpty()
  movementId: string;
}

export type MovementType = {
  movementId?: string;
  productId: string;
  type: number;
  entity?: string;
  amount: number;
  tax: number;
  status?: number;
  createDt?: Date;
  updateDt?: Date;
};
