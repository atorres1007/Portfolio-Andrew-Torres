import { Link } from "react-router-dom";

export default function ProjectItem(props) {

    return (
        <Link className="project-item" to={`/projects/${props.name}`}>
            <img className="project-item-img" src={props.imgURL} alt={props.name}/>
            <div className="project-item-name">{props.name}</div>
        </Link>
    )
}