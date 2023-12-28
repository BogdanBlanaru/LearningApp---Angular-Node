export interface RegisteredUser {
  username: string;
  password: string;
}

export default interface User {
  id?: number;
  username: string;
  email: string;
  password: string;
}
