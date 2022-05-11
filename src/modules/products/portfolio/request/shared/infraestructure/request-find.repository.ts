import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductRequestEntity } from './request.entity';
import { IRequestFindRepository } from '../domain/Irequest-find.repository';
import { ProductRequestType } from '../domain/request.dto';

@Injectable()
export class ProductRequestFindRepository implements IRequestFindRepository {
  constructor(
    @InjectRepository(ProductRequestEntity)
    private readonly RequestRP: Repository<ProductRequestEntity>,
  ) {}

  async findById(
    userId: string,
    requestId: string,
  ): Promise<ProductRequestType> | null {
    const result: ProductRequestType = await this.RequestRP.findOne({
      where: { userId, requestId },
    });
    return result ? { ...result } : null;
  }

  async findByUserId(userId: string): Promise<ProductRequestType[]> | null {
    const result: ProductRequestType[] = await this.RequestRP.find({
      where: { userId },
    });
    return result;
  }
}
