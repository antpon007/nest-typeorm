import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreditCardModule } from './credit-card/credit-card.module';
import { CreditEasyModule } from './credit-easy/credit-easy.module';
import { LeasingModule } from './leasing/leasing.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { SavingModule } from './saving-account/saving.module';
import { ProductEntity } from './shared/infraestructure/product.entity';

@Module({
  imports: [
    SavingModule,
    CreditEasyModule,
    CreditCardModule,
    LeasingModule,
    PortfolioModule,
    TypeOrmModule.forFeature([ProductEntity]),
  ],
})
export class ProductsModule {}
