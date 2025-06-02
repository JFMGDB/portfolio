import styles from './Experience.module.css';

const ExperienceItem = ({ title, company, duration, description, type }) => (
  <div className={styles.experienceItem}>
    <h3 className={styles.itemTitle}>{title}</h3>
    {(type === "job" && company) && <p className={styles.itemCompany}>em {company}</p>}
    {type === "education" && company && <p className={styles.itemCompany}>{company}</p>}
    <p className={styles.itemDuration}><em>{duration}</em></p>
    <ul className={styles.itemDescriptionList}>
      {Array.isArray(description) ? description.map((point, index) => <li key={index}>{point}</li>) : <li>{description}</li>}
    </ul>
  </div>
);

export default function ExperiencePage() {
  const professionalExperience = [
    {
      title: "Residência Tecnológica em Banco de Dados",
      company: "FCx Labs - Ferreira Costa",
      duration: "02/2025 - presente", 
      description: ["Desenvolvimento e otimização de consultas SQL em bancos de dados relacionais."], 
      type: "job"
    },
    {
      title: "Desenvolvimento Back-end",
      company: "Softex Recife",
      duration: "06/2024 - 11/2024", 
      description: [
        "Desenvolvimento Back-end acelerado, aplicando metodologias ágeis e melhores práticas para entrega rápida de soluções.", 
        "Experiência prática na criação de APIs RESTful, integração de sistemas e otimização de performance." 
      ],
      type: "job"
    },
  ];

  const academicExperience = [
    {
      title: "Graduação em Sistemas para Internet", 
      company: "Universidade Católica de Pernambuco", 
      duration: "02/2024 - presente (Cursando o 3º semestre, com conclusão prevista em 2026)", 
      description: ["Foco em desenvolvimento de soluções web e mobile, arquitetura de sistemas e novas tecnologias."],
      type: "education"
    },
  ];

  return (
    <div>
      <h1 className={styles.pageTitle}>Minha Experiência</h1>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Profissional</h2>
        {professionalExperience.length > 0 ? (
          professionalExperience.map((exp, index) => <ExperienceItem key={index} {...exp} />)
        ) : (
          <p className={styles.noExperience}>Nenhuma experiência profissional para exibir no momento.</p>
        )}
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Acadêmica & Cursos</h2>
        {academicExperience.map((edu, index) => <ExperienceItem key={index} {...edu} />)}
      </section>
    </div>
  );
}