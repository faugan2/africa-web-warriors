import "../styles/formations_list.scss";
import "../styles/formations_list_mobile.scss";
import {data} from "./formations";

const FormationsList=()=>{
    return(
        <div className="formations_list">
            {
                data?.map((item,i)=>{
                    return(
                        <div key={i} className="line">
                            <h2>{item.titre}</h2>
                            <div dangerouslySetInnerHTML={{__html:item.description}} />
                            <p className="tech">
                                <span>Techs: </span>{item.tech}</p>
                            <p className="delai">
                                <span>Delai: </span>
                                {item.delai}</p>
                            <p className="prix">
                                <span>Coût: </span>
                                {item.cout}
                            </p>
                            {item.bonus!=undefined && <p className="bonus">
                                <span>Bonus: </span>
                                {item.bonus}
                                </p>}
                            <button>Ajouter</button>
                            
                        </div>
                    )
                })
            }
        </div>
    );
}

export default FormationsList;