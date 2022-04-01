import "../styles/home_content.scss";
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
import foaf from "./img/foaf.png";
import sici from "./img/sici.jpg";

const HomeContent=()=>{
    return(
        <div className="home_content">
           <div className="top">
               <div className="left">
                   <h1>AFRICA WEB WARRIRORS</h1>
                   <ol>
                       <li><strong className="cle">Sécurisez</strong> votre 
                        <strong className="cle"> réseau informatique</strong> et les applications qui s'y trouvent,</li>
                       <li><strong className="cle">Concevez</strong> et <strong className="cle">réalisez</strong> vos idées d'applications ou logicielles (web, mobile, desktop, etc...),</li>
                       <li><strong className="cle">Formez-vous</strong> en sécurité informatique (Hacking Ethique).</li>
                   </ol>

                   <div>
                       <button>Commencez la formation</button>
                   </div>
               </div>
               <div className="right">
                <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width={500} height={300} />
               </div>
           </div>

            <div className="services">
                <div>
                    <SchoolIcon style={{fontSize:"4rem"}}/>
                    <h2>Accademie</h2>
                    <p>Devenez hackeur éthique ou testeur d'application ou préparez-vous pour avoir votre 
                        certificat en CCNA, Network+, AWS Cloud Practitioner,Pentest+, Comptia A+ .
                    </p>
                </div>
                <div>
                    <VpnLockIcon style={{fontSize:"4rem"}} />
                    <h2>Sécurité des réseaux</h2>
                    <p>
                        Nous mettons en place des mésures de sécurité pour votre réseau informatique.
                    </p>
                </div>
                <div>
                    <AppsIcon style={{fontSize:"4rem"}}/>
                    <h2>Solutions Logicielles</h2>
                    <p>
                        Nous vous aidons dans la réalisation de vos applications web, mobile, desktop, etc...
                    </p>
                </div>
            </div>

            <div className="partenaires">
                <h2>Ils nous font confiances</h2>
                <div>
                    <img src={psg} />
                    <img src={adesco} />
                    <img src={assitchape} />
                    <img src={get_driver} />
                    <img src={jsql} />
                    <img src={foaf} />
                    <img src={sici} />


                </div>
            </div>

            <Footer />

        </div>
    );
}
export default HomeContent;