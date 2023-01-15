import { Filters } from '../../src/filters/filters';
import { FilterType } from '../../src/filters/filter';
import { Operator } from '../../src/filters/filter-operator';

describe('Filters', () => {
  it('should create filters', () => {
    const filters = new Filters([]);
    expect(filters).toBeDefined();
  });

  it('should create filters', () => {
    const filters = Filters.none();
    expect(filters.filters.length).toBe(0);
  });

  it('should create filters from values', () => {
    const map = new Map<FilterType, string>();
    map.set('field', 'xxxx');
    map.set('operator', Operator.EQUAL);
    map.set('value', 'xxxx');

    const filters = Filters.fromValues([map]);
    expect(filters.filters.length).toBe(1);
  });
});
