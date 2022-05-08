import { scrypt, randomBytes } from 'crypto';

export async function hash(param: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const salt = randomBytes(8).toString('hex');

    scrypt(param, salt, 64, (err, derivedKey) => {
      if (err) reject(err);
      resolve(salt + ':' + derivedKey.toString('hex'));
    });
  });
}

export async function verify(param: string, hash: string) {
  return new Promise((resolve, reject) => {
    const [salt, key] = hash.split(':');
    scrypt(param, salt, 64, (err, derivedKey) => {
      if (err) reject(err);
      resolve(key == derivedKey.toString('hex'));
    });
  });
}
