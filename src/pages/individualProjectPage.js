import { useParams } from "react-router-dom";

export default function IndividualProjectPage (props) {

    const { projectName } = useParams();
    const { projects } = props;
    const projectIndex = projects.findIndex(project => project.name === projectName);
    const project = projects[projectIndex]

    return (
        <div className="individual-project-page">
            <div className="individual-project-page-img">
                <a href={project.projectURL} className="individual-project-page-imgURL" target="_blank" rel="noreferrer">
                    <img src={project.imgURL} alt={project.name}/>
                </a>
            </div>
            
           
            <p className="project-name">
                <a href={project.projectURL} target="_blank" rel="noreferrer">
                    {project.name}
                </a>
            </p>
           
            <p className="project-description">{project.description}</p>
        </div>
    )
}