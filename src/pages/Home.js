import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import BannerImage from "../images/pizza.png";
import "../styles/HomeStyle.css";

const Home = () => {
return(
    <Layout>
        <div className="home" style={{backgroundImage: `url(${BannerImage})`}}>
            <div className="homeHeader">
                <h1>
                    Food Website
                </h1>
                <p>
                    Best Home Food in India
                </p>
                <p style={{fontSize:"15px"}}>
                    * Currently serving only in Manjri , Pune *
                </p>
                <Link to="/menu">
                    <button>Order now</button>
                </Link>

            </div>
        </div>
    </Layout>
);
};

export default Home;