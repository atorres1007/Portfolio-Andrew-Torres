import ProjectItem from "../components/projectItem";

export default function ProjectsPage (props) {

    const { projects } = props

    return (
        <>
        <span className="page-title">Projects</span>
        <div className="projects-container">
            {projects.map((project) => (
                <ProjectItem 
                    key={project.name}
                    name={project.name} 
                    imgURL={project.imgURL}
                />
            ))}
        </div>
        </>
    )
}