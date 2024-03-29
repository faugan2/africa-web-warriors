import logo from "../components/img/logo4.jpeg";
import "../styles/splash.scss";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {auth,db} from "../firebase_file";
import { useDispatch } from "react-redux";
import {setUser,setLoaded,setAchats} from "../features/appSlice";

const Splash=()=>{
    const history=useHistory();
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(setLoaded(true))
        auth.onAuthStateChanged((user)=>{
            if(user==null){
                dispatch(setUser(null));
                history.push("/home")
            }else{

                db.collection("achats").onSnapshot((snap)=>{
                    const achats=[];
                    snap.docs.map((doc)=>{
                        const key=doc.id;
                        const data=doc.data();
                        data.key=key;
                        achats.push(data);
                    })
                    dispatch(setAchats(achats));

                })
                
                const email=user.email;
                db.collection("users").where("email","==",email).onSnapshot((snap)=>{
                    const res=snap.docs[0];
                    const data=res.data();
                    const key=res.id;
                    data.key=key;
                    dispatch(setUser(data));

                    history.push("/profile")
                   
                })

               
                
            }
        })
        
        
    },[])
    return(
        <div className="splash">
        <img src={logo} />

        </div>
    )
}

export default Splash;