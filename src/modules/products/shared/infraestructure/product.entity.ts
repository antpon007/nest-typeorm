import { Entity, Column, PrimaryColumn } from 'typeorm';
import { Product } from '../domain/product';

class ProductEntityMap implements Partial<Product> {
  public productId: any;
  public userId: string;
  public type: number;
  public status: number;
  public createDt: Date;
  public updateDt?: Date;
}

@Entity('product')
export class ProductEntity implements Partial<ProductEntityMap> {
  @PrimaryColumn({ name: 'product_id', type: String, length: 50 })
  productId: string;

  // @ManyToOne(
  //   type => User,
  //   user => user.id,
  //   { cascade: true },
  // )
  // @JoinColumn({ name: 'user_id' })
  // user: User;

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
