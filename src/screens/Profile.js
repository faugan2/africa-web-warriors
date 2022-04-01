import "../styles/profile.scss";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { selectUser } from "../features/appSlice";
import { useSelector } from "react-redux";
import {useState,useEffect} from "react";
import EditIcon from '@material-ui/icons/Edit';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import Steps from "../components/Steps";

import helpdesk from "../components/img/helpdesk.png";
import security from "../components/img/security.jpg";
import networking from "../components/img/networking.png";
import cloud from "../components/img/cloud.png";
import ethical_hacking from "../components/img/ethical_hacking.jpeg";
import programmation from "../components/img/programmation.jpg";
import linux from "../components/img/linux.png";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CircularProgress from '@material-ui/core/CircularProgress';

import {auth,db,storage} from "../firebase_file";

const Profile=()=>{
    const user=useSelector(selectUser);

    const [me,set_me]=useState(null);
    const [progress,set_progress]=useState(false);

    useEffect(()=>{
        set_me(user);
    },[user])
    const change_photo=()=>{
      document.querySelector("#file").click();
    }
    const photo_changed=(e)=>{
        const files=e.target.files;
        if(files.length==0) return;
        set_progress(true);
        const file=files[0];
        const filename=file.name;
       
        const ref=storage.ref("images/"+filename);
        ref.put(file).then(()=>{
            ref.getDownloadURL().then((url)=>{
                db.collection("users").doc(me?.key).update({photo:url},{merge:true}).then(()=>{
                    set_progress(false);
                }).catch((err)=>{
                    set_progress(false);
                })
            }).catch((err)=>{
                set_progress(false);
            })
        }).catch((err)=>{
            alert("error"+err.message);
            set_progress(false);
        })
    }
    return(
        <div className="profile">
             <Nav  />
             <div className="profile_content">
                <div className="top">
                    <div className="line">
                        <div onClick={change_photo}>
                            <img src={me?.photo} />
                            <CameraAltIcon id="camera" />
                            <input type="file" 
                            onChange={photo_changed}
                            id="file" style={{display:"none"}} accept="image/*" />
                            {progress==true && <CircularProgress size={15} id="progress" />}
                        </div>
                        
                        <div>
                            <p>{me?.username}</p>
                            <button><EditIcon /></button>
                        </div>

                        {/*<Steps />*/}

                        
                    </div>
                    <div className="matieres">
                        <div className="line progress">
                            <img src={programmation} />
                            <p>Programmation</p>
                            <CheckCircleIcon className="status progress"/>
                        </div>
                        <div className="line progress">
                            <img src={linux} />
                            <p>Système</p>
                            <CheckCircleIcon className="status progress"/>
                        </div>
                        <div className="line progress">
                            <img src={helpdesk} />
                            <p>Help-Desk</p>
                            <CheckCircleIcon className="status progress"/>
                        </div>
                        <div className="line progress">
                            <img src={security} />
                            <p>Security</p>
                            <CheckCircleIcon className="status progress"/>
                        </div>
                        <div className="line progress">
                            <img src={networking} />
                            <p>Networking</p>
                            <CheckCircleIcon className="status progress"/>
                        </div>
                        <div className="line progress">
                            <img src={cloud} />
                            <p>Cloud</p>
                            <CheckCircleIcon className="status progress"/>
                        </div>
                        <div className="line progress">
                            <img src={ethical_hacking} />
                            <p>Ethical Hacking</p>
                            <CheckCircleIcon className="status progress"/>
                        </div>
                    </div>
                </div>
                <Footer />
             </div>
             
        </div>
    );
}
export default Profile;