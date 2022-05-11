import { Module } from '@nestjs/common';
import { UserEntity } from './../user/shared/infraestructure/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UserModule } from '../user/user.module';
import { ProductEntity } from '../products/shared/infraestructure/product.entity';
import { ProductRequestEntity } from '../products/portfolio/request/shared/infraestructure/request.entity';
import { MovementEntity } from '../products/portfolio/movement/shared/infraestructure/movement.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // type database
      host: '', //server  database
      port: 3306, // port the database
      username: '', //user database
      password: '',
      database: '',
      entities: [
        UserEntity,
        ProductEntity,
        ProductRequestEntity,
        MovementEntity,
      ],
      synchronize: false,
    }),
    UserModule,
  ],
})
export class DatabaseModule {
  constructor(private readonly connection: Connection) {}
}
