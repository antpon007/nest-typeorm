import { ResponseMovementType } from '../../get-list/domain/get-movement.dto';
import { MovementType } from './movement.dto';

export interface IMovementRepository {
  findById(requestId: string): Promise<MovementType | null>;
  findByUserId(
    userId: string,
    startDate: Date,
    endDate: Date,
  ): Promise<ResponseMovementType | null>;
  findByProductId(
    productId: string,
    startDate: Date,
    endDate: Date,
  ): Promise<ResponseMovementType | null>;
}
