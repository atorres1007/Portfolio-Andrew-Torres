import { Link } from "react-router-dom";
import NavigationLinks from "./navigationLinks";
import Socials from "./socials";

export default function Footer () {
    return (
        <footer>
            <div className="logo-container">
                <Link to='/' className="logo">Andrew Torres</Link>
            </div>
            
            <NavigationLinks />

            <Socials />

        </footer>
    )
}