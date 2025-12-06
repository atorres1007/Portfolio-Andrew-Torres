import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Socials () {
    return (
        <div className="socials">
            <a href="https://github.com/atorres1007" target="_blank" rel="noreferrer">
                <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/andrew-torres13/" target="_blank" rel="noreferrer">
                <FaLinkedin />
            </a>
        </div>
    )
}