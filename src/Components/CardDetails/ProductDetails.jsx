import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";


const ProductDetails = () => {
    const products = useLoaderData();
    const [product,setProduct] = useState([]);
    const {_id} = useParams();
    useEffect(()=>{
        const findProduct = products.find(product => product._id === _id)
        setProduct(findProduct);
    },[products,_id])

    return (
        <div>
            <Product product={product}></Product>
        </div>
    );
};

export default ProductDetails;