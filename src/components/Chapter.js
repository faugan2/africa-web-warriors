import "../styles/chapter.scss";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
const Chapter=({item,click,id})=>{
    return(
        <div className="chapter" onClick={click} id={id}>
            <CheckCircleOutlineIcon className="cb progress" />
            <p>Chapter {item}</p>
        </div>
    );
}
export default Chapter;