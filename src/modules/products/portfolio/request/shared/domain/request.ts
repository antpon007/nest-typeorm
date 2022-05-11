import { UUID } from 'src/modules/shared/domain/value-objects/generate-uuid';
import { PRODUCT_REQUEST_STATUS } from 'src/modules/shared/domain/value-objects/product-status';
import { ProductRequestType } from './request.dto';

export class ProductRequest {
  public readonly requestId: UUID;
  public readonly userId: string;
  public readonly type: number;
  public readonly status: number;
  public readonly createDt: Date;
  public readonly updateDt?: Date;

  constructor(input: ProductRequestType) {
    this.requestId = input.requestId
      ? new UUID(input.requestId)
      : UUID.random();
    this.userId = input.userId;
    this.type = input.type;
    this.status = input.status ? input.status : PRODUCT_REQUEST_STATUS.PENDING;
    this.createDt = input.createDt ? input.createDt : new Date();
    this.updateDt = input.updateDt;
  }

  toPrimitives() {
    return {
      requestId: this.requestId.toString(),
      userId: this.userId,
      type: this.type,
      status: this.status,
      createDt: this.createDt,
      updateDt: this.updateDt,
    };
  }
}
