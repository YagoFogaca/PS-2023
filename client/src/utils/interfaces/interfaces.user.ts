// a lista deve conter a foto do usuário, nome completo, email, username e idade

export interface ICardUser {
  image: string;
  name: string;
  email: string;
  username: string;
  age: number;
}

export interface IUsersData {
  dob: {
    age: number;
  };
  email: string;
  login: {
    username: string;
  };
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
}
