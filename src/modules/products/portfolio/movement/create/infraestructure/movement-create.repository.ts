import { Injectable } from '@nestjs/common';
import { IMovementCreateRepository } from '../domain/Imovement-create.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movement } from '../../shared/domain/movement';
import { MovementEntity } from '../../shared/infraestructure/movement.entity';

@Injectable()
export class MovementCreateRepository implements IMovementCreateRepository {
  constructor(
    @InjectRepository(MovementEntity)
    private readonly movementRP: Repository<MovementEntity>,
  ) {}

  async handle(movement: Movement): Promise<void> {
    await this.movementRP.save(movement.toPrimitives());
  }
}
