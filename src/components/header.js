import { useContext } from "react";
import { SidebarContext } from "../App";
import { Link, useLocation } from "react-router-dom";
import { IoReorderThreeSharp } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

export default function Header (props) {

    let  location  = useLocation();
    
    function toggleHeader(pathName) {
        if (pathName === location.pathname) {
            return 'active-header'
        }
        else {
            return 'inactive-header'
        }
    }

    const { sidebarOpen } = useContext(SidebarContext)

    return (
        <header>
            <button className="sidebar-button" onClick={(props.handleSidebar) }>
                {sidebarOpen ? 
                <AiOutlineClose className="icon"/>
                : <IoReorderThreeSharp className="icon"/>}
            </button>

            <div className="logo-container"><Link to='/' className="logo">Andrew Torres</Link></div>
            
            <nav>
                <Link to='/' className={toggleHeader('/')}>Home</Link>
                <Link to='/about' className={toggleHeader('/about')}>About Me</Link>
                <Link to='/projects' className={toggleHeader('/projects')}>Projects</Link>
                <Link to='/resume' className={toggleHeader('/resume')}>Resume</Link>
                <Link to='/contact' className={toggleHeader('/contact')}>Contact</Link>
            </nav>
        </header>
    )
}