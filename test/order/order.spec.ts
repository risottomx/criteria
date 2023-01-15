import { Order, OrderBy, OrderType } from '../../src/order';
import { OrderTypes } from '../../src/order/order-type';

describe('Order', () => {
  it('should create Order', () => {
    const order = new Order(
      new OrderBy('email'),
      new OrderType(OrderTypes.ASC)
    );
    expect(order).toBeDefined();
  });

  it('should create Order from values', () => {
    const order = Order.fromValues('email');
    expect(order).toBeDefined();
  });

  it('should create Order from values if no param is provided', () => {
    const order = Order.fromValues();
    expect(order).toBeDefined();
    expect(order.orderType.value).toBe('none');
  });

  it('should create Order with none', () => {
    const order = Order.none();
    expect(order.orderBy.value).toBeFalsy();
  });

  it('should create Order with asc', () => {
    const order = Order.asc('email');
    expect(order.orderType.value).toBe('asc');
  });

  it('should create Order with desc', () => {
    const order = Order.desc('email');
    expect(order.orderType.value).toBe('desc');
  });

  it('should get hasOrder()', () => {
    const order = Order.desc('email');
    const none = Order.none();

    expect(order.hasOrder()).toBeTruthy();
    expect(none.hasOrder()).toBeFalsy();
  });
});
