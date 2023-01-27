import { InvalidArgumentError } from '@risotto/value-objects/exceptions';
import { FilterRelationName } from './filter-relation-name';
import { FilterField } from '../filters/filter-field';
import { FilterOperator } from '../filters/filter-operator';
import { FilterValue } from '../filters/filter-value';

export type FilterRelationType = 'relation' | 'field' | 'operator' | 'value';

export class FilterRelation {
  constructor(
    readonly relation: FilterRelationName,
    readonly field: FilterField,
    readonly operator: FilterOperator,
    readonly value: FilterValue
  ) {}

  static fromValues(values: Map<FilterRelationType, string>): FilterRelation {
    const relation = values.get('relation');
    const field = values.get('field');
    const operator = values.get('operator');
    const value = values.get('value');

    if (!relation || !field || !operator || !value) {
      throw new InvalidArgumentError(`The filter is invalid`);
    }

    return new FilterRelation(
      new FilterRelationName(relation),
      new FilterField(field),
      FilterOperator.fromValue(operator),
      new FilterValue(value)
    );
  }
}
