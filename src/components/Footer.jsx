import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import FooterBar from "../css/FooterStyle"



const Footer=()=>{
    return(
        <FooterBar>
            <h5>@2024- todos os direitos reservados <FaFacebook />  <FaInstagram /> <FaLinkedin /> <MdEmail /> </h5>
        </FooterBar>
    )
}
export default Footer