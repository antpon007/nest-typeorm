import { ProductRequest } from '../../shared/domain/request';

export interface IProductRequestCreateRepository {
  handle(productRequest: ProductRequest): Promise<void>;
}
