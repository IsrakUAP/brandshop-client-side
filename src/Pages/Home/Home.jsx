import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner";
import Cards from "../../Components/Cards/Cards";
import OurServices from "../../Components/OurServices/OurServices";
import ContactUs from "../../Components/ContactUs/ContactUs";


const Home = () => {
    const brands = useLoaderData();
    return (
        <div className="max-w-7xl mx-auto">       
            <Banner></Banner>
            <Cards brands={brands}></Cards>
            <OurServices></OurServices>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;