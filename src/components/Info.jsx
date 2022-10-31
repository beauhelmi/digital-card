
import DisplayPic from "../pics/displaypic.png"
import { FaEnvelope, FaLinkedinIn } from "react-icons/fa"

export default function Info(){
    return(
        <nav className="info--container">
            <img src={DisplayPic} alt="Display Picture" className="info--picture" />
             
            <h1>Burhanuddin Helmi</h1>
             
            <h4>Frontend Developer | Javascript | React</h4>

            <a href="mailto: beauhelmi@gmail.com" target="_blank" className="info--email__link">
                <span> <FaEnvelope /> </span>
                <span>Email</span>
            </a>
            <a href="https://www.linkedin.com/in/burhanuddin-helmi-bin-ramli/" target="_blank" className="info--linkedin__link">
                <span> <FaLinkedinIn /> </span>
                <span>LinkedIn</span> 
            </a>

        </nav>
    )
}