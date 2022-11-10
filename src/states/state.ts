import {derived} from 'overmind';

import { IMaster, IPet, ISort } from "../interface";

type State = {
  owners: IMaster[];
  pets: IPet[];
  sort: ISort;
  orderedOwners: IMaster[];
  selectedMaster: IMaster | undefined;
};

export const state: State = {
  owners: [],
  pets: [],
  sort: {value: 'name', label: 'Name'},
  orderedOwners: derived((x: State) => {
    if (x.sort.value === 'name') {
      return [...x.owners].sort((a, b) => 
        `${a.firstName} ${a.lastName}` < `${b.firstName} ${b.lastName}` ? -1 : 
        `${a.firstName} ${a.lastName}` > `${b.firstName} ${b.lastName}` ? 1 :
        0
      )
    } else {
      return [...x.owners].map(o => ({
        ...o,
        petCount: x.pets.filter(c => c.masterId === o.id).length
      })).sort((a, b) => a.petCount < b.petCount ? 1 : a.petCount > b.petCount ? -1 : 0)
    }
  }),
  selectedMaster: undefined
};
