import { User } from '../../shared/domain/user';

export interface IUserRegisterRepository {
  handle(user: User): Promise<void>;
}
