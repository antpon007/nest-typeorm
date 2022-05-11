import { IsNotEmpty } from 'class-validator';
import { UserType } from '../../shared/domain/user.dto';

export type ResponseLoginType = {
  user: UserType;
  valid: boolean;
};

export class UserLoginDTO {
  @IsNotEmpty()
  personalId: string;

  @IsNotEmpty()
  password: string;
}
