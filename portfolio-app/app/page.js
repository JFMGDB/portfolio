"use client";

import Link from 'next/link';
import styles from './Home.module.css'; 

export default function HomePage() {
  return (
    
    <div>
      <section className={styles.hero}>
        <h1>José Felipe M. G. de Barros</h1>
        <p className={styles.heroTitleSecondary}>
          Desenvolvedor Back-end
        </p>
        <p>
          Desenvolvedor Back-end com um ano de experiência focada em Node.js.
          Profissional pró-ativo, ágil e altamente adaptável, comprometido com boas práticas.
        </p>
        <div className={styles.ctaButtons}>
          <Link href="/projects"><button>Ver Meus Projetos</button></Link>
          <Link href="/about"><button>Sobre Mim</button></Link>
        </div>
      </section>

       <section className={`${styles.featuredProject} section-padding`}> {/* Adicionando padding global */}
        <h2>Projeto em Destaque</h2>
        <div className={styles.projectPreview}>
          <h3>FBR Digital - Cadastro de Provedores</h3>
          <p>Plataforma para otimizar o cadastro e homologação de provedores de internet.</p>
          <Link href="/projects">Saiba mais...</Link>
        </div>
      </section>
    </div>
  );
}