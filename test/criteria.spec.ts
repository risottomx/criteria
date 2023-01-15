import { Criteria } from '../src/criteria';
import {
  Filter,
  FilterField,
  FilterOperator,
  Filters,
  FilterValue,
} from '../src/filters';
import { Operator } from '../src/filters/filter-operator';
import { Order, OrderBy, OrderType } from '../src/order';
import { OrderTypes } from '../src/order/order-type';

describe('Criteria', () => {
  describe('empty criteria', () => {
    const criteria = new Criteria(
      new Filters([]),
      new Order(new OrderBy(''), new OrderType(OrderTypes.NONE))
    );

    it('should create criteria', () => {
      expect(criteria).toBeDefined();
    });

    it('should create criteria', () => {
      expect(criteria.hasFilters()).toBeFalsy();
    });
  });

  describe('criteria with filters', () => {
    const criteria = new Criteria(
      new Filters([
        new Filter(
          new FilterField('email'),
          new FilterOperator(Operator.EQUAL),
          new FilterValue('test@gmail.com')
        ),
      ]),
      new Order(new OrderBy(''), new OrderType(OrderTypes.NONE))
    );

    it('should create criteria', () => {
      expect(criteria).toBeDefined();
    });

    it('should create criteria', () => {
      expect(criteria.hasFilters()).toBeTruthy();
    });
  });
});
