import { Criteria } from '../src';
import {
  Filter,
  FilterField,
  FilterOperator,
  Filters,
  FilterValue,
  Operator,
} from '../src/filters';
import { Order, OrderBy, OrderType, OrderTypes } from '../src/order';

describe('Criteria', () => {
  describe('empty criteria', () => {
    const criteria = new Criteria(Filters.none(), Order.none());

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

  describe('extras', () => {
    const criteria = new Criteria(Filters.none(), Order.none());
    criteria.addExtras([{ relations: [''] }]);

    expect(criteria.hasExtras()).toBeTruthy();
    expect(criteria.extras).toEqual([{ relations: [''] }]);
  });
});
