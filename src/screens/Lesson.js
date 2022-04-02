import "../styles/lesson.scss";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import {useHistory} from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Chapter from "../components/Chapter";
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import {useState,useEffect} from "react";
import LessonContent from "../components/LessonContent";
import LessonQuiz from "../components/LessonQuiz";
import LessonTask from "../components/LessonTask";
import LessonNote from "../components/LessonNote";

const Lesson=()=>{
    const history=useHistory();
    const [page,set_page]=useState(0);

    useEffect(()=>{
        const btns=document.querySelectorAll(".right>.top>button");
        for(var i=0; i<btns.length; i++){
            btns[i].classList.remove("active");
        }
        btns[page].classList.add("active");
    },[page]);

    const change_content=(index)=>{
        set_page(index);
    }
    return(
        <div className="lesson">
            <Nav />
            <div className="lesson_content">
                {/**/}

                <div className="left">
                    <div className="top">
                        <button onClick={e=>{
                        history.goBack();
                        }}>
                            <ArrowBackIcon />
                        </button>
                        <h4>Programmation</h4>
                    </div>
                    <div className="body">
                        {
                            [1,2,3,4,5,6,7,8,9,10].map((item,i)=>{
                                return(
                                    <Chapter key={i} item={item} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="right">
                    <div className="top">
                        <button onClick={change_content.bind(this,0)}>
                            <VideoLibraryIcon />
                            <p>Contenu</p>
                        </button>
                        <button onClick={change_content.bind(this,1)}>
                            <FormatListBulletedIcon />
                            <p>QUIZ</p>
                        </button>
                        <button onClick={change_content.bind(this,2)}>
                            <AssignmentIndIcon />
                            <p>Exercice</p>
                        </button>
                    </div>
                    <div className="body">
                        {page==0 && <LessonContent />}
                        {page==1 && <LessonQuiz />}
                        {page==2 && <LessonTask />}

                        <LessonNote />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Lesson;