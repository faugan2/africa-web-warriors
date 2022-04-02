import "../styles/lesson_note.scss";
import no_data from "./img/no_data.jpg";

const LessonNote=()=>{
    return(
        <div className="lesson_note">
            <div className="no_data">
                <img src={no_data} />
                <p>Aucune note n'est trouvée</p>
            </div>
        </div>
    )
}
export default LessonNote;