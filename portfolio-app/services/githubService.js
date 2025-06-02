const GITHUB_USERNAME = 'JFMGDB'; 

export async function fetchGitHubRepos() {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc`);
    if (!response.ok) {
      throw new Error(`Erro na API do GitHub: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Falha ao buscar repositórios do GitHub:", error);
    return [];
  }
}