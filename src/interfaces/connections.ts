import { Station } from "./location";

export interface Connection {
  from: Checkpoint;
  to: Checkpoint;
  duration: string;
  service: Service;
  products: string;
  capacity1st: number;
  capacity2nd: number;
  sections: Section[];
  transfers: number;
}

export interface Section {
  journey?: Journey;
  walk?: string;
  departure: Checkpoint;
  arrival: Checkpoint;
}

export interface Journey {
  name: string;
  category: string;
  categoryCode: string;
  number: number;
  operator: string;
  to: string;
  passList: Checkpoint[];
  capacity1st: number;
  capacity2nd: number;
}
export interface Service {
  regular: string;
  irregular: string;
}
export interface Checkpoint {
  station: Station;
  arrival: string;
  departure: string;
  delay: number;
  platform: string | null;
}
