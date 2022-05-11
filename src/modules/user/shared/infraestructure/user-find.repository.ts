import { Injectable } from '@nestjs/common';
import { IUserFindRepository } from './../domain/Iuser-find.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserType } from '../domain/user.dto';
import { UserEntity } from './user.entity';
@Injectable()
export class UserFindRepository implements IUserFindRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRP: Repository<UserEntity>,
  ) {}

  async findByPersonalId(personalId: string): Promise<UserType> | null {
    const result: UserType = await this.userRP.findOne({
      where: { personalId },
    });
    return result ? { ...result } : null;
  }
}
