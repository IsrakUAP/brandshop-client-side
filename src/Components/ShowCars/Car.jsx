

const Car = ({car}) => {
    console.log(car);
    const {image,name,brandName,type,price,rating}=car;
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
                <p>Rating: {rating}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-accent">Details button</button>
                   <button className="btn btn-accent">Update button</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Car;