import { Inject } from '@nestjs/common';
import { IProductFindRepository } from 'src/modules/products/shared/domain/Iproduct-find.repository';
import { ProductType } from 'src/modules/products/shared/domain/product.dto';

//TODO: userId - hacerlo dinamicamente por el que venga en el payload
const userId = 'f6bfbf30-231b-46eb-ad34-ff9646ca59af';
export class GetAccountService {
  constructor(
    @Inject('PRODUCT_FIND_REPOSITORY')
    private readonly findRepository: IProductFindRepository,
  ) {}

  async findByUserId(): Promise<ProductType[]> {
    try {
      const result: ProductType[] = await this.findRepository.findByUserId(
        userId,
      );
      return result;
    } catch (error) {
      throw error;
    }
  }
}
