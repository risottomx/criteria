import { InvalidArgumentError } from '@risotto/value-objects/exceptions';
import { FilterField } from './filter-field';
import { FilterOperator } from './filter-operator';
import { FilterValue } from './filter-value';

export type FilterType = {
  field: string;
  operator: string;
  value: string;
};

export class Filter {
  constructor(
    readonly field: FilterField,
    readonly operator: FilterOperator,
    readonly value: FilterValue
  ) {}

  static fromValues(values: FilterType): Filter {
    const field = values.field;
    const operator = values.operator;
    const value = values.value;

    if (!field || !operator || !value) {
      throw new InvalidArgumentError(`The filter is invalid`);
    }

    return new Filter(
      new FilterField(field),
      FilterOperator.fromValue(operator),
      new FilterValue(value)
    );
  }
}
