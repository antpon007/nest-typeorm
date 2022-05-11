import { Inject } from '@nestjs/common';
import { Movement } from '../../shared/domain/movement';
import { IMovementCreateRepository } from '../domain/Imovement-create.repository';
import { MovementCreateDTO } from '../domain/movement.dto';

export class MovementService {
  constructor(
    @Inject('MOVEMENT_CREATE_REPOSITORY')
    private readonly createRepository: IMovementCreateRepository,
  ) {}
  async handle(movement: MovementCreateDTO): Promise<void> {
    try {
      const newMovement: Movement = new Movement(movement);

      await this.createRepository.handle(newMovement);
    } catch (error) {
      throw error;
    }
  }
}
