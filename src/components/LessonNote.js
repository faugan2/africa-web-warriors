import "../styles/lesson_note.scss";
import no_data from "./img/no_data.jpg";
import FolderIcon from '@material-ui/icons/Folder';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Modal from "./Modal";
import SubmitProject from "./SubmitProject";
import LessonMessage from "./LessonMessage";

import {useState,useEffect} from "react";

const LessonNote=()=>{

    const [open_submit_project,set_open_submit_project]=useState(false);
    const [open_message,set_open_message]=useState(false);

    const close_message=()=>{
        set_open_message(false);
    }
    const close_submit_project=()=>{
        set_open_submit_project(false);
    }
    const submit_project=()=>{
        set_open_submit_project(true);
    }
    const send_message=()=>{
        set_open_message(true);
    }
    return(
        <div className="lesson_note">
            <div className="no_data">
                <img src={no_data} />
                <p>Aucune note n'est trouvée</p>
            </div>

            <div className="floating_btn">
                <button onClick={submit_project} title="Aller à la discussion">
                    <FolderIcon />
                </button>
                <button onClick={send_message} title="Soumettre mon exercice">
                    <WhatsAppIcon />
                </button>
            </div>

            {open_submit_project==true && <Modal 
                click={close_submit_project} 
                content={<SubmitProject />} 
                />
            }

            {
                open_message==true && 
                <Modal 
                    click={close_message}
                    content={<LessonMessage />}
                />
            }
        </div>
    )
}
export default LessonNote;