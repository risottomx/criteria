import { Relation } from './relation';

export class Relations {
  constructor(readonly relations: Relation[]) {}

  static fromValues(relations: Map<string, string>[]): Relations {
    return new Relations(relations.map(Relation.fromValues));
  }

  static none(): Relations {
    return new Relations([]);
  }
}
