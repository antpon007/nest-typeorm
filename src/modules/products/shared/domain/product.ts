import { UUID } from 'src/modules/shared/domain/value-objects/generate-uuid';
import { PRODUCT_STATUS } from 'src/modules/shared/domain/value-objects/product-status';
import { ProductType } from './product.dto';

export class Product {
  public readonly productId: UUID;
  public readonly userId: string;
  public readonly type: number;
  public readonly status: number;
  public readonly createDt: Date;
  public readonly updateDt?: Date;

  constructor(input: ProductType) {
    this.productId = input.productId
      ? new UUID(input.productId)
      : UUID.random();
    this.userId = input.userId;
    this.type = input.type;
    this.status = input.status ? input.status : PRODUCT_STATUS.ACTIVE;
    this.createDt = input.createDt ? input.createDt : new Date();
    this.updateDt = input.updateDt;
  }

  toPrimitives() {
    return {
      productId: this.productId.toString(),
      userId: this.userId,
      type: this.type,
      status: this.status,
      createDt: this.createDt,
      updateDt: this.updateDt,
    };
  }
}
