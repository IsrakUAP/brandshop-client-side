import { Link } from "react-router-dom";


const Car = ({car}) => {
    const {_id,image,name,brandName,type,price,rating}=car;
    return (
        <div>
             <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt={name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name} - {brandName}
                </h2>
                <p>{type}</p>
                <p className="font-semibold">${price}</p>
                <p>Rating: {rating}%</p>
                <div className="card-actions justify-end">
                   <Link to={`/productDetails/${_id}`}><button className="btn btn-accent">Details</button></Link> 
                  <Link to={`/updateProduct/${_id}`}> <button className="btn btn-accent">Update</button> </Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Car;