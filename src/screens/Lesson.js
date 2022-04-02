import "../styles/lesson.scss";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import {useHistory} from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Chapter from "../components/Chapter";

const Lesson=()=>{
    const history=useHistory();

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
                        <button>Contenu</button>
                        <button>QUIZ</button>
                        <button>Exercice</button>
                    </div>
                    <div className="body">body</div>
                </div>
            </div>
        </div>
    );
}
export default Lesson;