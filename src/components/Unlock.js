import "../styles/unlock.scss";
import paypal from "./img/paypal.jpg";
import carte_visa from "./img/carte_visa.png";
import tmoney from "./img/tmoney.png";
import flooz from "./img/flooz.jpg";

const Unlock=()=>{
    return(
        <div className="unlock">
            <h3>Entrez votre code déblocage</h3>
            <div className="line">
                <input type="text" placeholder="------" />
            </div>

            <h4>Comment obtenir le code ?</h4>
            <div className="line">
                <p>
                    Vous devez payer les frais de la formation à partir d'un des moyens ci-dessous. 
                    Le code vous sera communiqué ou envoyé par mail.<br /><br />
                </p>
            </div>

            <div className="moyens international">
                <button>
                    <img src={carte_visa} />
                </button>
            </div>
            <h4>Pour ceux qui sont au Togo:</h4>

            <div className="moyens">
                <button>
                    <img src={tmoney} />
                </button>
                <button>
                    <img src={flooz} />
                </button>
            </div>
        </div>
    )
}

export default Unlock;