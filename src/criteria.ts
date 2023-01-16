import { Filters } from './filters';
import { Order } from './order';

export type CriteriaExtras = { [key: string | number | symbol]: unknown };

export class Criteria {
  private _extras: CriteriaExtras[];

  get extras(): CriteriaExtras[] {
    return this._extras;
  }

  constructor(
    readonly filters: Filters,
    readonly order: Order,
    readonly limit?: number,
    readonly offset?: number
  ) {}

  hasFilters(): boolean {
    return this.filters.filters.length > 0;
  }

  addExtras(extras: CriteriaExtras[]): void {
    this._extras = extras;
  }

  hasExtras(): boolean {
    return this._extras.length > 0;
  }
}
