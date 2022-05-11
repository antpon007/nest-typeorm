import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovementService } from './create/application/movement.service';
import { CreateController } from './create/infraestructure/movement.controller';
import { MovementFindRepository } from './shared/infraestructure/movement-find.repository';
import { MovementEntity } from './shared/infraestructure/movement.entity';
import { GetMovementService } from './get-list/application/get-movements.service';
import { GetMovementController } from './get-list/infraestructure/get-movements.controller';
import { MovementCreateRepository } from './create/infraestructure/movement-create.repository';

@Module({
  providers: [
    MovementService,
    GetMovementService,
    {
      provide: 'MOVEMENT_CREATE_REPOSITORY',
      useClass: MovementCreateRepository,
    },
    {
      provide: 'MOVEMENT_FIND_REPOSITORY',
      useClass: MovementFindRepository,
    },
  ],
  controllers: [CreateController, GetMovementController],
  imports: [TypeOrmModule.forFeature([MovementEntity])],
})
export class MovementModule {}
