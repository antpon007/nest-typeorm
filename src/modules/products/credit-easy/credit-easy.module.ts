import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductFindRepository } from '../shared/infraestructure/product-find.repository';
import { ProductEntity } from '../shared/infraestructure/product.entity';
import { AccountService } from './create/application/account.service';
import { AccountCreateRepository } from './create/infraestructure/account-create.repository';
import { CreateController } from './create/infraestructure/account.controller';
import { GetAccountController } from './get-list/infraestructure/get-accounts.controller';
import { GetAccountService } from './get-list/application/get-accounts.service';

@Module({
  providers: [
    AccountService,
    GetAccountService,
    {
      provide: 'ACCOUNT_CREATE_REPOSITORY',
      useClass: AccountCreateRepository,
    },
    {
      provide: 'PRODUCT_FIND_REPOSITORY',
      useClass: ProductFindRepository,
    },
  ],
  controllers: [CreateController, GetAccountController],
  imports: [TypeOrmModule.forFeature([ProductEntity])],
})
export class CreditEasyModule {}
