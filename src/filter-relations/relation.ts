import { InvalidArgumentError } from '@risotto/value-objects/exceptions';
import { RelationName } from './relation-name';
import { RelationField } from './relation-field';
import { RelationValue } from './relation-value';

export type RelationType = 'name' | 'field' | 'value';

export class Relation {
  constructor(
    readonly name: RelationName,
    readonly field: RelationField,
    readonly value: RelationValue
  ) {}

  static fromValues(values: Map<RelationType, string>): Relation {
    const name = values.get('name');
    const field = values.get('field');
    const value = values.get('value');

    if (!name || !field || !value) {
      throw new InvalidArgumentError(`The relation is invalid`);
    }

    return new Relation(
      new RelationName(name),
      new RelationField(field),
      new RelationValue(value)
    );
  }
}
