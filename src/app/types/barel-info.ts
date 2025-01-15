export interface BarrelInfo {
  id: string;
  name: string;
  locations: Location[];
  expanded: boolean;
}

export interface Location {
  id: string;
  name: string;
  note: string;
}
