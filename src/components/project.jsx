import Link from "next/link";
import { projectData } from "./data";

const Project = () =>{
    return(
        <section id="project">
                <div className="projects-container">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projectData && projectData.map((project) => (
                <div className="project-card" key={project.id}>
                    <div className="project-header">
                    <i className="fa-regular fa-folder-open folder-icon"></i>
                    <div className="small-icons">
                        <a href={project.gitHubLink}><i className="fa-brands fa-github"></i></a>
                    </div>
                    </div>
                    <Link href={`/projects/${project.name}`}>
                    <h3>{project.title}</h3>
                    </Link>
                    <p>{project.description}</p>
                </div>
                ))
                }
            </div>
            </div>
        </section>
    )
}
export default Project;