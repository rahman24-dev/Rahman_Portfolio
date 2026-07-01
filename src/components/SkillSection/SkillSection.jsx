import styles from './SkillSection.module.css';
import { skillsData } from '../../data/skills';

export default function SkillSection() {
    // Separate the data dynamically based on your existing structure
    const skills = skillsData.filter(category => category.title !== 'Tools & Workflow');
    const tools = skillsData.filter(category => category.title === 'Tools & Workflow');

    return (
        <section>
            <div id="skills" className={styles.skillsSection}>
                <div className={styles.container}>
                    
                    {/* Header with Logo */}
                    <div className={styles.header}>
                        <svg className={styles.logo} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                            <polyline points="2 17 12 22 22 17"></polyline>
                            <polyline points="2 12 12 17 22 12"></polyline>
                        </svg>
                        <h2 className={styles.sectionTitle}>Technical Arsenal</h2>
                    </div>
                    <div className={styles.underline}></div>

                    {/* Connectivity Timeline */}
                    <div className={styles.connectivityTimeline}>
                        
                        {/* Skills Node */}
                        <div className={styles.timelineNode}>
                            <h3 className={styles.nodeTitle}>Skills</h3>
                            <div className={styles.grid}>
                                {skills.map((category, index) => (
                                    <div 
                                        key={index}
                                        className={styles.card}
                                        style={{ animationDelay: `${index * 0.2}s` }}>
                                        <h3 className={styles.cardTitle}>
                                            <span className={styles.icon}>{category.icon}</span> {category.title}
                                        </h3>
                                        <ul className={styles.skillList}>
                                            {category.skills.map((skill, skillIndex) => (
                                                <li key={skillIndex} className={styles.skillItem}>
                                                    <span className={styles.bullet}>▹</span> {skill}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}