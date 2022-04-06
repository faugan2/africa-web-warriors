import "../styles/software_content.scss";
import "../styles/software_content_mobile.scss";
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
import PublicIcon from '@material-ui/icons/Public';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
const HomeContent=()=>{
    return(
        <div className="software_content">
            
            <div className="top">
                <div>
                    <h1>A2W - SOFT</h1>
                    <h2>
                        Avez-vous une idée d'application que vous voulez réaliser ?
                    </h2>
                    <div className="types">
                        <div>
                            <PublicIcon />
                            <label>Web</label>
                        </div>
                        <div>
                            <PhoneAndroidIcon />
                            <label>Mobile</label>
                        </div>
                        <div>
                            <DesktopWindowsIcon />
                            <label>Desktop</label>
                        </div>
                        
                        
                    </div>
                    <p className="help">
                        <strong>A2W</strong> peut vous aider à atteindre cet objectif rapidement.
                    </p>
                    <h3>Comment nous procédons ?</h3>
                    <p>
                       Pour mener à bien votre projet d'application, nous suivons les 3 étapes suivantes:
                    </p>
                    
                    <ol>
                        <li>
                            <strong>Réalisation du cahier de charges</strong>
                            <p>Cette consiste à mettre sur papier toutes les fonctionalités de votre projets de facon 
                                détaillée. Ceci permettra de déterminer d'une part un delai de réalisation du projet à fin de mieux 
                                suivre l'évolution et d'autre part de determiner le coût de la main d'oeuvre pour le projet.
                            </p>
                        </li>

                        <li>
                            <strong>Développement de l'application</strong>
                            <p>A ce stade, les developpeurs A2W vont produire l'application selon le cahier de charges pré-établi</p>
                        </li>
                        
                        <li>
                            <strong>Déploiement de l'application</strong>
                            <p>Nous livrons l'application finale en l'installant sur le serveur du client tout en faisant 
                                préalablement des tests pour être sûr que toutes les fonctionalités marchent très bien selon les 
                                désir du client.
                            </p>
                        </li>
                    </ol>
                </div>
                <Contact />
               
            </div>
            <Footer />

        </div>
    );
}
export default HomeContent;