import { Inject } from '@nestjs/common';
import { Product } from 'src/modules/products/shared/domain/product';
import { IAccountCreateRepository } from '../domain/Iaccount-create.repository';
import { ProductType } from '../../../shared/domain/product.dto';
import { PRODUCT_TYPE } from 'src/modules/shared/domain/value-objects/product-type';

//TODO: userId - hacerlo dinamicamente por el que venga en el payload
const userId = 'f6bfbf30-231b-46eb-ad34-ff9646ca59af';
export class AccountService {
  constructor(
    @Inject('ACCOUNT_CREATE_REPOSITORY')
    private readonly createRepository: IAccountCreateRepository,
  ) {}
  async handle(): Promise<void> {
    try {
      let newProduct: ProductType = {
        userId,
        type: PRODUCT_TYPE.SAVINGS,
      };
      const newAccount: Product = new Product(newProduct);

      await this.createRepository.handle(newAccount);
    } catch (error) {
      throw error;
    }
  }
}
