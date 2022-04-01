import "../styles/edit_username.scss";
import {useSelector} from "react-redux";
import {selectUser} from "../features/appSlice";
import {useState,useEffect} from "react";
import {db} from "../firebase_file";

const EditUsername=({click})=>{
    const me=useSelector(selectUser);

    const [name,set_name]=useState("");
    useEffect(()=>{
        set_name(me?.username);
    },[me])
    const update=(e)=>{
        const btn=e.target;
        if(name=="") return;
        btn.disabled=true;
        btn.innerHTML="Patientez...";

        db.collection("users").doc(me?.key).update({username:name},{merge:true}).then(()=>{
            click();
        }).catch((err)=>{
            btn.disabled=false;
            btn.innerHTML="Modifier";
        })
    }
    return(
        <div className="edit_username">
            <div className="line">
                <input type="text" value={name} onChange={e=>set_name(e.target.value)} />
            </div>
            <div className="line" onClick={update}>
                <button>Modifier</button>
            </div>
        </div>
    )
}
export default EditUsername;