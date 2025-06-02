import Link from 'next/link';
import NavBar from './NavBar/NavBar';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link href="/" className={styles.logo}>
          José Felipe 
        </Link>
        <NavBar />
      </div>
    </header>
  );
}