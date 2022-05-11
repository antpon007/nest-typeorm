import { Entity, Column, PrimaryColumn } from 'typeorm';
import { Movement } from '../domain/movement';

class MovementEntityMap implements Partial<Movement> {
  public movementId: any;
  public userId: string;
  public type: number;
  public entity: string;
  public amount: number;
  public tax: number;
  public status: number;
  public createDt: Date;
  public updateDt?: Date;
}

@Entity('movement')
export class MovementEntity implements Partial<MovementEntityMap> {
  @PrimaryColumn({ name: 'movement_id', type: String, length: 50 })
  movementId: string;

  @Column({ name: 'product_id', length: 50 })
  productId: string;

  @Column({ name: 'type' })
  type: number;

  @Column({ name: 'entity', length: 500 })
  entity: string;

  @Column({ name: 'amount' })
  amount: number;

  @Column({ name: 'tax' })
  tax: number;

  @Column({ name: 'status' })
  status: number;

  @Column({ name: 'create_dt' })
  createDt: Date;

  @Column({ name: 'update_dt' })
  updateDt?: Date;
}
