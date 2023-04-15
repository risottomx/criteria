import { InvalidArgumentError } from '@risotto/value-objects/exceptions';
import {
  Filter,
  FilterField,
  FilterOperator,
  FilterType,
  FilterValue,
  Operator,
} from '../../src/filters';

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
    const filter: FilterType = {
      field: 'email',
      operator: Operator.EQUAL,
      value: 'test@gmail.com',
    };

    expect(Filter.fromValues(filter)).toBeDefined();
  });

  it('should create filter from values', () => {
    const filter: FilterType = {
      field: 'user',
      operator: Operator.EQUAL,
      value: {
        field: 'email',
        operator: Operator.EQUAL,
        value: 'test@gmail.com',
      },
    };

    expect(Filter.fromValues(filter)).toBeDefined();
  });

  it('should throw error if map is no well formed', () => {
    const filter: FilterType = {
      field: '',
      operator: Operator.EQUAL,
      value: 'test@gmail.com',
    };
    expect(() => Filter.fromValues(filter)).toThrowError(InvalidArgumentError);
  });
});
