import { useEffect, useState } from 'react';
import { userApi } from '../../utils/apis/user';

import './style.user.css';
export function UserPage() {
  const [users, setUser] = useState();
  async function findAllUsers() {
    const users = await userApi();
    console.log(users.results);
    setUser(users.results);
  }

  useEffect(() => {
    findAllUsers();
  }, []);

  return <main></main>;
}
