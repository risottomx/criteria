import { StringValueObject } from '@risotto/value-objects';

export class FilterField extends StringValueObject {
  constructor(value: string) {
    super(value);
  }
}
