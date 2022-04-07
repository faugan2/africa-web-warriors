import "../styles/profile.scss";
import "../styles/profile_mobile.scss";
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
import Modal from "../components/Modal";
import EditUsername from "../components/EditUsername";
import {useHistory} from "react-router-dom";

import Unlock from "../components/Unlock";
import MesFormations from "../components/MesFormations";


const Profile=()=>{
    const user=useSelector(selectUser);
    const history=useHistory();

    const [me,set_me]=useState(null);
    const [progress,set_progress]=useState(false);
    const [open,set_open]=useState(false);
    const [open_unlock,set_open_unlock]=useState(false);

    

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

    const close_modal=()=>{
        set_open(false);
    }

    const close_unlock=()=>{
        set_open_unlock(false);
    }

    const go_to_lesson=(index)=>{
       if(me?.code==undefined){
        set_open_unlock(true);
       }else{
        if(index==0){
            history.push("/lesson");
        }
        
       }
        
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
                            <button onClick={e=>{
                                set_open(true);
                            }}><EditIcon /></button>
                        </div>

                        {/*me?.code==undefined && <div className="zone_deblocage">
                            <button onClick={e=>{
                                set_open_unlock(true);
                            }}>Debloquez les cours</button>
                        </div>*/
                        }

                    {/*me?.code!=undefined && <div className="zone_deblocage ">
                            <button className="code">
                                <CheckCircleIcon />
                                Compte Actif
                            </button>
                        </div>*/
                        }


                    </div>

                   <MesFormations />

                    <div className="matieres" style={{display:"none"}}>
                        <div className="line progress" onClick={go_to_lesson.bind(this,0)}>
                            <img src={programmation} />
                            <p>Programmation</p>
                            <CheckCircleIcon className={`status progress ${me?.code!=undefined ? "start":""}`}/>
                        </div>
                        <div className="line progress" onClick={go_to_lesson.bind(this,1)}>
                            <img src={linux} />
                            <p>Système</p>
                            <CheckCircleIcon className="status progress"/>
                        </div>
                        <div className="line progress" onClick={go_to_lesson.bind(this,2)}>
                            <img src={helpdesk} />
                            <p>Help-Desk</p>
                            <CheckCircleIcon className="status progress"/>
                        </div>
                        <div className="line progress" onClick={go_to_lesson.bind(this,3)}>
                            <img src={security} />
                            <p>Security</p>
                            <CheckCircleIcon className="status progress"/>
                        </div>
                        <div className="line progress" onClick={go_to_lesson.bind(this,4)}>
                            <img src={networking} />
                            <p>Networking</p>
                            <CheckCircleIcon className="status progress"/>
                        </div>
                        <div className="line progress" onClick={go_to_lesson.bind(this,5)}>
                            <img src={cloud} />
                            <p>Cloud</p>
                            <CheckCircleIcon className="status progress"/>
                        </div>
                        <div className="line progress" onClick={go_to_lesson.bind(this,6)}>
                            <img src={ethical_hacking} />
                            <p>Ethical Hacking</p>
                            <CheckCircleIcon className="status progress"/>
                        </div>
                    </div>

                    
                </div>
                <Footer />
             </div>
             
             {open==true && <Modal content={<EditUsername click={close_modal} />} click={close_modal} />}
             {open_unlock==true && <Modal content={<Unlock click={close_unlock} />} click={close_unlock} />}
        </div>
    );
}
export default Profile;