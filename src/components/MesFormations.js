import "../styles/mes_formations.scss";
import "../styles/mes_formations_mobile.scss";
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import no_data from "./img/no_data.jpg";
import Modal from "./Modal";
import FormationsList from "./FormationsList";
import {useState,useEffect} from "react";

const MesFormations=()=>{
    const [open,set_open]=useState(false);
    const [data,set_data]=useState([1,2,89,5,36]);
    const close_modal=()=>{
        set_open(false);
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
                    Ajouter une formation</button>
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
                    <di>
                        {
                            data.map((item,i)=>{
                                return(
                                    <div key={i}>
                                        {item}
                                    </div>
                                )
                            })
                        }
                    </di>
                }
            </div>
            

            {open==true && <Modal click={close_modal} content={<FormationsList />} />}
        </div>
    );
}

export default MesFormations;