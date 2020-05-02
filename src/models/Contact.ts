export interface Contact {
  id: string;
  name: ContactName;
  username: string;
  avatarUrl: string;
  email: string;
  location: Location;
  phone: string;
  cell: string;
}

export interface ContactName {
  first: string;
  last: string;
}

interface Location {
  country: string;
  street: string;
  city: string;
  state: string;
  postcode: number;
}
