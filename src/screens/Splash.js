import logo from "../components/img/logo.png";
import "../styles/splash.scss";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Splash=()=>{
    const history=useHistory();

    useEffect(()=>{
        setTimeout(()=>{
            history.push("/home")
        },3000)
    },[])
    return(
        <div className="splash">
        <img src={logo} />

        </div>
    )
}

export default Splash;