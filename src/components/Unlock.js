import "../styles/unlock.scss";
import "../styles/unlock_mobile.scss";
import paypal from "./img/paypal.jpg";
import carte_visa from "./img/carte_visa.png";
import tmoney from "./img/tmoney.png";
import flooz from "./img/flooz.jpg";
import {useState,useEffect,useRef} from "react";
import {auth,db,} from "../firebase_file";
import CircularProgress from '@material-ui/core/CircularProgress';
import {selectUser,selectAjouter} from "../features/appSlice";
import {useSelector} from "react-redux";
import logo from "./img/logo.png";
import {data} from "./formations";
import firebase from "firebase";

const Unlock=({click})=>{

    const me=useSelector(selectUser);
    const ajouter=useSelector(selectAjouter);
    
    useEffect(()=>{
        const res=data?.filter((item)=>{
            return item.id==ajouter;
        })
        if(res.length>0){
            set_prix(res[0].cout);
        }
    },[ajouter])

    const [code,set_code]=useState("");
    const [progress,set_progress]=useState(false);
    const [alerte,set_alerte]=useState("");
    const [prix,set_prix]=useState("");
    const ref=useRef(null);

    useEffect(()=>{
        if(code=="") return;
        if(code.length<6) return;
        set_progress(true);
        ref.current.readOnly=true;
        ref.current.style.backgroundColor="whitesmoke";

        db.collection("codes")
        .where("code","==",code)
        .where("formation","==",ajouter)
        .get().then((snap)=>{
            if(snap.docs.length==0){
                ref.current.readOnly=false;
                ref.current.style.backgroundColor="white";
                set_progress(false);
                set_alerte("Code erronné");
            }else{

                db.collection("achats").add({
                    user:me?.key,
                    date:firebase.firestore.FieldValue.serverTimestamp(),
                    formation:ajouter,
                    code
                }).then(()=>{
                    ref.current.readOnly=false;
                    ref.current.style.backgroundColor="white";
                    set_progress(false);
                    set_alerte("Code valide");
                    click();
                }).catch((err)=>{
                    ref.current.readOnly=false;
                    ref.current.style.backgroundColor="white";
                    set_progress(false);
                    set_alerte(err.message);
                })
               
            }
        }).catch((err)=>{
            ref.current.readOnly=false;
            ref.current.style.backgroundColor="white";
            set_progress(false);
            set_alerte(err.message);
        })
        
    },[code]);
    return(
        <div className="unlock">
            <h3>Entrez votre code déblocage</h3>
            <div className="line">
                <input 
                type="text" 
                placeholder="------" 
                maxLength={6} 
                autoFocus={false}
                onChange={e=>set_code(e.target.value)}
                ref={ref}
                />
            </div>
           {progress==true &&  <div className="line">
                <CircularProgress size={15} id="progress" />
            </div>
            }

            {alerte!="" && <p className="alerte">{alerte}</p>}

            <h4>Comment obtenir le code ?</h4>
            <div className="line2">
                <p>Faites un transfert d'argent <strong>Western Union</strong> avec les informations suivantes:</p>
                <ol>
                    <li>Nom du bénéficiaire: <strong>BIDI KODJO FOGAN</strong></li>
                    <li>Pays du bénéficiaire: <strong>TOGO</strong></li>
                    <li>Contact du bénéficiaire: <strong>+228 92 95 08 03</strong></li>
                    <li>Montant à envoyer: <strong>{prix}</strong></li>
                </ol>
                <p>Une fois le payement effectué, envoyez-nous sur WhatsApp(
                    <strong>+228 92 95 08 03</strong>) le reçu à fin de recevoir votre code 
                    de déblocage.
                </p>
                
            </div>

            
        </div>
    )
}

export default Unlock;