import "../styles/submit_project.scss";
import no_data from "./img/no_data.jpg";

const SubmitProject=()=>{
    return(
        <div className="submit_project">
           <div className="form">
               <h3>Joindre une correction(.zip) de l'exercice</h3>
               <div className="line">
                    <input type="file" accept="application/zip" />
                    <button>Envoyez</button>
               </div>
           </div>

           <div className="projects">
               <h3>Vos anciennes soumissions</h3>
               <div className="no_data">
                   <img src={no_data} />
                   <p>Aucun projet soumis pour ce chapitre</p>
               </div>
           </div>
        </div>
    )
}
export default SubmitProject;