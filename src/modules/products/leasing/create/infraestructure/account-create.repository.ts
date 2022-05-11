import { Injectable } from '@nestjs/common';
import { IAccountCreateRepository } from '../domain/Iaccount-create.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from 'src/modules/products/shared/infraestructure/product.entity';
import { Product } from 'src/modules/products/shared/domain/product';

@Injectable()
export class AccountCreateRepository implements IAccountCreateRepository {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRP: Repository<ProductEntity>,
  ) {}

  async handle(product: Product): Promise<void> {
    await this.productRP.save(product.toPrimitives());
  }
}
