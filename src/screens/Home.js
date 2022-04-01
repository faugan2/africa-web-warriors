import "../styles/home.scss";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import HomeContent from "../components/HomeContent";

const Home=()=>{
    return (
        <div className="home">
            <Nav />
            <HomeContent />
            
        </div>
    )
}
export default Home;