import "../styles/nav.scss";
import logo from "./img/logo.png";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import {Link} from "react-router-dom"
import SchoolIcon from '@material-ui/icons/School';
import VpnLockIcon from '@material-ui/icons/VpnLock';
import AppsIcon from '@material-ui/icons/Apps';
import {useHistory} from "react-router-dom";
import Modal from "./Modal";
import {useState,useEffect} from "react";
import Login from "./Login";

const Nav=({index})=>{
    const history=useHistory();

    const [open,set_open]=useState(false);

    const close_modal=()=>{
        set_open(false);
    }
    const go_to_home=()=>{
        history.push("/home");
    }
    return(
        <div className="nav">
            <div className="logo">
                <img src={logo} onClick={go_to_home}/>
            </div>
            <div className="menu">
                <Link to="/academy" className={`${index==1? "active":""}`}>
                    <SchoolIcon style={{color:"gray"}}/>
                    <a>ACADEMIE</a>
                </Link>

                <Link to="/security" className={`${index==2? "active":""}`}>
                    <VpnLockIcon style={{color:"gray"}}/>
                    <a>SECURITE-RESEAU</a>
                </Link>

                <Link to="/softwares" className={`${index==3? "active":""}`}>
                    <AppsIcon style={{color:"gray"}}/>
                    <a>LOGICIELS</a>
                </Link>
            </div>
            <div className="user">
                <button onClick={e=>{
                    set_open(true);
                }}>
                    <PermIdentityIcon style={{fontSize:"2.5rem"}} />
                </button>
            </div>

            {open==true && <Modal click={close_modal} content={<Login />} />}
        </div>
    )
}
export default Nav;