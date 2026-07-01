import ProjectCard from './ProjectCard'
import { projectData } from '../../data/project'
import styles from './ProjectSection.module.css'

export default function ProjectSection () {
    return (
    <section>
        <div id="projects" className={styles.ProjectSection}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Projects</h2>
                <div className={styles.underline}></div>

                <div className={styles.grid}>
                    {projectData.map((project) => (
                        <ProjectCard key={project.id} project={project}/>
                    ))}
                </div>
            </div>
        </div>
    </section>
)}