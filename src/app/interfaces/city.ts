interface Attraction {
    id: number;
    name: string;
    description: string;
  }
  
  export interface City {
    id: number;
    name: string;
    description: string;
    attractions: Attraction[];
  }