import { Product } from 'src/modules/products/shared/domain/product';

export interface IAccountCreateRepository {
  handle(product: Product): Promise<void>;
}
