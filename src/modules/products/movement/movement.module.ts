import { Module } from '@nestjs/common';
import { MovementService } from './movement.service';

@Module({
  providers: [MovementService]
})
export class MovementModule {}
