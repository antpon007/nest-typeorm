import { DynamicModule } from '@nestjs/common';
import { Environment } from './../../config/enum/environment.enum';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { ConnectionOptions } from 'typeorm';
import { MovementEntity } from '../products/portfolio/movement/shared/infraestructure/movement.entity';
import { ProductRequestEntity } from '../products/portfolio/request/shared/infraestructure/request.entity';
import { ProductEntity } from '../products/shared/infraestructure/product.entity';
import { UserEntity } from '../user/shared/infraestructure/user.entity';

export const DatabaseProvider: DynamicModule = TypeOrmModule.forRootAsync({
  inject: [ConfigService],
  async useFactory(config: ConfigService) {
    const isDevelopmentEnv = config.get('NODE_ENV') !== Environment.Production;
    const dbConfig = {
      type: 'mysql', // type database
      host: config.get('DB_HOST'), //server  database
      port: config.get('DB_PORT'), // port the database
      username: config.get('DB_USER'), //user database
      password: config.get('DB_PASSWORD'),
      database: config.get('DB_NAME'),
      synchronize: false, //isDevelopmentEnv se puede colcoar si se quiere sincronizar en desarrollo
      entities: [
        UserEntity,
        ProductEntity,
        ProductRequestEntity,
        MovementEntity,
      ],
    } as ConnectionOptions;

    return dbConfig;
  },
});
