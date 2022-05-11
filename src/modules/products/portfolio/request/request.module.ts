import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRequestService } from './create/application/request.service';
import { ProductRequestCreateRepository } from './create/infraestructure/request-create.repository';
import { CreateController } from './create/infraestructure/request.controller';
import { ProductRequestFindRepository } from './shared/infraestructure/request-find.repository';
import { ProductRequestEntity } from './shared/infraestructure/request.entity';
import { GetProductRequestService } from './get-list/application/get-requests.service';
import { GetProductRequestController } from './get-list/infraestructure/get-requests.controller';

@Module({
  providers: [
    ProductRequestService,
    GetProductRequestService,
    {
      provide: 'REQUEST_CREATE_REPOSITORY',
      useClass: ProductRequestCreateRepository,
    },
    {
      provide: 'REQUEST_FIND_REPOSITORY',
      useClass: ProductRequestFindRepository,
    },
  ],
  controllers: [CreateController, GetProductRequestController],
  imports: [TypeOrmModule.forFeature([ProductRequestEntity])],
})
export class RequestModule {}
