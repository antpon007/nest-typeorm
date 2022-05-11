import { Entity, Column, PrimaryColumn } from 'typeorm';
import { ProductRequest } from '../domain/request';

class RequestEntityMap implements Partial<ProductRequest> {
  public requestId: any;
  public userId: string;
  public type: number;
  public status: number;
  public createDt: Date;
  public updateDt?: Date;
}

@Entity('product_request')
export class ProductRequestEntity implements Partial<RequestEntityMap> {
  @PrimaryColumn({ name: 'product_request_id', type: String, length: 50 })
  requestId: string;

  @Column({ name: 'user_id', length: 50 })
  userId: string;

  @Column({ name: 'type' })
  type: number;

  @Column({ name: 'status' })
  status: number;

  @Column({ name: 'create_dt' })
  createDt: Date;

  @Column({ name: 'update_dt' })
  updateDt?: Date;
}
