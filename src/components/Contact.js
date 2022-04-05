import "../styles/contact.scss";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import {useState,useEffect} from "react";
import {auth, db} from "../firebase_file";
import firebase from "firebase";

const Contact=()=>{
    const [nom,set_nom]=useState("");
    const [email,set_email]=useState("");
    const [message,set_message]=useState("");
    const [alerte,set_alerte]=useState("");

    const send_email=(e)=>{
        set_alerte("");
        
        if(nom==""){
            set_alerte("Le nom est vide");
            return;
        }
        if(email==""){
            set_alerte("L'email est vide");
            return;
        }
        if(message==""){
            set_alerte("Le message est vide");
            return;
        }
    

        const btn=e.target;
        btn.disabled=true;
        btn.innerHTML="Patientez...";

        const line={
            nom,
            email,
            message,
            date:firebase.firestore.FieldValue.serverTimestamp()
        }

        db.collection("messages").add(line).then(()=>{
            set_alerte("Message bien envoyé");
            btn.disabled=false;
            btn.innerHTML="Envoyez le message";
            set_nom("");
            set_email("");
            set_message("");

        }).catch((err)=>{
            set_alerte("Une erreur est survenue");
            btn.disabled=false;
            btn.innerHTML="Envoyez le message";
        })
    }
    return (
        <div className="contact">
            <h2>Nous contacter </h2>
            <div className="line">
                <label>Nom et Prénoms</label>
                <div>
                    <PermIdentityIcon />
                    <input type="text"  placeholder="Votre nom et prénoms" 
                    value={nom} 
                    onChange={e=>set_nom(e.target.value)}
                    />
                </div>
            </div>

            <div className="line">
                <label>Email</label>
                <div>
                    <MailOutlineIcon />
                    <input type="email"  placeholder="Votre adresse email" 
                    value={email}
                    onChange={e=>set_email(e.target.value)}
                    />
                </div>
            </div>

            <div className="line">
                <label>Message</label>
                <div>
                    <textarea  placeholder="Votre message" 
                    value={message}
                    onChange={e=>set_message(e.target.value)}
                    />
                </div>
            </div>

            <div className="line">
                <button onClick={send_email}>Envoyez le message</button>
            </div>

            {
                alerte!="" && <div className="line"><p>{alerte}</p></div>
            }

        </div>
    )
}

export default Contact;