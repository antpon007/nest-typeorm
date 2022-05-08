import { Module } from '@nestjs/common';
import { LoginService } from './login/login.service';
import { RegisterService } from './register/application/register.service';
import { RegisterController } from './register/infraestructure/register.controller';
import { LoginController } from './login/login.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './shared/infraestructure/user.entity';
import { UserRegisterRepository } from './register/infraestructure/user-register.repository';
import { UserFindRepository } from './shared/infraestructure/user-find.repository';
import { Repository } from 'typeorm';

@Module({
  providers: [
    LoginService,
    RegisterService,
    {
      provide: 'USER_REGISTER_REPOSITORY',
      useFactory: () => {
        return UserRegisterRepository;
      },
    },
    {
      provide: 'USER_FIND_REPOSITORY',
      useFactory: () => {
        return UserFindRepository;
      },
    },
  ],
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [RegisterController, LoginController],
})
export class UserModule {}
