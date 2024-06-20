import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card'; // Importe os tipos necessários de Card
import styles from './Projects.module.css';
import NavBar from '../../components/NavBar/NavBar';

interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
    // Adicione outros campos do repositório conforme necessário
}

const Projects: React.FC = () => {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        const buscarRepositorios = async () => {
            try {
                const response = await fetch('https://api.github.com/repos/smViana19/');
                if (!response.ok) {
                    throw new Error('Failed to fetch repositories');
                }
                const data = await response.json();
                setRepositories(data);
            } catch (error) {
                console.error('Error fetching repositories:', error);
                // Tratar erros de requisição aqui, se necessário
            }
        };
        buscarRepositorios();
    }, []);

    return (
        
        <section className={styles.projetos}>
            <NavBar/>
            <h2>Projetos</h2>
            {repositories.length > 0 ? (
                <section className={styles.lista}>
                    {repositories.map((repo) => (
                        <Card
                            key={repo.id}
                            name={repo.name}
                            description={repo.description}
                            html_url={repo.html_url}
                        />
                    ))}
                </section>
            ) : (
                <p>Carregando repositórios...</p>
            )}
        </section>
        
    );
};

export default Projects;