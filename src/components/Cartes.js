import "../styles/cartes.scss";
import "../styles/cartes_mobile.scss";
import {data} from "./formations";
import {useSelector,useDispatch} from "react-redux";
import {selectUser,selectAchats,setAjouter} from "../features/appSlice";
import {useState,useEffect} from "react";
import Modal from "./Modal";
import Unlock from "./Unlock";
import Login from "./Login";
import {useHistory} from "react-router-dom";
import {auth} from "../firebase_file";

const Cartes=()=>{
    const me=useSelector(selectUser);
    const achats=useSelector(selectAchats);

    const dispatch=useDispatch();
    const history=useHistory();

    const [mes_achats,set_mes_achats]=useState(null);
    const [open,set_open]=useState(false);
    const [open_login,set_open_login]=useState(false);

    const close_login=()=>{
        set_open_login(false);
    }

    const close_modal=()=>{
        set_open(false);
    }

    useEffect(()=>{
        const res=achats?.filter((item,i)=>{
            return item.user==me?.key
        });
        set_mes_achats(achats);
    },[achats])

    const detail_formation=(b,item)=>{
        if(auth.currentUser==null){
            set_open_login(true);
            return;
        }
        const id=item.id;
        dispatch(setAjouter(id));
        if(b==""){
            set_open(true);
            return;
        }
        history.push("/lesson");


        
    }
    return(
        <div className="cartes">

        


            {
                data?.map((item,i)=>{
                    let b="";
                    const res=mes_achats?.filter((item2)=>{
                        return item2.formation==item.id;
                    })
                    if(res!=undefined){
                        if(res.length>0){
                            b="buy"
                         }
                    }
                  
                   //console.log("the result is ",mes_achats);
                    return(
                        <div>
                                <img src={item.photo} />
                                <div>
                                    <h2>{item.titre}</h2>
                                    <div dangerouslySetInnerHTML={{__html:item.description.substring(0,100)+" ..."}} />
                                    <div className="info">
                                        <p className="tech">
                                            <span>Technologies: </span>
                                            {item.tech}</p>
                                        <p className="delai"><span>Delai:</span> {item.delai}</p>
                                        <p className="prix"><span>Coût:</span> {item.cout}</p>
                                        {item.bonus !="" &&
                                        <p className="bonus"><span>Bonus: </span> {item.bonus}</p>}
                                        <button 
                                            className={`btn_start ${b}`} 
                                            onClick={detail_formation.bind(this,b,item)}
                                        >
                                        Commencez la formation
                                        </button>
                                    </div>
                                    
                                </div>
                            </div>
                    )
                })
        
        }

        {open==true && <Modal click={close_modal} content={<Unlock click={close_modal}/>} />}   
        {open_login==true && <Modal click={close_login} content={<Login  click={close_login}/>} />}                 
        </div>

    );
}

export default Cartes;