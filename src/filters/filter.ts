import { InvalidArgumentError } from '@risotto/value-objects/exceptions';
import { FilterField } from './filter-field';
import { FilterOperator } from './filter-operator';
import { FilterValue } from './filter-value';

export type FilterType = 'field' | 'operator' | 'value';

export class Filter {
  constructor(
    readonly field: FilterField,
    readonly operator: FilterOperator,
    readonly value: FilterValue
  ) {}

  static fromValues(values: Map<FilterType, string>): Filter {
    const field = values.get('field');
    const operator = values.get('operator');
    const value = values.get('value');

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
