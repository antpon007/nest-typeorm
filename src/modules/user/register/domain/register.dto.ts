import { MinLength, IsNotEmpty, MaxLength } from 'class-validator';

export class UserRegisterDTO {
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(50)
  personalId: string;

  @MinLength(7)
  @MaxLength(20)
  password: string;
}
