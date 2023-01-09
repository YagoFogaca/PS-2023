import { ICardUser } from '../../utils/interfaces/interfaces.user';
import './style.cardUser.css';

export function CardUser({ age, email, image, name, username }: ICardUser) {
  return (
    <section>
      <figure>
        <img src={image} alt="Avatar - User" className="img-avatar" />
      </figure>
      <aside className="card-info">
        <h3 className="title-name">{name}</h3>
        <h6 className="title-username">{username}</h6>
        <p className="title-email">{email}</p>
        <p className="title-age">{age} anos</p>
      </aside>
    </section>
  );
}
