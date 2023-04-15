import { InvalidArgumentError } from '@risotto/value-objects/exceptions';
import { FilterRelationName } from './filter-relation-name';
import { FilterField } from '../filters/filter-field';
import { FilterOperator } from '../filters/filter-operator';
import { FilterValue } from '../filters/filter-value';

export type FilterRelationType = {
  relation: string;
  field: string;
  operator: string;
  value: string;
};

export class FilterRelation {
  constructor(
    readonly relation: FilterRelationName,
    readonly field: FilterField,
    readonly operator: FilterOperator,
    readonly value: FilterValue
  ) {}

  static fromValues(values: FilterRelationType): FilterRelation {
    const relation = values.relation;
    const field = values.field;
    const operator = values.operator;
    const value = values.value;

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
