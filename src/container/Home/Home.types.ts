interface LocationType {
  lat: number;
  lng: number;
}

export interface HomeProps {
  onNavigate?: (location: LocationType) => void;
}
