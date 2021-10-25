import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => (
  <div>
    <ul className={styles.navbar}>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
