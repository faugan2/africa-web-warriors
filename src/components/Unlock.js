import "../styles/unlock.scss";
import paypal from "./img/paypal.jpg";
import carte_visa from "./img/carte_visa.png";
import tmoney from "./img/tmoney.png";
import flooz from "./img/flooz.jpg";
import {useState,useEffect,useRef} from "react";
import {auth,db,} from "../firebase_file";
import CircularProgress from '@material-ui/core/CircularProgress';
import {selectUser} from "../features/appSlice";
import {useSelector} from "react-redux";

const Unlock=({click})=>{

    const me=useSelector(selectUser);

    const [code,set_code]=useState("");
    const [progress,set_progress]=useState(false);
    const [alerte,set_alerte]=useState("");
    const ref=useRef(null);

    useEffect(()=>{
        if(code=="") return;
        if(code.length<6) return;
        set_progress(true);
        ref.current.readOnly=true;
        ref.current.style.backgroundColor="whitesmoke";

        db.collection("codes").where("code","==",code).get().then((snap)=>{
            if(snap.docs.length==0){
                ref.current.readOnly=false;
                ref.current.style.backgroundColor="white";
                set_progress(false);
                set_alerte("Code erronné");
            }else{

               db.collection("users").doc(me?.key).update({code},{merge:true}).then(()=>{
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
                autoFocus
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
            <div className="line">
                <p>
                    Vous devez payer les frais de la formation à partir d'un des moyens ci-dessous. 
                    Le code vous sera communiqué ou envoyé par mail.<br /><br />
                </p>
            </div>

            <div className="moyens international">
                <button>
                    <img src={carte_visa} />
                </button>
            </div>
            <h4>Pour ceux qui sont au Togo:</h4>

            <div className="moyens">
                <button>
                    <img src={tmoney} />
                </button>
                <button>
                    <img src={flooz} />
                </button>
            </div>
        </div>
    )
}

export default Unlock;