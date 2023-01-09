import { Filter } from './filter';

export class Filters {
  constructor(readonly filters: Filter[]) {}

  static fromValues(filters: Map<string, string>[]): Filters {
    return new Filters(filters.map(Filter.fromValues));
  }

  static none(): Filters {
    return new Filters([]);
  }
}
