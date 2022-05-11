import { ProductRequestType } from './request.dto';

export interface IRequestFindRepository {
  findById(
    userId: string,
    requestId: string,
  ): Promise<ProductRequestType | null>;
  findByUserId(userId: string): Promise<ProductRequestType[] | null>;
}
