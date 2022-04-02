import "../styles/lesson_message.scss";
import NearMeIcon from '@material-ui/icons/NearMe';
import no_data from "./img/no_data.jpg";
const LessonMessage=()=>{
    return(
        <div className="lesson_message">
            
            <div className="messages">
                <div className="no_data">
                    <img src={no_data} />
                    <p>Aucune conversation n'est trouvée</p>
                </div>
            </div>

            <div className="input_zone">
                <textarea placeholder="Ecrire un message" />
                <button>
                    <NearMeIcon />
                </button>
            </div>
        </div>
    )
}
export default LessonMessage;