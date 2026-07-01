import styles from './ProjectSection.module.css'

export default function ProjectCard ({project}) {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <img src={project.image} alt={project.title} className={styles.projectImage} />
            </div>

            <div className={styles.cardContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>

                <div className={styles.techStack}>
                    {project.techStack.map((tech, index) => (
                        <span key={index} className={styles.techChip}>{tech}</span>
                    ))}
                </div>

                <div className={styles.cardLinks}>
                    <a href={project.liveLink} target="_blank" rel="noreferrer" className={styles.primaryLink}>Live Demo</a>
                    <a href={project.githubLink} target="_blank" rel="noreferrer" className={styles.secondaryLink}>GitHub</a>
                </div>
            </div>
        </div>
    )
}