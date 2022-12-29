export interface Option {
  label: string;
  value: string;
}

export interface PokeOption extends Option {
  generation: number;
}

export interface Pokemon {
  name: string;
  url: string;
}
