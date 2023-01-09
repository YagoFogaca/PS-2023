import { useEffect, useState } from 'react';
import { userApi } from '../../utils/apis/user';
import { CardUser } from '../../components/card-user/index.cardUser';
import { IUsersData } from '../../utils/interfaces/interfaces.user';
import './style.user.css';

export function UserPage() {
  const [users, setUser] = useState<IUsersData[]>([]);
  const [qntd_pag, setQntd_pag] = useState<string>('10');

  async function findAllUsers() {
    const users = await userApi(qntd_pag);
    console.log(users.results);
    setUser(users.results);
  }

  useEffect(() => {
    findAllUsers();
  }, [qntd_pag]);

  return (
    <main>
      <form
        className="form-pagUser"
        onSubmit={event => {
          event.preventDefault();
          console.log(event.currentTarget.qntd_pag.value);
          setQntd_pag(event.currentTarget.qntd_pag.value);
        }}
      >
        <label htmlFor="">Quantidade por pagina</label>
        <input type="text" id="qntd_pag" name="qntd_pag" />
        <button>Buscar</button>
      </form>
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
