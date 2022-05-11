import { Module } from '@nestjs/common';
import { RegisterService } from './register/application/register.service';
import { RegisterController } from './register/infraestructure/register.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './shared/infraestructure/user.entity';
import { UserRegisterRepository } from './register/infraestructure/user-register.repository';
import { UserFindRepository } from './shared/infraestructure/user-find.repository';
import { LoginService } from './login/application/login.service';
import { LoginController } from './login/infraestructure/login.controller';

@Module({
  providers: [
    LoginService,
    RegisterService,
    {
      provide: 'USER_REGISTER_REPOSITORY',
      useClass: UserRegisterRepository,
    },
    {
      provide: 'USER_FIND_REPOSITORY',
      useClass: UserFindRepository,
    },
  ],
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [RegisterController, LoginController],
})
export class UserModule {}
