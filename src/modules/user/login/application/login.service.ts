import { Inject } from '@nestjs/common';
import { verify } from 'src/modules/shared/infraestructure/crypto-string';
import { IUserFindRepository } from '../../shared/domain/Iuser-find.repository';
import { User } from '../../shared/domain/user';
import { ResponseLoginType, UserLoginDTO } from '../domain/login.dto';
import { UserType } from '../../shared/domain/user.dto';

export class LoginService {
  constructor(
    @Inject('USER_FIND_REPOSITORY')
    private readonly findRepository: IUserFindRepository,
  ) {}
  async handle(input: UserLoginDTO): Promise<ResponseLoginType> {
    try {
      const loginUser: User = new User(input);
      const user = await this.existUser(loginUser);
      const resp: boolean = await verify(input.password, user.password);
      return { user, valid: resp };
    } catch (error) {
      throw error;
    }
  }

  private async existUser(user: User): Promise<UserType> {
    const result = await this.findRepository.findByPersonalId(user.personalId);
    if (!result) throw new Error('Invalid User/Password');
    return result;
  }
}
