import { Inject } from '@nestjs/common';
import { hash } from 'src/modules/shared/domain/value-objects/crypto-string';
import { IUserFindRepository } from '../../shared/domain/Iuser-find.repository';
import { User } from '../../shared/domain/user';
import { IUserRegisterRepository } from '../domain/Iuser-register.repository';
import { UserRegisterDTO } from '../domain/register.dto';

export class RegisterService {
  constructor(
    @Inject('USER_REGISTER_REPOSITORY')
    private readonly registerRepository: IUserRegisterRepository,

    @Inject('USER_FIND_REPOSITORY')
    private readonly findRepository: IUserFindRepository,
  ) {
    console.log('Iniciando RegisterRepository', { registerRepository });
    console.log('Iniciando FindRepository findByPersonalId', {
      findByPersonalId: this.findRepository.findByPersonalId,
    });
  }
  async handle(input: UserRegisterDTO): Promise<void> {
    try {
      input.password = await hash(input.password);
      const newUser: User = new User(input);

      await this.existUser(newUser);

      await this.registerRepository.handle(newUser);
    } catch (error) {
      throw error;
    }
  }

  private async existUser(user: User) {
    console.log({
      findRepository: this.findRepository,
      definition: this.findRepository.toString(),
    });
    const result = await this.findRepository.findByPersonalId(user.personalId);
    if (result) throw new Error('User already exists with this personal ID');
  }
}
