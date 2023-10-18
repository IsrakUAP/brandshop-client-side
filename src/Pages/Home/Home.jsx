import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner";
import Cards from "../../Components/Cards/Cards";


const Home = () => {
    const brands = useLoaderData();
    return (
        <div className="max-w-7xl mx-auto">
            <Banner></Banner>
            <Cards brands={brands}></Cards>
        </div>
    );
};

export default Home;