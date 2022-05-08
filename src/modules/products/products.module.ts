import { Module } from '@nestjs/common';
import { AccountModule } from './account/account.module';
import { CreditAgilModule } from './credit-agil/credit-agil.module';
import { CreditCardModule } from './credit-card/credit-card.module';
import { LeasingModule } from './leasing/leasing.module';
import { MovementModule } from './movement/movement.module';

@Module({
  imports: [AccountModule, CreditAgilModule, CreditCardModule, LeasingModule, MovementModule]
})
export class ProductsModule {}
