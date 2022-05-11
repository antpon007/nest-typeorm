import { Entity, Column, PrimaryColumn } from 'typeorm';
import { User } from '../domain/user';

class UserEntityMap implements Partial<User> {
  public id: any;
  public personalId: string;
  public password: string;
  public createDt: Date;
  public updateDt?: Date;
}

@Entity('user')
export class UserEntity implements Partial<UserEntityMap> {
  @PrimaryColumn({ type: String, length: 50 })
  id: string;

  @Column({ name: 'personal_id', length: 50 })
  personalId: string;

  @Column({ name: 'password', length: 2000 })
  password: string;

  @Column({ name: 'create_dt' })
  createDt: Date;

  @Column({ name: 'update_dt' })
  updateDt?: Date;
}
