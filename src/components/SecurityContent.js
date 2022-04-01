import "../styles/security_content.scss";
import ReactPlayer from 'react-player/lazy'
import Footer from "./Footer";
import SchoolIcon from '@material-ui/icons/School';
import VpnLockIcon from '@material-ui/icons/VpnLock';
import AppsIcon from '@material-ui/icons/Apps';

import adesco from "./img/adesco.jpg";
import assitchape from "./img/assitchape.png";
import get_driver from "./img/get_driver.png";
import psg from "./img/psg.png";
import jsql from "./img/jsql.png";
import Contact from "./Contact";

const HomeContent=()=>{
    return(
        <div className="security_content">
            
            <div className="top">
                <div>
                    <p>L'utilisation de l'internet devient de plus en plus présent dans nos vie avec beaucoup d'avantages 
                        que nous connaissons tous. Mais en même temps, cela nous expose à de graves dangers que nous ignorons 
                        la plus part du temps.
                    </p>
                    <p>
                        C'est dans cette optique que A2W accompagne les entreprises et aussi les particuliers à mieux sécuriser
                        leur réseaux et éviter des attaques pouvent conduire à d'énormes dégats.
                    </p>
                    <h3>Besoin de mettre en place un réseau informatique ou sécuriser votre réseau informatique actuel ?</h3>
                    <p>
                        Contactez A2W pour vous aider à mettre en place votre réseau ou à faire des tests d'intrusion 
                        afin de renforcer votre niveau de sécurité.
                    </p>
                </div>
                <Contact />
               
            </div>
            <Footer />

        </div>
    );
}
export default HomeContent;