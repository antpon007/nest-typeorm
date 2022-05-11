import { IsNotEmpty } from 'class-validator';

export class ProductFindDTO {
  @IsNotEmpty()
  productId: string;
}

export type ProductType = {
  productId?: string;
  userId: string;
  type: number;
  status?: number;
  createDt?: Date;
  updateDt?: Date;
};
