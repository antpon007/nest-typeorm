import { ProductType } from './product.dto';
import { PRODUCT_TYPE } from '../../../shared/domain/value-objects/product-type';

export interface IProductFindRepository {
  findById(userId: string, productId: string): Promise<ProductType | null>;
  findByUserIdAndType(
    userId: string,
    type: PRODUCT_TYPE,
  ): Promise<ProductType[] | null>;
  findByUserId(userId: string): Promise<ProductType[] | null>;
}
