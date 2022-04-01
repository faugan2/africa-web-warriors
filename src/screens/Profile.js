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
const Profile=()=>{
    const user=useSelector(selectUser);

    const [me,set_me]=useState(null);

    useEffect(()=>{
        set_me(user);
    },[user])
    return(
        <div className="profile">
             <Nav  />
             <div className="profile_content">
                <div className="top">
                    <div className="line">
                        <div>
                            <img src={me?.photo} />
                            <CameraAltIcon id="camera" />
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