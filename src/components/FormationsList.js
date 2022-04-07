import "../styles/formations_list.scss";
import "../styles/formations_list_mobile.scss";
import {data} from "./formations";
import {useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import { setAjouter } from "../features/appSlice";

const FormationsList=({click,open_code})=>{
    const dispatch=useDispatch();

    const add_formation=(id)=>{
        dispatch(setAjouter(id)); 
        click();   
        open_code();
    }
    return(
        <div className="formations_list">
            {
                data?.map((item,i)=>{
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