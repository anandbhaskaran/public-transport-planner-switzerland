export interface Station {
  id: string;
  name: string;
  score: number | undefined | null;
  coordinate: {
    type: string;
    x: number;
    y: number;
  };
  distance: number | undefined;
  icon: string;
}
