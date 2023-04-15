import { Filters } from './filters';
import { FilterRelations } from './filter-relations/filter-relations';
import { Order } from './order';

export type Relations = { [key: string]: unknown };

export interface Options {
  limit?: number;
  offset?: number;
  relations?: Relations;
  filterRelations?: FilterRelations;
}

export class Criteria {
  readonly limit?: number;
  readonly offset?: number;
  readonly relations?: Relations;
  readonly filterRelations?: FilterRelations;

  constructor(
    readonly filters: Filters,
    readonly order: Order,
    private _options: Options = {}
  ) {
    this.limit = _options.limit;
    this.offset = _options.offset;
    this.relations = _options.relations || {};
    this.filterRelations = _options.filterRelations || FilterRelations.none();
  }

  hasFilters(): boolean {
    return this.filters.filters.length > 0;
  }

  hasFilterRelations(): boolean {
    return this.filterRelations.relations.length > 0;
  }
}
