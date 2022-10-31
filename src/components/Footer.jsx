import { FaGithub } from "react-icons/fa"

export default function Footer(props){
    return (
        <div className="footer--container">
            <a href="https://github.com/beauhelmi" target="_blank" className="footer--github__link">
                <span>
                    <FaGithub />
                </span>
                <span>Github</span>
            </a>
            <a href="https://beauhelmi.github.io/rock-paper-scissors/" className="footer--pages__popup" target="_blank">
                <span>
                    <FaGithub />
                </span>
                <span>Pages</span>
            </a>
        </div>
    )
}