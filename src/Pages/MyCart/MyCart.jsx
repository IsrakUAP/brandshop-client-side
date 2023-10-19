import { useLoaderData } from "react-router-dom";
import Cart from "./Cart";


const MyCart = () => {
    const carts = useLoaderData();
    return (
        <div className=" grid grid-cols-3 justify-center items-center gap-2">
           {
            carts.map((cart,idx)=> <Cart key={idx} cart={cart}></Cart>)
           }
        </div>
    );
};

export default MyCart;