import { useEffect, useState } from 'react';
import { userApi } from '../../utils/apis/user';
import { CardUser } from '../../components/card-user/index.cardUser';
import { IUsersData } from '../../utils/interfaces/interfaces.user';
import './style.user.css';

export function UserPage() {
  const [users, setUser] = useState<IUsersData[]>([]);
  async function findAllUsers() {
    const users = await userApi();
    console.log(users.results);
    setUser(users.results);
  }

  useEffect(() => {
    findAllUsers();
  }, []);

  return (
    <main>
      {users.map((user, index) => {
        return (
          <CardUser
            age={user.dob.age}
            email={user.email}
            image={user.picture.large}
            name={user.name.first + ' ' + user.name.last}
            username={user.login.username}
            key={index}
          />
        );
      })}
    </main>
  );
}
