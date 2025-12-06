import { useParams } from "react-router-dom";

export default function IndividualProjectPage (props) {

    const { projectName } = useParams();
    const { projects } = props;
    const projectIndex = projects.findIndex(project => project.name === projectName);
    const project = projects[projectIndex]

    return (
        <div className="individual-project-page">
            <a href={project.projectURL} target="_blank" rel="noreferrer">
                <img src={project.imgURL} alt={project.name}/>
            </a>
            <a href={project.projectURL} target="_blank" rel="noreferrer">
                <p className="project-name">
                    {project.name}
                </p>
            </a>
            <p className="project-description">{project.description}</p>
        </div>
    )
}