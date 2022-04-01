import "../styles/academy.scss";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AcademyContent from "../components/AcademyContent";

const Academy=()=>{
    return (
        <div className="academy">
            <Nav index={1} />
            <AcademyContent />
            
        </div>
    )
}
export default Academy;