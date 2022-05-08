import { UserType } from './user.dto';

export interface IUserFindRepository {
  findByPersonalId(personalId: string): Promise<UserType> | null;
}
