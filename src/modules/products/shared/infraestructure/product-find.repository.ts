import { Injectable } from '@nestjs/common';
import { IProductFindRepository } from '../domain/Iproduct-find.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductType } from '../domain/product.dto';
import { ProductEntity } from './product.entity';
import { PRODUCT_TYPE } from 'src/modules/shared/domain/value-objects/product-type';
@Injectable()
export class ProductFindRepository implements IProductFindRepository {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRP: Repository<ProductEntity>,
  ) {}

  async findById(
    userId: string,
    productId: string,
  ): Promise<ProductType> | null {
    console.log(productId);
    const result: ProductType = await this.productRP.findOne({
      where: { userId, productId },
      // relations: ['user'], en caso de usar relaciones
      // skip: offset, take: limit -->  paginación
    });
    return result ? { ...result } : null;
  }

  async findByUserId(userId: string): Promise<ProductType[]> | null {
    const result: ProductType[] = await this.productRP.find({
      where: { userId },
    });
    return result;
  }

  async findByUserIdAndType(
    userId: string,
    type: PRODUCT_TYPE,
  ): Promise<ProductType[]> | null {
    const result: ProductType[] = await this.productRP.find({
      where: { userId, type },
      // relations: ['user'], en caso de usar relaciones
    });
    return result;
  }
}
