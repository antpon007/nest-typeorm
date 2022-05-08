import { Module } from '@nestjs/common';
import { UserEntity } from './../user/shared/infraestructure/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // type database
      host: 'database-dreambank.cvcchelpilam.us-east-1.rds.amazonaws.com', //server  database
      port: 3306, // port the database
      username: 'admin', //user database
      password: 'moimaster123',
      database: 'database-dreambank',
      entities: [UserEntity],
      synchronize: true,
    }),
    UserModule,
  ],
})
export class DatabaseModule {
  constructor(private readonly connection: Connection) {}
}
