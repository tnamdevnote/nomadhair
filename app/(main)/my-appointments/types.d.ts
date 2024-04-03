export interface Appointment {
  id: string;
  date: string;
  time: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  zip: string;
  comment?: string;
}
