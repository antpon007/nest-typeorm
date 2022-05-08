import { IPayload } from '../../IPayload';
import { JwtRepository } from '../infrastructure/jwtRepository';
import { IKeyProvider } from '../domain/keyRepository';

export class KeyAppUseCase {
  constructor(private readonly provider: IKeyProvider<IPayload>) {}

  async getKey(payload: IPayload): Promise<string> {
    const key = this.provider.getKey(payload);
    return key;
  }
  async decodedKey(key: string): Promise<IPayload> {
    const payload = await this.provider.decodedKey(key);
    return payload;
  }
}

const jwtRepository = new JwtRepository<IPayload>();
const keyAppUseCase = new KeyAppUseCase(jwtRepository);
export { keyAppUseCase };
