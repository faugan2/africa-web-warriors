import "../styles/home_content.scss";
import "../styles/home_content_mobile.scss";
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
import foaf from "./img/foaf.png";
import sici from "./img/sici.jpg";
import jkep from "./img/jkep.png";

import {useHistory} from "react-router-dom";
import {auth} from "../firebase_file";
import Modal from "./Modal";
import {useState,useEffect} from "react";
import Login from "./Login";
import { selectUser } from "../features/appSlice";
import {useSelector} from "react-redux";
import Cartes from "./Cartes";
import Books from "./Books";

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
        <div className="home_content">
           <div className="top">
               <div className="left">
                   <h1>AFRICA WEB WARRIORS</h1>
                   <ol>
                       <li><strong className="cle">Sécurisez</strong> votre 
                        <strong className="cle"> réseau informatique</strong> et les applications qui s'y trouvent,</li>
                       <li><strong className="cle">Concevez</strong> et <strong className="cle">réalisez</strong> vos idées d'applications ou logicielles (web, mobile, desktop, etc...),</li>
                       <li><strong className="cle">Faites-vous former</strong> en sécurité informatique (cybersécurité).</li>
                   </ol>

                   <div>
                       <button onClick={start}>
                           {
                               me==null ? "Inscrivez-vous aujourd'hui" : "Commencez la formation"
                           }
                           </button>
                   </div>
               </div>
               <div className="right">
                <ReactPlayer url='https://www.youtube.com/watch?v=_1K7mtAMACE' width={500} height={300} />
               </div>
           </div>

            <div className="services">
                <div>
                    <SchoolIcon style={{fontSize:"4rem"}}/>
                    <h2>Accademie</h2>
                    <p>
                        Devenez <strong>professionnel de la cybersécurité</strong> pour être capable de protéger le réseau d'une entreprise.  
                        <strong> A2W</strong> vous propose une formation pour vous permettre  d'acquérir les connaissances nécessaires pour faire 
                        carrière dans la lutte contre la cybercriminalité.
                    </p>
                </div>
                <div>
                    <VpnLockIcon style={{fontSize:"4rem"}} />
                    <h2>Sécurité des réseaux</h2>
                    <p>
                    Le monde hyperconnecté d'aujourd'hui favorise <strong>les cyberattaques</strong>. 
                    Que vous soyez attiré par le désire de fiabiliser votre réseau ou que vous cherchiez simplement à 
                    vous protéger en ligne et sur les réseaux sociaux, <strong>A2W</strong> vous aide à atteindre cet objectif.
                    </p>
                </div>
                <div>
                    <AppsIcon style={{fontSize:"4rem"}}/>
                    <h2>Solutions Logicielles</h2>
                    <p>
                        Nous vous aidons dans la réalisation de vos applications web, mobile, desktop, etc...<br />
                        Nous pouvons aussi prendre vos applications existantes et effectuer des tests de sécurité pour vous 
                        guarantir un niveau de sécurité élevé.
                    </p>
                </div>
            </div>

            <div className="formations" style={{width:"80vw",margin:"auto"}}>
                <Cartes />
                <Books />
            </div>            
            

            <div className="partenaires">
                <h1>Ils nous font confiances</h1>
                <div>
                    <a><img src={psg} /></a>
                    <a><img src={jkep} /></a>
                    <a><img src={adesco} /></a>
                    <a><img src={assitchape} /></a>
                    <a><img src={get_driver} /></a>
                    <a><img src={jsql} /></a>
                    <a><img src={foaf} /></a>
                    <a><img src={sici} /></a>
                </div>
            </div>

            <Footer />
            {open==true && <Modal click={close_modal} content={<Login />} />}
        </div>
    );
}
export default HomeContent;