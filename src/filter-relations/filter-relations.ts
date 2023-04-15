import { FilterRelation, FilterRelationType } from './filter-relation';

export class FilterRelations {
  constructor(readonly relations: FilterRelation[]) {}

  static fromValues(relations: FilterRelationType[]): FilterRelations {
    return new FilterRelations(relations.map(FilterRelation.fromValues));
  }

  static none(): FilterRelations {
    return new FilterRelations([]);
  }
}
