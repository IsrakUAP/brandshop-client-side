import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { getAuth } from "firebase/auth";

const Navbar = () => {
    const {user,logOut,createUser} = useContext(AuthContext);
    const [displayName, setDisplayName] = useState("");
    const [photoURL, setPhotoURL] = useState("");

    useEffect(() => {
        const auth = getAuth();
        const currentUser = auth.currentUser;

        if (currentUser) {
            setDisplayName(currentUser.displayName);
            setPhotoURL(currentUser.photoURL);
        }
    }, [user,createUser]);
    const handleSignout = () => {
        logOut();
    }
    return (
        <div className="navbar"> 
            <nav className="navbar bg-gray-100">
            <div className="navbar-start block lg:hidden">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <Link className=" hover:text-red-500" to="/">Homepage</Link>
                        <Link className=" hover:text-red-500" to="/addProduct">Add Product</Link>
                        <Link className=" hover:text-red-500" to="/myCart">My Cart</Link>
                        <Link className=" hover:text-red-500" to="/login">Login</Link>
                        
                    </ul>
                </div>
            </div>

            
                <div className="navbar-start flex-1 mr-20 md:mr-auto flex-col md:flex-row items-center">
                    <img src="https://i.ibb.co/FWJLxts/images-removebg-preview-1.png" alt="Logo" className="w-20 h-16 mr-2" />
                    <span className="text-lg text-center font-bold">Car Planet</span>
                </div>
                <div className="navbar-center flex-1 hidden lg:block space-x-3">
                    <NavLink to="/" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 underline font-semibold text-[15px]" : "font-semibold text-[15px]"
                    }>Home</NavLink>
                    <NavLink to="/addProduct" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 underline font-semibold text-[15px]" : "font-semibold text-[15px]"
                    }>Add Product</NavLink>
                    <NavLink to="/myCart" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 underline font-semibold text-[15px]" : "font-semibold text-[15px]"
                    }>My Cart</NavLink>
                    <NavLink to="/login" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 underline font-semibold text-[15px]" : "font-semibold text-[15px]"
                    }>Login</NavLink>

                </div>
                <div className="ml-auto navbar-end flex-1 md:flex-none flex">
                {user ? (
                    <div className=" flex-row md:flex items-center">
                        <div className="flex justify-end md:flex-none md:justify-start">
                        <img className="rounded-full h-8 w-8 mr-2" src={photoURL} alt="User" />
                        <p className="text-gray-700">{displayName}</p>
                        </div>
                        <button onClick={handleSignout} className="btn btn-accent ml-2">
                            Logout
                        </button>
                    </div>
                ) : (
                    <Link to="/login">
                        <button className="btn btn-accent">Login</button>
                    </Link>
                )}              
                </div>                 
            </nav>
        </div>
    );
};

export default Navbar;