import "../styles/cartes.scss";
import "../styles/cartes_mobile.scss";
import {data} from "./formations";

const Cartes=()=>{
    return(
        <div className="cartes">

            <h1>Nos formations de bases</h1>

            {
                data?.map((item,i)=>{
                    return(
                        <div>
                                <img src={item.photo} />
                                <div>
                                    <h2>{item.titre}</h2>
                                    <div dangerouslySetInnerHTML={{__html:item.description}} />
                                    <p className="tech">
                                        <span>Technologies: </span>
                                        {item.tech}</p>
                                    <p className="delai"><span>Delai:</span> {item.delai}</p>
                                    <p className="prix"><span>Coût:</span> {item.cout}</p>
                                    {item.bonus !="" &&
                                    <p className="bonus"><span>Bonus: </span> {item.bonus}</p>}
                                    <button className="btn_start">Commencez la formation</button>
                                </div>
                                
                            </div>
                    )
                })
            }                    
        </div>
    );
}

export default Cartes;