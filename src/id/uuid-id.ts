import { Id } from './id';
import { v4 as uuidv4 } from 'uuid';

export class Uuid extends Id {
  static next(): Uuid {
    return new Uuid(uuidv4());
  }

  static fromPrimitive(value: string) {
    return new Uuid(value);
  }
}
