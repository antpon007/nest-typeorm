import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MovementEntity } from './movement.entity';
import { IMovementRepository } from '../domain/Imovement-find.repository';
import { MovementType } from '../domain/movement.dto';
import { ResponseMovementType } from '../../get-list/domain/get-movement.dto';

@Injectable()
export class MovementFindRepository implements IMovementRepository {
  constructor(
    @InjectRepository(MovementEntity)
    private readonly movementRP: Repository<MovementEntity>,
  ) {}

  async findById(movementId: string): Promise<MovementType> | null {
    const result: MovementType = await this.movementRP.findOne({
      where: { movementId },
    });
    return result ? { ...result } : null;
  }

  // TODO: me falta mostrar los movimientos de todas las cuentas del usuario
  async findByUserId(
    userId: string,
    startDate: Date,
    endDate: Date,
  ): Promise<ResponseMovementType> | null {
    const result: MovementType[] = await this.movementRP.find();

    const movements: MovementType[] = result.filter(item => {
      return item.createDt >= startDate && item.createDt <= endDate;
    });

    const averageMovements: number = this.calculateAverage(movements);

    return { movements, average: averageMovements };
  }

  calculateAverage(movements: MovementType[]): number {
    let total: number = 0;
    if (movements.length === 0) return 0;

    movements.forEach(item => {
      total += item.amount;
    });
    total = total / movements.length;
    return total;
  }

  async findByProductId(
    productId: string,
    startDate: Date,
    endDate: Date,
  ): Promise<ResponseMovementType> | null {
    const result: MovementType[] = await this.movementRP.find({
      where: { productId },
    });

    const movements: MovementType[] = result.filter(item => {
      return item.createDt >= startDate && item.createDt <= endDate;
    });

    const averageMovements: number = this.calculateAverage(movements);

    return { movements, average: averageMovements };
  }
}
