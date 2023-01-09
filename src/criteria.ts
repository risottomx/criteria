import { Filters } from './filters';
import { Order } from './order';

export class Criteria {
  constructor(
    readonly filters: Filters,
    readonly order: Order,
    readonly limit?: number,
    readonly offset?: number
  ) {}

  hasFilters(): boolean {
    return this.filters.filters.length > 0;
  }
}
