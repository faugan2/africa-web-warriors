import "../styles/lesson.scss";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import {useHistory} from "react-router-dom";

const Lesson=()=>{
    const history=useHistory();

    return(
        <div className="lesson">
            <Nav />
            <div className="lesson_content">
                <button onClick={e=>{
                    history.goBack();
                }}>back</button>
            </div>
        </div>
    );
}
export default Lesson;