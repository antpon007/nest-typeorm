import { v4, validate } from 'uuid';

export class UUID {
  public readonly value: string;

  constructor(value: string) {
    this.isValid(value);
    this.value = value;
  }
  static random(): UUID {
    return new UUID(v4());
  }

  private isValid(value: string) {
    if (!validate(value)) {
      throw new Error(`Invalid uuid ${value} `);
    }
  }
  toString(): string {
    return this.value;
  }
}
