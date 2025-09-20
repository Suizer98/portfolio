import { projectsData } from './Data'
import ProjectDesign from './ProjectDesign'
import ProjectJS from './ProjectJS'
import classes from './Projects.module.css'

function Projects() {
  return (
    <section className={classes.projects}>
      <h2 className={classes.header}>My personal projects</h2>
      <figure className={classes.workItems}>
        {projectsData.map((project, index) => {
          if (project.type === 'web' || project.type === 'system' || project.type === 'data') {
            return (
              <ProjectJS
                key={index}
                img={project.img}
                alt={project.alt}
                title={project.title}
                description={project.description}
                git={project.git}
                demo={project.demo}
                tech={project.tech}
              />
            )
          } else if (project.type === 'design') {
            return (
              <ProjectDesign
                key={index}
                img={project.img}
                alt={project.alt}
                title={project.title}
                description={project.description}
                software={project.software}
                link={project.behance}
              />
            )
          }
        })}
      </figure>
    </section>
  )
}

export default Projects
