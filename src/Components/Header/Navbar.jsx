import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar">
            <nav className="navbar bg-gray-100">
                <div className=" navbar-start flex-1 items-center">
                    <img src="https://i.ibb.co/FWJLxts/images-removebg-preview-1.png" alt="Logo" className="w-20 h-16 mr-2" />
                    <span className="text-lg font-bold">Car Planet</span>
                </div>
                <div className="navbar-center flex-1 gap-4">
                    <NavLink to="/" className="text-base text-gray-700 focus:text-red-500 focus:underline">Home</NavLink>
                    <NavLink to="/addProduct" className="text-base text-gray-700 focus:text-red-500 focus:underline">Add Product</NavLink>
                    <NavLink to="/myCart" className="text-base text-gray-700 focus:text-red-500 focus:underline">My Cart</NavLink>
                    <NavLink to="/login" className="text-base text-gray-700 focus:text-red-500 focus:underline">Login</NavLink>

                </div>
                <div className="ml-auto navbar-end flex-1">
                    <Link to="/login"><button className="btn btn-accent">Login</button></Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;