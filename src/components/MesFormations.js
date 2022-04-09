import "../styles/mes_formations.scss";
import "../styles/mes_formations_mobile.scss";
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import no_data from "./img/no_data.jpg";
import Modal from "./Modal";
import FormationsList from "./FormationsList";
import {useState,useEffect} from "react";
import Unlock from "./Unlock";
import {useSelector} from "react-redux";
import {selectAchats,selectUser} from "../features/appSlice";
import {data as formations} from "./formations";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
const MesFormations=({click})=>{
    const achats=useSelector(selectAchats);
    const me=useSelector(selectUser);

    const [open,set_open]=useState(false);
    const [open_code,set_open_code]=useState(false);
    const [data,set_data]=useState(null);

    useEffect(()=>{
        if(achats==null) return;
        const res=achats.map((item)=>{
            const achat=item.formation;
            const formation=formations.filter((item2)=>{
                return item2.id==achat;
            })

            if(item.user==me?.key){
                return {...item,formation:formation[0]}
            }else{
                return null;
            }
        })

        const res2=res.filter((item)=>{
            return item!=null;
        })
       /// console.log("all data is ",res2);
        set_data(res2);
    },[achats])
    const close_modal=()=>{
        set_open(false);
    }
    const close_modal_code=()=>{
        set_open_code(false);
    }
    return(
        <div className="mes_formations">
            <h1>Mes formations</h1>
            <div className="top">
                <div className="line">
                    <SearchIcon style={{fontSize:"1.2rem"}} />
                    <input type="text" placeholder="Rechercher" />
                </div>
                <button onClick={e=>set_open(true)}>
                    <AddIcon style={{fontSize:"1.2rem"}} />
                    <span>Ajouter une formation</span></button>
            </div>

            <div className="content">
                {(data==null || data?.length==0) && <div className="no_data">
                    <img src={no_data} />
                    <p>Vous n'avez ajouté aucune formation. 
                    <br />Cliquez sur le button ci-dessous pour ajouter une formation.</p>
                    <button onClick={e=>set_open(true)}>Ajouter une formation</button>
                </div>
                }

                {
                    (data!=null && data.length>0) && 
                    <div className="lines">
                        {
                            data?.map((item,i)=>{
                                return(
                                    <div key={item.key} className="line" onClick={click.bind(this,item.formation.id)}>
                                        <img src={item.formation.photo} />
                                        <div>
                                            <h2>{item.formation.titre}</h2>
                                            <p>
                                                {item.formation.tech}
                                            </p>
                                            <p>{
                                                item.formation.cout
                                            }</p>
                                            <p>
                                                {item.formation.delai}
                                            </p>
                                        </div>
                                       
                                       
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </div>
            

            {open==true && <Modal click={close_modal} content={<FormationsList click={close_modal} 
            open_code={()=>{set_open_code(true)}}
            />} />}
            {open_code==true && <Modal click={close_modal_code} content={<Unlock click={close_modal_code} />} />}
        </div>
    );
}

export default MesFormations;