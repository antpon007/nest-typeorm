import { Module } from '@nestjs/common';
import { LeasingService } from './leasing.service';

@Module({
  providers: [LeasingService]
})
export class LeasingModule {}
