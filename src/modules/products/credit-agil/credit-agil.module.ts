import { Module } from '@nestjs/common';
import { CreditAgilService } from './credit-agil.service';

@Module({
  providers: [CreditAgilService]
})
export class CreditAgilModule {}
