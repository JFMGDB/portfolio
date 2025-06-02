// components/Footer/Footer.jsx
import Link from 'next/link';
import { Github, Linkedin, Mail, Phone } from 'lucide-react'; 
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const email = "fguerra127@gmail.com"; //
  const phone = "81 99939-0267"; //

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerInfo}>
          <h3>José Felipe M. G. de Barros</h3>
          <p>Desenvolvedor Back-end focado em criar soluções eficientes e escaláveis.</p>
        </div>

        <div className={styles.footerContacts}>
          <h4>Contato</h4>
          <a href={`mailto:${email}`} className={styles.contactLink}>
            <Mail size={18} /> <span>{email}</span>
          </a>
          <a href={`tel:${phone.replace(/\D/g, '')}`} className={styles.contactLink}>
            <Phone size={18} /> <span>{phone}</span>
          </a>
        </div>

        <div className={styles.footerSocial}>
          <h4>Redes Sociais</h4>
          <a href="https://github.com/JFMGDB" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.socialIcon}>
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/josé-felipe-morais/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialIcon}>
            <Linkedin size={24} />
          </a>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {currentYear} José Felipe M. G. de Barros. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}