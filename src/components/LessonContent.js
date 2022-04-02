import ReactPlayer from 'react-player/lazy'
import "../styles/lesson_content.scss";
import media from "./video/6.mp4";

const LessonContent=()=>{
    return(
        <div className="chapter_content">

             <video src={media} controls ></video>
        </div>
    )
}

export default LessonContent;