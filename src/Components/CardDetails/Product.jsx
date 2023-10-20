import swal from 'sweetalert';

const Product = ({ product }) => {
  const { name, image, price, details } = product;
  const handleAddCart = e => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const price = form.price.value;
    const newProduct = { image, name, price }
    console.log(newProduct);
    fetch('https://b8a10-brandshop-server-side-d5npkia9n.vercel.app/product', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.success) {
          swal("Good job!", "Product added to cart successfully", "success");
        }
        else {
          swal("Good job!", "Product added to cart successfully", "success");
        }
      });

  }


  return (
    <div>
      <form onSubmit={handleAddCart} className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img name="image" src={image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Price: {price}$</p>
          <p>{details}</p>
          <input type="hidden" name="name" value={name} />
          <input type="hidden" name="image" value={image} />
          <input type="hidden" name="price" value={price} />
          <div className="card-actions justify-end">
            <input type="submit" className="btn btn-primary" value="Add to Cart" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Product;