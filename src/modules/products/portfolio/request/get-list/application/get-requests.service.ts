import { Inject } from '@nestjs/common';
import { IRequestFindRepository } from '../../shared/domain/Irequest-find.repository';
import { ProductRequestType } from '../../shared/domain/request.dto';

//TODO: userId - hacerlo dinamicamente por el que venga en el payload
const userId = 'f6bfbf30-231b-46eb-ad34-ff9646ca59af';
export class GetProductRequestService {
  constructor(
    @Inject('REQUEST_FIND_REPOSITORY')
    private readonly findRepository: IRequestFindRepository,
  ) {}

  async findByUserId(): Promise<ProductRequestType[]> {
    try {
      const result: ProductRequestType[] = await this.findRepository.findByUserId(
        userId,
      );
      return result;
    } catch (error) {
      throw error;
    }
  }

  async findByProductId(requestId: string): Promise<ProductRequestType> {
    try {
      const result: ProductRequestType = await this.findRepository.findById(
        userId,
        requestId,
      );
      return result;
    } catch (error) {
      throw error;
    }
  }
}
