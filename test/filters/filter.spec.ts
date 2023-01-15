import { InvalidArgumentError } from '@risotto/value-objects/exceptions';
import { Filter, FilterType } from '../../src/filters/filter';
import { FilterField } from '../../src/filters/filter-field';
import { FilterOperator, Operator } from '../../src/filters/filter-operator';
import { FilterValue } from '../../src/filters/filter-value';

describe('Filter', () => {
  it('should create filter', () => {
    const filter = new Filter(
      new FilterField('email'),
      new FilterOperator(Operator.EQUAL),
      new FilterValue('test@gmail.com')
    );
    expect(filter).toBeDefined();
  });

  it('should create filter from values', () => {
    const map = new Map<FilterType, string>();
    map.set('field', 'email');
    map.set('operator', Operator.EQUAL);
    map.set('value', 'test@gmail.com');
    const filter = Filter.fromValues(map);
    expect(filter).toBeDefined();
  });

  it('should throw error if map is no well formed', () => {
    const map = new Map<FilterType, string>();
    map.set('field', '');
    map.set('operator', Operator.EQUAL);
    map.set('value', 'test@gmail.com');
    expect(() => Filter.fromValues(map)).toThrowError(InvalidArgumentError);
  });
});
