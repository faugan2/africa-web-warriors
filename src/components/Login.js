import "../styles/login.scss";
import GoogleIcon from "./GoogleIcon";

const Login=()=>{
    return(
        <div className="login">
            <button>
                <GoogleIcon />
                Connectez-vous avec Google</button>
            <div>
                <p>Pas encore inscrit ?</p>
                <button>
                    <GoogleIcon />
                    S'inscrire avec Google</button>
            </div>
            
        </div>
    )
}
export default Login;