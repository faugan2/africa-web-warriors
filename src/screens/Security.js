import "../styles/security.scss";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SecurityContent from "../components/SecurityContent";

const Security=()=>{
    return (
        <div className="security">
            <Nav index={2} />
            <SecurityContent />
            
        </div>
    )
}
export default Security;