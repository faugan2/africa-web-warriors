import "../styles/software.scss";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SoftwareContent from "../components/SoftwareContent";

const Software=()=>{
    return (
        <div className="software">
            <Nav index={3} />
            <SoftwareContent />
            
        </div>
    )
}
export default Software;