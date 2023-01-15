import { InvalidArgumentError } from '@risotto/value-objects/exceptions';
import { OrderType, OrderTypes } from '../../src/order/order-type';

describe('OrderType', () => {
  it('should create OrderType', () => {
    const orderType = new OrderType(OrderTypes.NONE);
    expect(orderType).toBeDefined();
  });

  it('should create OrderType from value asc', () => {
    const orderType = OrderType.fromValue('asc');
    expect(orderType.value).toBe('asc');
  });

  it('should create OrderType from value desc', () => {
    const orderType = OrderType.fromValue('desc');
    expect(orderType.value).toBe('desc');
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
