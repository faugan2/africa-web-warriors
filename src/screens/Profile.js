import "../styles/profile.scss";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { selectUser } from "../features/appSlice";
import { useSelector } from "react-redux";
import {useState,useEffect} from "react";
import EditIcon from '@material-ui/icons/Edit';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import Steps from "../components/Steps";

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

                        <Steps />
                    </div>
                </div>
                <Footer />
             </div>
             
        </div>
    );
}
export default Profile;