import { Link } from "react-router-dom";
import "../styles/footer.scss";
import "../styles/footer_mobile.scss";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';

const Footer=()=>{
    return(
        <div className="footer">
            <div>
                <h1>A2W</h1>
                <ol>
                    <li><Link to="/academy"><a>Academie</a></Link></li>
                    <li><Link to="/security"><a>Sécurité-reseau</a></Link></li>
                    <li><Link to="/softwares"><a>Logiciels</a></Link></li>
                </ol>
            </div>
            <div>
                <h1>Liens utiles</h1>
                <ol>
                    <li><Link to="/mentions"><a>Mentions Légales</a></Link></li>
                    <li><Link to="/terms-conditions"><a>Termes & Conditions</a></Link></li>
                </ol>
            </div>
            <div>
                <h1>Trouvez-nous sur:</h1>
                <div className="socials">
                    <a href="https://www.facebook.com/Africa-Web-Warriors-102450472431970" target="_blank"><FacebookIcon /></a> 
                    <a href="https://twitter.com/warriors_africa" target="_blank"><TwitterIcon /></a>
                    <a href="https://www.youtube.com/channel/UCEnTrb9DEATh3axyUHUr_9g" target="_blank"><YouTubeIcon /></a>
                    <a href="https://github.com/africawebwarriors" target="_blank"><GitHubIcon /></a>
                    <a href="https://wa.me/22892950803" target="_blank"><WhatsAppIcon /></a>
                    <a href="https://www.linkedin.com/in/africa-web-warriors-689233236" target="_blank" ><LinkedInIcon /></a>
                </div>

                <div className="contacts">
                    <p>
                        <MailOutlineIcon />
                        <span>africawebwarriors@gmail.com</span>
                    </p>

                    <p>
                        <PhoneIcon />
                        <span>+228 92 95 08 03</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;