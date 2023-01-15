import { InvalidArgumentError } from '@risotto/value-objects/exceptions';
import { FilterOperator, Operator } from '../../src/filters';

describe('FilterOperator', () => {
  it('should create operator', () => {
    const operator = new FilterOperator(Operator.EQUAL);
    expect(operator).toBeDefined();
  });

  it('should create equal operator', () => {
    const operator = FilterOperator.equal();
    expect(operator.value).toBe(Operator.EQUAL);
  });

  describe('fromValue', () => {
    it('should create equal operator', () => {
      const operator = FilterOperator.fromValue('=');
      expect(operator.value).toBe(Operator.EQUAL);
    });

    it('should create not equal operator', () => {
      const operator = FilterOperator.fromValue('!=');
      expect(operator.value).toBe(Operator.NOT_EQUAL);
    });

    it('should create greather than operator', () => {
      const operator = FilterOperator.fromValue('>');
      expect(operator.value).toBe(Operator.GT);
    });

    it('should create less than operator', () => {
      const operator = FilterOperator.fromValue('<');
      expect(operator.value).toBe(Operator.LT);
    });

    it('should create contains operator', () => {
      const operator = FilterOperator.fromValue('CONTAINS');
      expect(operator.value).toBe(Operator.CONTAINS);
    });

    it('should create less than operator', () => {
      const operator = FilterOperator.fromValue('NOT_CONTAINS');
      expect(operator.value).toBe(Operator.NOT_CONTAINS);
    });

    it('should throw exception if operator not found operator', () => {
      expect(() => FilterOperator.fromValue('X')).toThrowError(
        InvalidArgumentError
      );
    });
  });

  it('should check isPositive()', () => {
    const operator = FilterOperator.equal();
    expect(operator.isPositive()).toBeTruthy();
  });

  it('should throw exception if operator not found operator', () => {
    expect(() => new FilterOperator('X' as Operator)).toThrowError(
      InvalidArgumentError
    );
  });
});
