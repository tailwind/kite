export interface ResourceReference {
  name: string;
  url: string;
}

export interface ResourceReferenceList {
  count: number;
  next: string;
  previous: string | null;
  results: ResourceReference[];
}

export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
}
