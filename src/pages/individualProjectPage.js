import { useParams } from "react-router-dom";

export default function IndividualProjectPage (props) {

    const { projectName } = useParams();
    const { projects } = props;
    const projectIndex = projects.findIndex(project => project.name === projectName);
    const project = projects[projectIndex]

    return (
        <div className="individual-project-page">
            <a href={project.projectURL} className="imgURL" target="_blank" rel="noreferrer">
                <img src={project.imgURL} alt={project.name}/>
            </a>
           
            <p className="project-name">
                <a href={project.projectURL} target="_blank" rel="noreferrer">
                    {project.name}
                </a>
            </p>
           
            <p className="project-description">{project.description}</p>
        </div>
    )
}