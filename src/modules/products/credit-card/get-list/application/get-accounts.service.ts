import { Inject } from '@nestjs/common';
import { IProductFindRepository } from 'src/modules/products/shared/domain/Iproduct-find.repository';
import { ProductType } from 'src/modules/products/shared/domain/product.dto';
import { PRODUCT_TYPE } from 'src/modules/shared/domain/value-objects/product-type';

//TODO: userId - hacerlo dinamicamente por el que venga en el payload
const userId = 'f6bfbf30-231b-46eb-ad34-ff9646ca59af';
export class GetAccountService {
  constructor(
    @Inject('PRODUCT_FIND_REPOSITORY')
    private readonly findRepository: IProductFindRepository,
  ) {}

  async findByUserId(): Promise<ProductType[]> {
    try {
      const result: ProductType[] = await this.findRepository.findByUserIdAndType(
        userId,
        PRODUCT_TYPE.CREDIT_CARD,
      );
      return result;
    } catch (error) {
      throw error;
    }
  }

  async findByProductId(productId: string): Promise<ProductType> {
    try {
      const result: ProductType = await this.findRepository.findById(
        userId,
        productId,
      );
      return result;
    } catch (error) {
      throw error;
    }
  }
}
