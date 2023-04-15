import { Filters, FilterType, Operator } from '../../src/filters';

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
    const filter: FilterType = {
      field: 'xxxx',
      operator: Operator.EQUAL,
      value: 'xxxx',
    };

    const filters = Filters.fromValues([filter]);
    expect(filters.filters.length).toBe(1);
  });
});
