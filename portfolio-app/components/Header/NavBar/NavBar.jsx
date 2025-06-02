"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, Briefcase, Code, Puzzle } from 'lucide-react'; 
import styles from './NavBar.module.css';

const navLinks = [
  { href: '/', label: 'Início', icon: Home },
  { href: '/about', label: 'Sobre', icon: User },
  { href: '/experience', label: 'Experiência', icon: Briefcase },
  { href: '/projects', label: 'Projetos', icon: Code },
  { href: '/game', label: 'Jogo', icon: Puzzle },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          const Icon = link.icon;
          return (
            <li key={link.href} className={styles.navItem}>
              <Link href={link.href} className={`${styles.navLink} ${isActive ? styles.active : ''}`}>
                <Icon size={20} className={styles.navIcon} />
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}