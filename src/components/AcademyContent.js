import "../styles/academy_content.scss";
import "../styles/academy_content_mobile.scss";
import ReactPlayer from 'react-player/lazy'
import Footer from "./Footer";
import SchoolIcon from '@material-ui/icons/School';
import VpnLockIcon from '@material-ui/icons/VpnLock';
import AppsIcon from '@material-ui/icons/Apps';

import adesco from "./img/adesco.jpg";
import assitchape from "./img/assitchape.png";
import get_driver from "./img/get_driver.jpeg";
import psg from "./img/psg.png";
import jsql from "./img/jsql.png";
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import PublicIcon from '@material-ui/icons/Public';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';

import helpdesk from "./img/helpdesk.png";
import security from "./img/security.jpg";
import networking from "./img/networking.png";
import cloud from "./img/cloud.png";
import ethical_hacking from "./img/ethical_hacking.jpeg";
import programmation from "./img/programmation.jpg";
import linux from "./img/linux.png";

import {useHistory} from "react-router-dom";
import {auth} from "../firebase_file";
import Modal from "./Modal";
import {useState,useEffect} from "react";
import Login from "./Login";
import {useSelector} from "react-redux";
import { selectUser } from "../features/appSlice";


import Cartes from "./Cartes";


const HomeContent=()=>{
    const history=useHistory();
    const [open,set_open]=useState(false);
    const me=useSelector(selectUser);

    const close_modal=()=>{
        set_open(false);
    }
    const start=()=>{
        if(auth.currentUser==null){
            //login
            set_open(true);
        }else{
            //profile;
            history.push("/profile");
        }
    }
    return(
        <div className="academy_content">
            
            <div className="top">
                <div>
                    <h1>A2W - ACADEMIE</h1>
                    <p>
                        Nous formons <strong>des gueriers du web</strong> qui sont capables de sécuriser un réseau informatique,
                        tester le réseau et les applications qui y sont hébergées afin de trouver des solutions 
                        liées aux éventuelles failles trouvées sur le réseau.
                    </p>

                    <p>
                        <h3>
                        A2W offre à cet effet, une formation en <strong style={{color:"indianred"}}>cybersécurité</strong> qui englobe les domaines suivants:
                        </h3>
                        <div>
                            <button>
                                <img src={programmation} />
                                <h4>Programmation (C, Python, Technologies web, etch...)</h4>
                                
                            </button>

                            <button>
                                <img src={linux} />
                                <h4>Système (Linux)</h4>
                                {/*<p>Linux</p>*/}
                            </button>

                            <button style={{display:"none"}}>
                                <img src={helpdesk} />
                                <h4>Help-Desk</h4>
                                <p>Comptia A+</p>
                            </button>

                            <button>
                                <img src={security} />
                                <h4>Security</h4>
                                {/*<p>Security+</p>*/}
                            </button>

                            <button>
                                <img src={networking} />
                                <h4>Networking</h4>
                                {/*<p>CCNA</p>*/}
                            </button>

                            <button>
                                <img src={cloud} />
                                <h4>Cloud</h4>
                                {/*<p>AWS Cloud Practitioner</p>*/}
                            </button>

                            <button>
                                <img src={ethical_hacking} />
                                <h4>Ethical Hacking</h4>
                                {/*<p>Pentest+</p>*/}
                            </button>


                        </div>

                        <h4 style={{color:"indianred"}}>NB: Après la formation, vous pouvez passer les certifications liées à chaque domaine pour
                            avoir une attestation qui vous servira sur le marché de l'emploi
                        </h4>

                        <div className="line_start">
                            <button onClick={start}>
                            {
                               me==null ? "Inscrivez-vous aujourd'hui" : "Commencez la formation"
                           }
                            </button>
                        </div>
                    </p>

                    <div>
                        <Cartes />
                        
                    </div>
                </div>
            </div>
            <Footer />
            {open==true && <Modal click={close_modal} content={<Login />} />}
        </div>
    );
}
export default HomeContent;