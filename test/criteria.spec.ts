import { Criteria } from '../src';
import { Relations } from '../src/filter-relations';
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

    it('should not have filters', () => {
      expect(criteria.hasFilters()).toBeFalsy();
    });

    it('should not have extras', () => {
      expect(criteria.hasExtras()).toBeFalsy();
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

  describe('relations', () => {
    it('should create relations', () => {
      const criteria = new Criteria(Filters.none(), Order.none(), {
        filterRelations: Relations.none(),
      });

      expect(criteria.hasFilterRelations()).toBeFalsy();
    });
  });

  describe('extras', () => {
    it('should create extras', () => {
      const criteria = new Criteria(Filters.none(), Order.none(), {
        extras: [{ relations: [] }],
      });

      expect(criteria.hasExtras()).toBeTruthy();
      expect(criteria.extras).toEqual([{ relations: [] }]);
    });
  });
});
