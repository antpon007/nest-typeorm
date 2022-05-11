import { Movement } from '../../shared/domain/movement';

export interface IMovementCreateRepository {
  handle(movement: Movement): Promise<void>;
}
