import { Inject } from '@nestjs/common';
import { ProductType } from 'src/modules/products/shared/domain/product.dto';
import { PRODUCT_TYPE } from 'src/modules/shared/domain/value-objects/product-type';
import { IProductRequestCreateRepository } from '../domain/Irequest-create.repository';
import { ProductRequest } from '../../shared/domain/request';
import { RequestCreateDTO } from '../domain/request.dto';

//TODO: userId - hacerlo dinamicamente por el que venga en el payload
const userId = 'f6bfbf30-231b-46eb-ad34-ff9646ca59af';

export class ProductRequestService {
  constructor(
    @Inject('REQUEST_CREATE_REPOSITORY')
    private readonly createRepository: IProductRequestCreateRepository,
  ) {}
  async handle(newRequestProduct: RequestCreateDTO): Promise<void> {
    try {
      newRequestProduct.userId = userId;
      const newRequest: ProductRequest = new ProductRequest(newRequestProduct);

      await this.createRepository.handle(newRequest);
    } catch (error) {
      throw error;
    }
  }
}
