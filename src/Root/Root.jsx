import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import DarkMode from "../Components/DarkMode/DarkMode";


const Root = () => {
    return (
        <div className=" dark:bg-black">
            <DarkMode></DarkMode>
        <div className="max-w-7xl mx-auto">          
            <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
        </div>
    );
};

export default Root;