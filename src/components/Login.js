import "../styles/login.scss";
import GoogleIcon from "./GoogleIcon";
import {auth, db } from "../firebase_file";
import firebase from "firebase";
import CircularProgress from '@material-ui/core/CircularProgress';
import {useState,useEffect} from "react";
import {useHistory} from "react-router-dom";

const Login=({click})=>{
    const [progress,set_progress]=useState(false);
    const [alerte,set_alerte]=useState("");
    const history=useHistory();
    const register=async (e)=>{
        var provider = new firebase.auth.GoogleAuthProvider();
        const btn=e.target;
        set_progress(true);
        btn.disabled=true;
        set_alerte("");
        try{
            const res=await auth.signInWithPopup(provider);
           
            const email=res.user.email;
            const get=await db.collection("users").where("email","==",email).get();
            if(get.docs.length>0){
                set_alerte("Cette adresse email existe déjà")
                await auth.currentUser.delete();
                await auth.signOut();
                
                btn.disabled=false;
                btn.style.opacity="1";
                set_progress(false);
            }else{

                await db.collection("users").add({
                    email,
                    photo:res.user.photoURL,
                    date:firebase.firestore.FieldValue.serverTimestamp(),
                    username:res.user.displayName,
                })
                
                btn.disabled=false;
                history.replace("/profile")
            }
        }catch(err){
            btn.disabled=false;
            set_alerte(err.message)
            set_progress(false);
        }

    }

    const login=async (e)=>{
        set_progress(true);
        set_alerte("");
        const btn=e.target;
        btn.disabled=true;
        var provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider).then(async (res)=>{
            const email=res.user.email;
            const uid=res.user.uid;
            const get=await db.collection("users").where("email","==",email).get();
            btn.disabled=false;
            
           
            if(get.docs.length>0){
                await default_buy();

               history.replace("/profile");
            }else{
                set_alerte("Cette adresse email n'existe pas");
                await auth.currentUser.delete();
                await auth.signOut();
                set_progress(false);
                //history.replace("/");
                
            }
            
        }).catch((err)=>{
            btn.disabled=false;
           
            set_progress(false);
            set_alerte(err.message)
        })
    }

    const default_buy=async ()=>{
        const email=auth?.currentUser.email;
        const res=await db.collection("users").where("email","==",email).get();
        const key=res.docs[0].id;
        // default course id=5
        const res2=await db.collection("achats").where("user","==",key).get();
        const all_courses=[];
        res2.docs.map((doc)=>{
            const formation=doc.data().formation;
            all_courses.push(parseInt(formation));
        })
        if(all_courses.indexOf(5)<0){
            await db.collection("achats").add({
                user:key,
                date:firebase.firestore.FieldValue.serverTimestamp(),
                code:"123456",
                formation:"5"
            })
        }

        if(all_courses.indexOf(6)<0){
            await db.collection("achats").add({
                user:key,
                date:firebase.firestore.FieldValue.serverTimestamp(),
                code:"123456",
                formation:"6"
            })
        }
    }
    return(
        <div className="login">
            <button onClick={login}>
                <GoogleIcon />
                Connectez-vous avec Google</button>

                {progress==true && <CircularProgress size={15} style={{margin:"0",padding:"0",marginTop:"0.5rem"}} />}
                {alerte!="" && <p>{alerte}</p>}
            <div>
                <p>Pas encore inscrit ?</p>
                <button onClick={register}>
                    <GoogleIcon />
                    S'inscrire avec Google</button>
            </div>
            
        </div>
    )
}
export default Login;