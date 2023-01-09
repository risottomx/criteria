import { StringValueObject } from '@risotto/value-objects';

export class FilterValue extends StringValueObject {
  constructor(value: string) {
    super(value);
  }
}
