import "../styles/cartes.scss";
import "../styles/cartes_mobile.scss";
import appli_web from "./img/appli_web.png";
import appli_mobile from "./img/appli_mobile.png";
import appli_desktop from "./img/appli_desktop.png";
import ethical_hacking from "./img/ethical_hacking.jpeg";
const Cartes=()=>{
    return(
        <div className="cartes">

            <h1>Nos formations de bases</h1>
                            <div>
                                <img src={appli_web} />
                                <div>
                                    <h2>Création des applications web</h2>
                                    <p>
                                    Vous souhaitez maîtriser la programmation web et devenir un as du langage informatique ? 
                                    <br /><br />
                                    Obtenez votre qualification d'intégrateur web pour travailler en freelance, 
                                    en agence ou en entreprise. <br /><br />
                                    Réalisez votre formation à distance, à votre rythme. 
                                    Vous serez accompagné par nos formateurs experts
                                    </p>
                                    <p className="tech">
                                        <span>Technologies: </span>
                                        HTML, CSS, Javascript, Firebase, ReactJS</p>
                                    <p className="delai"><span>Delai:</span> 2 mois</p>
                                    <p className="prix"><span>Coût:</span> 50 000 CFA</p>
                                    <p className="bonus"><span>Bonus: </span> 2 livres offert</p>
                                    <button className="btn_start">Commencez la formation</button>
                                </div>
                                
                            </div>

                            <div>
                                <img src={appli_mobile} />
                                <div>
                                    <h2>Création des applications mobile</h2>
                                    <p>
                                    Avec l’essor des nouvelles technologies et la multiplication des smartphones, 
                                    des techniciens du digital naissent.
                                    <br /><br />
                                     Le métier de développeur d’applications mobiles
                                     participe au boom numérique : désormais les entreprises ont besoin d’artisans du digital. 
                                     <br /><br />
                                     Le développeur a pour coeur de métier de créer des applications, d’adapter des sites web sur
                                      mobile ou bien d’en optimiser des existantes. Il va développer et concevoir.
                                    </p>
                                    <p className="tech">
                                        <span>Technologies: </span>
                                        React Native</p>
                                    <p className="delai">
                                    <span>Delai: </span>
                                     1 mois</p>
                                    <p className="prix"><span>Coût: </span>30 000 CFA</p>
                                    <button className="btn_start">Commencez la formation</button>
                                </div>
                                
                            </div>

                            <div>
                                <img src={appli_desktop} />
                                <div>
                                    <h2>Création des applictions desktop</h2>
                                    <p>
                                    Le développement d’applications desktop t’intéresse et tu souhaites en 
                                    apprendre davantage ? Pour ta culture personnelle, par curiosité ou bien 
                                    tout simplement pour des raisons professionnelles ?<br /><br />
                                    En tant que développeur, tu souhaites créer une petite application mais tu ne veux pas 
                                    apprendre un langage lourd et souhaites réutiliser tes connaissances HTML/CSS/JS ?<br /><br />

                                    Tu as entendu parler d’un outil permettant de simplement créer une appli cross-plateforme 
                                    facilement nommée Electron ?<br/>
                                    Et bien bonne nouvelle, tu as trouvé LA formation qu’il te faut !
                                    </p>
                                    <p className="tech">
                                        <span>Technologies: </span>
                                        Electron JS</p>
                                    <p className="delai">
                                        <span>Delai: </span>
                                        1 mois</p>
                                    <p className="prix">
                                        <span>Coût: </span>
                                        30 000CFA</p>
                                    <button className="btn_start">Commencez la formation</button>
                                </div>
                               
                            </div>


                            <div>
                                <img src={ethical_hacking} />
                                <div>
                                    <h2>cybersécurité (Hacking Ethique)</h2>
                                    <p>
                                    Bienvenue dans ce cours vidéo sur le hacking éthique !<br /><br />

À travers celui-ci, vous allez apprendre beaucoup de concepts fondamentaux en sécurité informatique.<br /><br />

Le cours se veut à la fois pratique et interactif, vous aurez de quoi vous entraîner sur vos systèmes sans rien casser et vous pourrez poser vos questions à tout moment si vous en avez.
<br /><br />
Les cyberattaques les plus populaires seront traitées dans ce cours, de façon à vous enseigner les bases de la cybersécurité dans les grands domaines informatiques (web, réseau, système, etc). 
Le tout dans le respect des lois et de l'éthique du hacking.
                                  </p>
                                    <p className="tech">
                                        <span>Technologies: </span>
                                        Programmation, Systèm, Securité, Réseau, Cloud, Pentest
                                        </p>
                                    <p className="delai">
                                        <span>Delai: </span>
                                        9 mois</p>
                                    <p className="prix">
                                        <span>Coût: </span>
                                        150 000CFA</p>
                                    <button className="btn_start">Commencez la formation</button>
                                </div>
                               
                            </div>


                        </div>
    );
}

export default Cartes;