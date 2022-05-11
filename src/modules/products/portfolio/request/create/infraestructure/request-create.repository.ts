import { Injectable } from '@nestjs/common';
import { IProductRequestCreateRepository } from '../domain/Irequest-create.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductRequest } from '../../shared/domain/request';
import { ProductRequestEntity } from '../../shared/infraestructure/request.entity';

@Injectable()
export class ProductRequestCreateRepository
  implements IProductRequestCreateRepository {
  constructor(
    @InjectRepository(ProductRequestEntity)
    private readonly productRP: Repository<ProductRequestEntity>,
  ) {}

  async handle(productRequest: ProductRequest): Promise<void> {
    await this.productRP.save(productRequest.toPrimitives());
  }
}
