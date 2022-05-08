import { IKeyProvider } from "../domain/keyRepository";
import { CONFIG } from '../../../../config/env'
import jwt from 'jsonwebtoken';

const secret = CONFIG.SEED

export class JwtRepository<T> implements IKeyProvider<T> {

    getKey(payload: any): Promise<string> {
        try {
            return Promise.resolve(jwt.sign(payload, secret))
        } catch (error) { throw error }
    }

    decodedKey(key: string): Promise<T> {
        try {
            return new Promise((res, rej) => {
                jwt.verify(key, secret, function (err, decoded: any) {
                    if (err) { return rej(err); }
                    res(decoded);
                });
            });
        } catch (error) { throw error }
    }
}
