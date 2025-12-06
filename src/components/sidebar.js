import  { Link } from "react-router-dom"
import { useContext } from "react";
import { SidebarContext } from "../App";

export default function Sidebar(props) {

    const { sidebarOpen } = useContext(SidebarContext)
    
    const sidebarClass = sidebarOpen ? "sidebar open" : "sidebar close"

    return (
        <div className={sidebarClass}>
            <nav>
                <Link to='/' onClick={props.handleSidebar}>Home</Link>
                <Link to='/about' onClick={props.handleSidebar}>About Me</Link>
                <Link to='/projects' onClick={props.handleSidebar}>Projects</Link>
                <Link to='/resume' onClick={props.handleSidebar}>Resume</Link>
                <Link to='/contact' onClick={props.handleSidebar}>Contact</Link>
            </nav>
        </div>
    )
}