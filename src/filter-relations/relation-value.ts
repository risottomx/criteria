import { FilterBooleanValue } from './filter-boolean-value';
import { FilterNumberValue } from './filter-number-value';
import { FlterStringValue } from './filter-string-value';
import { Relation } from './relation';

type RelationOrValue = Relation | string | number | boolean | Date;

export class RelationValue {
  readonly value: RelationOrValue;

  constructor(value: RelationOrValue) {
    if (value instanceof Relation) {
      this.value = value;
    } else {
      switch (typeof value) {
        case 'string':
          return new FlterStringValue(value);
        case 'number':
          return new FilterNumberValue(value);
        case 'boolean':
          return new FilterBooleanValue(value);
        default:
          this.value = value;
          return;
      }
    }
  }
}
