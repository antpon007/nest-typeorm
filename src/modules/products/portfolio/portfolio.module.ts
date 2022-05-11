import { Module } from '@nestjs/common';
import { GetProductRequestService } from './request/get-list/application/get-requests.service';
import { RequestModule } from './request/request.module';
import { ProductRequestFindRepository } from './request/shared/infraestructure/request-find.repository';
import { GetProductRequestController } from './request/get-list/infraestructure/get-requests.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRequestEntity } from './request/shared/infraestructure/request.entity';
import { GetAccountController } from './get-list/infraestructure/get-accounts.controller';
import { GetAccountService } from './get-list/application/get-accounts.service';
import { ProductFindRepository } from '../shared/infraestructure/product-find.repository';
import { ProductEntity } from 'src/modules/products/shared/infraestructure/product.entity';
import { MovementModule } from './movement/movement.module';

@Module({
  providers: [
    GetAccountService,
    GetProductRequestService,
    {
      provide: 'PRODUCT_FIND_REPOSITORY',
      useClass: ProductFindRepository,
    },
    {
      provide: 'REQUEST_FIND_REPOSITORY',
      useClass: ProductRequestFindRepository,
    },
  ],
  controllers: [GetProductRequestController, GetAccountController],
  imports: [
    TypeOrmModule.forFeature([ProductRequestEntity, ProductEntity]),
    RequestModule,
    MovementModule,
  ],
})
export class PortfolioModule {}
