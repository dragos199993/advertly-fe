
export interface IUser {
  _id: string;
  username: string;
  email: string;
  created: string;
  role: string;
}

export interface IUserUpdate {
  username: string;
  email: string;
  password: string;
  role: string;
}

export interface IPost {
  title: string;
  body: string;
}

export interface IIdParam {
  id: string;
}
