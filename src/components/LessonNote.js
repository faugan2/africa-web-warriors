import "../styles/lesson_note.scss";
import no_data from "./img/no_data.jpg";
import FolderIcon from '@material-ui/icons/Folder';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const LessonNote=()=>{
    return(
        <div className="lesson_note">
            <div className="no_data">
                <img src={no_data} />
                <p>Aucune note n'est trouvée</p>
            </div>

            <div className="floating_btn">
                <button>
                    <FolderIcon />
                </button>
                <button>
                    <WhatsAppIcon />
                </button>
            </div>
        </div>
    )
}
export default LessonNote;