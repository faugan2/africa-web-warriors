import "../styles/contact.scss";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
const Contact=()=>{
    return (
        <div className="contact">
            <h3>Nous contacter </h3>
            <div className="line">
                <label>Nom et Prénoms</label>
                <div>
                    <PermIdentityIcon />
                    <input type="text"  placeholder="Votre nom et prénoms" />
                </div>
            </div>

            <div className="line">
                <label>Email</label>
                <div>
                    <MailOutlineIcon />
                    <input type="email"  placeholder="Votre adresse email" />
                </div>
            </div>

            <div className="line">
                <label>Message</label>
                <div>
                    <textarea  placeholder="Votre message" />
                </div>
            </div>

            <div className="line">
                <button>Envoyez le message</button>
            </div>

        </div>
    )
}

export default Contact;