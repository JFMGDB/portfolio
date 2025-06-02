import styles from './About.module.css';

export default function AboutPage() {
  const GITHUB_PROFILE_URL = "https://github.com/JFMGDB";
  const LINKEDIN_PROFILE_URL = "https://www.linkedin.com/in/josé-felipe-morais/";

  return (
    <div className="section-padding">
      <h1 className={styles.pageTitle}>Sobre Mim</h1>
      <div className={styles.contactInfo}>
        Recife, Brasil | <a href="mailto:fguerra127@gmail.com">fguerra127@gmail.com</a> | (81) 99939-0267 <br />
        <a href={GITHUB_PROFILE_URL} target="_blank" rel="noopener noreferrer">GitHub</a> | <a href={LINKEDIN_PROFILE_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>

      <section className={`${styles.section} card`}>
        <h2>Minha Jornada</h2>
        <p>
          Desenvolvedor Back-end com um ano de experiência focada em Node.js. Profissional pró-ativo, ágil e altamente adaptável,
          comprometido com boas práticas de desenvolvimento, otimização de processos e entrega consistente de resultados. Com
          forte espírito colaborativo e foco em aprendizado continuo, busca aprimorar fluxos de trabalho e contribuir para o sucesso
          da equipe.
        </p>
      </section>

      <section className={`${styles.section} card`}>
        <h2>Competências Técnicas</h2>
        <h3>Tecnologias:</h3>
        <ul className={styles.skillsList}>
          <li>Node.js</li>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
        </ul>
        <h3 style={{marginTop: '1.5rem'}}>Ferramentas:</h3>
        <ul className={styles.skillsList}>
          <li>Vs Code</li>
          <li>Git</li>
          <li>Github</li>
          <li>ClickUp</li>
          <li>Trello</li>
        </ul>
      </section>

      <section className={`${styles.section} card`}>
        <h2>Idiomas</h2>
        <ul className={styles.skillsList}>
            <li>Português - Nativo</li>
            <li>Inglês - Fluente</li>
        </ul>
      </section>

      <section className={`${styles.section} card`}>
        <h2>Como Este Portfólio Foi Construído</h2>
        <p>Este portfólio foi desenvolvido utilizando um conjunto moderno de tecnologias para demonstrar minhas habilidades:</p>
        <ul className={styles.portfolioTechList}>
          <li><strong>Next.js:</strong> Para renderização no lado do servidor, roteamento e uma experiência React otimizada.</li>
          <li><strong>React:</strong> Como a biblioteca principal para construir componentes de UI interativos.</li>
          <li><strong>CSS Modules:</strong> Para estilização componentizada e de fácil manutenção.</li>
          <li><strong>Lucide React:</strong> Para ícones limpos e consistentes.</li>
          <li><strong>API do GitHub:</strong> Integrada na página de Projetos para buscar dinamicamente meus repositórios.</li>
          <li><strong>Vercel:</strong> Para deploy e hospedagem contínuos.</li>
        </ul>
      </section>
    </div>
  );
}