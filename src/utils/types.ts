export interface IClient {
  id: number;
  firstName: string;
  lastName: string;
  notes: INote[];
}
export interface INote {
  id: number;
  title: string;
  text: string;
  clientId: string;
}
