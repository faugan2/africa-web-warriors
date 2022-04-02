import "../styles/chapter.scss";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
const Chapter=({item})=>{
    return(
        <div className="chapter">
            <CheckCircleOutlineIcon className="cb progress" />
            <p>Chapter {item}</p>
        </div>
    );
}
export default Chapter;