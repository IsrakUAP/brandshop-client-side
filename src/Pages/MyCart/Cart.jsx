import { useState } from "react";
import swal from 'sweetalert';

const Cart = ({cart}) => {
    const {_id,image,name,price}= cart;
    const [items,setItems] = useState([]);
    const handleDelete = _id =>{
     console.log(_id);
     fetch(`https://b8a10-brandshop-server-side-gho11qwql.vercel.app/product/${_id}`, {
      method: 'DELETE'
     })
     .then(res => res.json())
     .then(data => {
      console.log(data);
      if(data.deletedCount>0){
        swal("Good job!", "Product deleted successfully", "success");
      const remainingItems = items.filter(item => item._id !== _id);
      setItems(remainingItems);
      }
     })
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className="h-[200px]" src={image}alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{price}$</p>
    <div className="card-actions justify-end">
      <button onClick={()=>handleDelete(_id)} className="btn btn-primary">Delete This</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Cart;