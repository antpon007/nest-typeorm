import { UUID } from 'src/modules/shared/domain/value-objects/generate-uuid';
import { UserType } from './user.dto';

export class User {
  public readonly id: UUID;
  public readonly personalId: string;
  public readonly password: string;
  public readonly createDt: Date;
  public readonly updateDt?: Date;

  constructor(input: UserType) {
    this.id = input.id ? new UUID(input.id) : UUID.random();
    this.personalId = input.personalId;
    this.password = input.password;
    this.createDt = input.createDt ? input.createDt : new Date();
    this.updateDt = input.updateDt;
  }

  toPrimitives() {
    return {
      id: this.id.toString(),
      personalId: this.personalId,
      password: this.password,
      createDt: this.createDt,
      updateDt: this.updateDt,
    };
  }
}
