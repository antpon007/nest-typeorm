import { UUID } from 'src/modules/shared/domain/value-objects/generate-uuid';
import { MOVEMENT_STATUS } from 'src/modules/shared/domain/value-objects/product-status';
import { MovementType } from './movement.dto';

export class Movement {
  public readonly movementId: UUID;
  public readonly productId: string;
  public readonly type: number;
  public readonly entity: string;
  public readonly amount: number;
  public readonly tax: number;
  public readonly status: number;
  public readonly createDt: Date;
  public readonly updateDt?: Date;

  constructor(input: MovementType) {
    this.movementId = input.movementId
      ? new UUID(input.movementId)
      : UUID.random();
    this.productId = input.productId;
    this.type = input.type;
    this.entity = input.entity;
    this.amount = input.amount;
    this.tax = input.tax;
    this.status = input.status ? input.status : MOVEMENT_STATUS.APPROVED;
    this.createDt = input.createDt ? input.createDt : new Date();
    this.updateDt = input.updateDt;
  }

  toPrimitives() {
    return {
      movementId: this.movementId.toString(),
      productId: this.productId,
      type: this.type,
      status: this.status,
      entity: this.entity,
      amount: this.amount,
      tax: this.tax,
      createDt: this.createDt,
      updateDt: this.updateDt,
    };
  }
}
