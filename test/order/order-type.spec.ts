import { InvalidArgumentError } from '@risotto/value-objects/exceptions';
import { OrderType, OrderTypes } from '../../src/order';

describe('OrderType', () => {
  it('should create OrderType', () => {
    const orderType = new OrderType(OrderTypes.NONE);
    expect(orderType).toBeDefined();
  });

  it('should create OrderType from value ASC', () => {
    const orderType = OrderType.fromValue('ASC');
    expect(orderType.value).toBe('ASC');
  });

  it('should create OrderType from value DESC', () => {
    const orderType = OrderType.fromValue('DESC');
    expect(orderType.value).toBe('DESC');
  });

  it('should throw error if value is not valid', () => {
    expect(() => OrderType.fromValue('xxxx')).toThrowError(
      InvalidArgumentError
    );
  });

  it('should return isNone()', () => {
    const orderType = new OrderType(OrderTypes.NONE);
    expect(orderType.isNone()).toBeTruthy();
  });

  it('should return isAsc()', () => {
    const orderType = new OrderType(OrderTypes.ASC);
    expect(orderType.isAsc()).toBeTruthy();
  });

  it('should return isDesc()', () => {
    const orderType = new OrderType(OrderTypes.DESC);
    expect(orderType.isDesc()).toBeTruthy();
  });

  it('should create OrderType', () => {
    expect(() => new OrderType('yari' as OrderTypes)).toThrowError(
      InvalidArgumentError
    );
  });
});
