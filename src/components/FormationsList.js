import "../styles/formations_list.scss";
import "../styles/formations_list_mobile.scss";
import {data} from "./formations";
import {useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import { setAjouter,selectAchats,selectUser } from "../features/appSlice";

const FormationsList=({click,open_code})=>{
    const dispatch=useDispatch();

    const me=useSelector(selectUser);
    const achats=useSelector(selectAchats);

    const [mes_achats,set_mes_achats]=useState(null);

    useEffect(()=>{
        const res=achats.filter((item)=>{
            return item.user==me?.key;
        })
        set_mes_achats(res);

    },[achats]);

    const add_formation=(id)=>{
        dispatch(setAjouter(id)); 
        click();   
        open_code();
    }
    return(
        <div className="formations_list">
            {
                data?.map((item,i)=>{
                    
                    const res=mes_achats?.filter((item2)=>{
                        return item2.formation==item.id;
                    })
                    if(res?.length>0) return null;

                    return(
                        <div key={item.id} className="line">
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
                            <button onClick={add_formation.bind(this,item.id)}>Ajouter</button>
                            
                        </div>
                    )
                })
            }
        </div>
    );
}

export default FormationsList;