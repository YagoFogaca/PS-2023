import './style.header.css';

export function Header() {
  return (
    <header>
      <figure>
        <img src="/logo.png" alt="" />
      </figure>
      <nav>
        <ul>
          <li>
            <a href="">USER</a>
          </li>
          <li>
            <a href="">HTTP CAT</a>
          </li>
          <li>
            <a href="">RANDON DOG</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
