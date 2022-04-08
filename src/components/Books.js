import "../styles/books.scss";
import "../styles/books_mobile.scss";
import {books} from "./formations";
import module1 from "./img/3.jpg";
import module2 from "./img/2.jpg";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
const Books=()=>{

    const contact_whatsap=()=>{
        window.location.href=`https://wa.me/22892950803`;
    }
    return(
        <div className="books">
            <h1>Nos livres</h1>
            <div>
            {
                books.map((item,i)=>{

                    return(
                        <div key={i} onClick={contact_whatsap}>
                            {i==0 && <img src={module1} />}
                            {i==1 && <img src={module2} />}
                            <p>{item.cout}</p>
                        </div>  
                    )
                })
            }
            </div>

            <button onClick={contact_whatsap}>
                <WhatsAppIcon style={{fontSize:"3rem",color:"green"}} />
                <p>Contactez-nous sur WhatsApp pour avoir votre livre.</p>
                <p>+228 92 95 08 03</p>
            </button>
        </div>
    );
}
export default Books;