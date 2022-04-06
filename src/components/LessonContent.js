import ReactPlayer from 'react-player/lazy'
import "../styles/lesson_content.scss";
import media from "./video/soon.mp4";

const LessonContent=()=>{
    return(
        <div className="chapter_content">

             <video src={media} controls autoPlay={false} ></video>
        </div>
    )
}

export default LessonContent;