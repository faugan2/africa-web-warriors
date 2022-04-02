import "../styles/chapter.scss";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
const Chapter=({item,click})=>{
    return(
        <div className="chapter" onClick={click}>
            <CheckCircleOutlineIcon className="cb progress" />
            <p>Chapter {item}</p>
        </div>
    );
}
export default Chapter;