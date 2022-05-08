import { Injectable } from '@nestjs/common';
import { IUserRegisterRepository } from './../domain/Iuser-register.repository';
import { UserEntity } from '../../shared/infraestructure/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../shared/domain/user';

@Injectable()
export class UserRegisterRepository implements IUserRegisterRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRP: Repository<UserEntity>,
  ) {}

  async handle(user: User): Promise<void> {
    await this.userRP.save(user.toPrimitives());
  }
}
