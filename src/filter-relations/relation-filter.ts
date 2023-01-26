export interface RealtionFilter {
  name: string;
  filters: Array<{
    field: string;
    value: string | number | boolean | Date | RealtionFilter;
  }>;
}

const relations: RealtionFilter = {
  name: 'category',
  filters: [
    {
      field: 'id',
      value: '39dd1455-ff0d-453e-b99c-edc8fc3bb183',
    },
  ],
};

console.log(relations);
