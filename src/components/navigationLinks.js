import { Link } from "react-router-dom";

export default function NavigationLinks () {
    return (
        <nav>
            <Link to='/' >Home</Link>
            <Link to='/about' >About Me</Link>
            <Link to='/projects' >Projects</Link>
        </nav>
    )
}