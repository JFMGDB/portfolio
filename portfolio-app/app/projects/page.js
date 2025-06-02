"use client";

import { useEffect, useState } from 'react';
import { fetchGitHubRepos } from '@/services/githubService';
import Link from 'next/link';
import styles from './Projects.module.css'; // Importando o CSS Module
import { ExternalLink, Github } from 'lucide-react'; // Ícones para os links

const ProjectCard = ({ title, description, imageUrl, liveDemoUrl, sourceCodeUrl, technologies }) => (
  <div className={`${styles.projectCard}`}> {/* Aplicando a classe card global e local */}
    {imageUrl && <img src={imageUrl} alt={title} className={styles.projectImage} />}
    <div className={styles.projectContent}>
      <h3>{title}</h3>
      <p>{description}</p>
      {technologies && technologies.length > 0 && (
        <div className={styles.technologies}>
          <strong>Tecnologias:</strong>
          {technologies.map(tech => <span key={tech}>{tech}</span>)}
        </div>
      )}
    </div>
    <div className={styles.buttons}>
      {liveDemoUrl && (
        <a href={liveDemoUrl} target="_blank" rel="noopener noreferrer">
          <button>
            <ExternalLink size={18} style={{ marginRight: '8px' }} />
            Ver ao Vivo
          </button>
        </a>
      )}
      {sourceCodeUrl && (
        <a href={sourceCodeUrl} target="_blank" rel="noopener noreferrer">
          <button className={styles.sourceCodeButton}>
            <Github size={18} style={{ marginRight: '8px' }} />
            Código Fonte
          </button>
        </a>
      )}
    </div>
  </div>
);

const RepoItem = ({ repo }) => (
  <li className={styles.repoItem}> {}
    <h4>
      <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
        {repo.name}
      </Link>
    </h4>
    <p>{repo.description || 'Sem descrição disponível.'}</p>
    <div className={styles.repoMeta}>
      {repo.language && <small>Linguagem: {repo.language}</small>}
      <small>Stars: {repo.stargazers_count}</small>
      <small>Forks: {repo.forks_count}</small>
    </div>
  </li>
);

export default function ProjectsPage() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRepos() {
      setLoading(true);
      const fetchedRepos = await fetchGitHubRepos();
      // Filtrar repositórios que são forks, se desejado
      // const nonForkedRepos = fetchedRepos.filter(repo => !repo.fork);
      // setRepos(nonForkedRepos);
      setRepos(fetchedRepos);
      setLoading(false);
    }
    loadRepos();
  }, []);

  const featuredProjects = [
    {
      title: "FBR Digital - Cadastro de Provedores",
      description: "Uma plataforma para otimizar o cadastro e a homologação de provedores de internet na base da FBR Digital, permitindo o registro completo de infraestrutura, áreas de cobertura e serviços oferecidos, com o objetivo de aumentar a visibilidade dos provedores e gerar novas demandas de serviço.", 
      liveDemoUrl: null, 
      sourceCodeUrl: "https://github.com/softexrecifepe/PI-T1-GP1-FBR", 
      technologies: ["Nest.js", "TypeScript", "PostgreSQL"]
    },
    
    // Exemplo de outro projeto:
    // {
    //   title: "Meu Portfólio Pessoal",
    //   description: "Este próprio site de portfólio, construído para demonstrar minhas habilidades em desenvolvimento web moderno com Next.js e React.",
    //   imageUrl: "/images/portfolio-screenshot.png", // Um screenshot do seu portfólio
    //   sourceCodeUrl: "https://github.com/JFMGDB/meu-portfolio-nextjs", // Link para o repo do portfólio
    //   technologies: ["Next.js", "React", "CSS Modules", "JavaScript"]
    // }
  ];

  return (
    <div className="section-padding"> {}
      <h1 className={styles.pageTitle}>Meus Projetos</h1>

      {featuredProjects.length > 0 && (
        <section>
          <h2 className={styles.sectionTitle}>Projetos em Destaque</h2>
          {featuredProjects.map((project, index) => <ProjectCard key={index} {...project} />)}
        </section>
      )}

      <section style={{ marginTop: featuredProjects.length > 0 ? '3rem' : '0' }}>
        <h2 className={styles.sectionTitle}>Meus Repositórios no GitHub</h2>
        {loading ? (
          <p className={styles.loadingText}>Carregando repositórios...</p>
        ) : repos.length > 0 ? (
          <ul className={styles.repoGrid}> {/* Usando repoGrid para layout em grid */}
            {repos.map((repo) => (
              <RepoItem key={repo.id} repo={repo} />
            ))}
          </ul>
        ) : (
          <p className={styles.errorText}>Não foi possível buscar os repositórios ou nenhum foi encontrado.</p>
        )}
      </section>
    </div>
  );
}