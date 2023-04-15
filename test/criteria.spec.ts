import { Criteria } from '../src';
import { FilterRelations } from '../src/filter-relations/filter-relations';
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

  describe('filter relations', () => {
    it('should create filter relations', () => {
      const criteria = new Criteria(Filters.none(), Order.none(), {
        filterRelations: FilterRelations.none(),
      });

      expect(criteria.hasFilterRelations()).toBeFalsy();
    });
  });
});
