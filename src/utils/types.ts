export interface ICustomer {
  id: string;
  firstName: string;
  lastName: string;
  notes: INote[];
}
export interface INote {
  id: string;
  title: string;
  text: string;
  clientId: string;
}
