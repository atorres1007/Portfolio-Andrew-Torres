import { Link } from "react-router-dom";

export default function NavigationLinks () {
    return (
        <nav>
            <Link to='/' >Home</Link>
            <Link to='/about' >About Me</Link>
            <Link to='/projects' >Projects</Link>
            <Link to='/resume' >Resume</Link>
            <Link to='/contact' >Contact</Link>
        </nav>
    )
}