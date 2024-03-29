import "../styles/lesson.scss";
import "../styles/lesson_mobile.scss";
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

import Timer from "../components/Timer";

const Lesson=()=>{
    const history=useHistory();
    const [page,set_page]=useState(0);

    useEffect(()=>{
        /*const btns=document.querySelectorAll(".right>.top>button");
        for(var i=0; i<btns.length; i++){
            btns[i].classList.remove("active");
        }
        btns[page].classList.add("active");*/
    },[page]);

    const change_content=(index)=>{
        set_page(index);
    }

    const chapter_clicked=(module,index)=>{
       /*const id=`${module}${index}`;

        const el=document.querySelectorAll('.chapter');
        
        for(var i=0; i<el.length; i++){
            el[i].classList.remove("active");
        }
        document.querySelector("#"+id).classList.add("active");*/
        
    }

    const data=[
        {
            category:"Le langage python",
            chapters:[
                "Introduction",
                "Stockez des informations dans la mémoire de l'ordinateur : les variables",
                "Exécutez des actions conditionnelle: IF",
                "Repétez des actions avec des boucles: For et While",
                "Automatisez des tâches avec des fonctions",
                "Access au réseau",
                "Acceder au système de fichier",
            ]
        },
        {
            category:"Le langage C",
            chapters:[
                "Introduction",
                "Variables et type de variables",
                "Conditions, boucles avec le langage C",
                "Création de fonction",
                "Les tableaux et leurs usages",
                "Créez des outils d'automatisation avec le langage C"
            ]
        },
        {
            category:"Les technologies web",
            chapters:[
                "Introduction",
                "HTML & CSS",
                "Javascript",
                "Interaction avec le serveur web: PHP",
                "Les bases de données: MYSQL",
                "Déployement d'une application web sur un serveur"
            ]
        }
    ];

    const time = new Date(2022,4,2,23,59,0,0);

    return(
        <div className="lesson">
            <Nav />
            <div className="lesson_content" style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center",
            }}>
                <h1>La formation débute dans : </h1>
                <Timer expiryTimestamp={time} autoStart={true}  />
            </div>
        </div>
    )
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

                            data.map((item,i)=>{
                                const cat=item.category;
                                const chapters=item.chapters;
                                return(
                                    <div key={i} className={`module${i}`}>
                                        <h3 style={{textAlign:"center"}}>{cat}</h3>
                                        {
                                            chapters.map((item2,i2)=>{
                                                return(
                                                    <Chapter 
                                                    key={`${i}${i2}`} 
                                                    item={item2} 
                                                    id={`${i}${i2}`} 
                                                    click={chapter_clicked.bind(this,`${i}`,`${i2}`)} 
                                                    />
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                            /**/
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