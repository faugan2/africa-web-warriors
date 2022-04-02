import "../styles/lesson_task.scss";
import no_data from "./img/no_data.jpg";

const LessonTask=()=>{
    return(
        <div className="lesson_task">
            <div className="no_data">
                <img src={no_data} />
                <p>Aucun exercie n'est lié à ce chapitre</p>
            </div>
        </div>
    )
}

export default LessonTask;