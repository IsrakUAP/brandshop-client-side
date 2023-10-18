

const Product = ({product}) => {
    const {name,image,details} = product;
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={image} alt=""/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{details}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Product;