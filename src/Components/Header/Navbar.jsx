import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { getAuth } from "firebase/auth";


const Navbar = () => {
    const {user,logOut,createUser} = useContext(AuthContext);
    const [isDarkTheme, setIsDarkTheme] = useState(false);
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

    const toggleTheme = () => {
        setIsDarkTheme(prev => !prev);
        document.documentElement.classList.toggle("dark");
    };



    const handleSignout = () => {
        logOut();
    }
    return (
        <div className="navbar">
            
            
            <nav className="navbar bg-gray-100">
                <div className=" navbar-start flex-1 items-center">
                    <img src="https://i.ibb.co/FWJLxts/images-removebg-preview-1.png" alt="Logo" className="w-20 h-16 mr-2" />
                    <span className="text-lg font-bold">Car Planet</span>
                </div>
                <div className="navbar-center flex-1 gap-4">
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
                <div className="ml-auto navbar-end flex-1">
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
                <button className={`btn btn-accent ml-2 dark:bg-white dark:text-gray-800`} onClick={toggleTheme}>
                        {isDarkTheme ? "Light Theme" : "Dark Theme"}
                    </button>      
                </div>                 
            </nav>
        </div>
    );
};

export default Navbar;