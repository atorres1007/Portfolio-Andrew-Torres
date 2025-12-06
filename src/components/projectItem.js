import { Link } from "react-router-dom";

export default function ProjectItem(props) {

    return (
        <Link className="project-item" to={`/projects/${props.name}`}>
            <img src={props.imgURL} alt={props.name}/>
            <div>{props.name}</div>
        </Link>
    )
}