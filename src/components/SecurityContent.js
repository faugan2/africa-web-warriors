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
import RouterIcon from '@material-ui/icons/Router';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
const HomeContent=()=>{
    return(
        <div className="security_content">
            
            <div className="top">
                <div>

                    <div>
                        <RouterIcon id="internet" />
                        <h2>Internet</h2>
                        <p>L'utilisation de l'internet devient de plus en plus présent dans nos vie avec beaucoup d'avantages 
                        que nous connaissons tous. Cela nous facilite la vie et nous permet de communiquer facilement et rendre 
                        certaines de nos tâches quotidiennes plus agréables.</p>
                    </div>
                    <div>
                        <ReportProblemIcon id="danger" />
                        <h2 style={{color:"indianred"}}>Dangers</h2>
                        <p>
                        Mais en même temps, cela nous expose à de graves dangers que nous ignorons 
                        la plus part du temps. Nous risquons que des personnes malveillants utilisent certaines failles pour 
                        voler des données ou des informations confidentielles.
                        </p>
                    </div>
                    
                    <div>
                        <HelpOutlineIcon id="solution"/>
                        <h2 style={{color:"green"}}>Solutions</h2>
                        <p>
                        Heureusement, <strong>A2W</strong> accompagne les entreprises et aussi les particuliers à mieux sécuriser
                        leur réseaux et éviter des attaques pouvent conduire à d'énormes dégats.
                        </p>
                    </div>
                </div>
                <div className="zone_contact">
                    <Contact />
                </div>
                
               
            </div>
            <Footer />

        </div>
    );
}
export default HomeContent;