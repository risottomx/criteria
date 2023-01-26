import { Filters } from './filters';
import { Order } from './order';
import { Relations } from './relations';

export type Extras = { [key: string | number | symbol]: unknown };

export interface Options {
  limit?: number;
  offset?: number;
  extras?: Extras[];
  relations?: Relations;
}

export class Criteria {
  readonly limit?: number;
  readonly offset?: number;
  readonly extras?: Extras[];
  readonly relations?: Relations;

  constructor(
    readonly filters: Filters,
    readonly order: Order,
    private _options: Options = {}
  ) {
    this.limit = _options.limit;
    this.offset = _options.offset;
    this.extras = _options.extras || [];
    this.relations = _options.relations;
  }

  hasFilters(): boolean {
    return this.filters.filters.length > 0;
  }

  hasExtras(): boolean {
    return this.extras.length > 0;
  }

  hasRelations(): boolean {
    return this.relations.relations.length > 0;
  }
}
