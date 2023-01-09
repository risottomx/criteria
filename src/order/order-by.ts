import { StringValueObject } from '@risotto/value-objects';

export class OrderBy extends StringValueObject {
  constructor(value: string) {
    super(value);
  }
}
