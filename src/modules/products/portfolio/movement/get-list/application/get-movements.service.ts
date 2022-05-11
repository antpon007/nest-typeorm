import { Inject } from '@nestjs/common';
import { IMovementRepository } from '../../shared/domain/Imovement-find.repository';
import { MovementType } from '../../shared/domain/movement.dto';
import { ResponseMovementType } from '../domain/get-movement.dto';

//TODO: userId - hacerlo dinamicamente por el que venga en el payload
const userId = 'f6bfbf30-231b-46eb-ad34-ff9646ca59af';
export class GetMovementService {
  constructor(
    @Inject('MOVEMENT_FIND_REPOSITORY')
    private readonly findRepository: IMovementRepository,
  ) {}

  async findByUserId(
    startDate: Date,
    endDate: Date,
  ): Promise<ResponseMovementType> {
    try {
      const result: ResponseMovementType = await this.findRepository.findByUserId(
        userId,
        startDate,
        endDate,
      );
      return result;
    } catch (error) {
      throw error;
    }
  }

  async findByMovementId(movementId: string): Promise<MovementType> {
    try {
      const result: MovementType = await this.findRepository.findById(
        movementId,
      );
      return result;
    } catch (error) {
      throw error;
    }
  }

  async findByProductId(
    productId: string,
    startDate: Date,
    endDate: Date,
  ): Promise<ResponseMovementType> {
    try {
      const result: ResponseMovementType = await this.findRepository.findByProductId(
        productId,
        startDate,
        endDate,
      );
      return result;
    } catch (error) {
      throw error;
    }
  }
}
