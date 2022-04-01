import logo from "../components/img/logo.png";
import "../styles/splash.scss";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {auth,db} from "../firebase_file";
import { useDispatch } from "react-redux";
import {setUser} from "../features/appSlice";

const Splash=()=>{
    const history=useHistory();
    const dispatch=useDispatch();

    useEffect(()=>{
        if(auth?.currentUser==null){
            alert("ok null");
            setTimeout(()=>{
                history.push("/home")
            },2000)
        }else{
            db.collection("users").where("email","==",auth?.currentUser?.email).get().then((snap)=>{
                const res=snap.docs[0];
                const data=res.data();
                const key=res.id;
                data.key=key;
                dispatch(setUser(data));
                history.push("/home")
            }).catch((err)=>{
                history.push("/home")
            });
        }
        
    },[auth])
    return(
        <div className="splash">
        <img src={logo} />

        </div>
    )
}

export default Splash;