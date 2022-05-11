import { IsNotEmpty } from 'class-validator';

export class ProductRequestFindDTO {
  @IsNotEmpty()
  requestId: string;
}

export type ProductRequestType = {
  requestId?: string;
  userId: string;
  type: number;
  status?: number;
  createDt?: Date;
  updateDt?: Date;
};
