

const AddProduct = () => {
    const handleAddCar = e =>{
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const details = form.details.value;
        const rating = form.rating.value;
        
        const newCar = {image,name,brandName,type,price,details,rating}
        console.log(newCar);
        fetch('http://localhost:5000/car',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCar)
        })
        .then(res=> res.json())
        .then (data=>{
            console.log(data)
        })

    }
    return (
        <div>
             <div className="max-w-lg mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Add a New Product</h2>
            <form onSubmit={handleAddCar}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Image URL</label>
                    <input type="text" name="image" className="mt-1 p-2 w-full border rounded-md" placeholder="Enter image URL" required />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Name</label>
                    <input type="text" name="name" className="mt-1 p-2 w-full border rounded-md" placeholder="Enter product name" required />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Brand</label>
                    <select name="brandName" className="mt-1 p-2 w-full border rounded-md" required>
                        <option value="">Select Brand</option>
                        <option value="Toyota">Toyota</option>
                        <option value="Ford">Ford</option>
                        <option value="BMW">BMW</option>
                        <option value="Mercedes-Benz">Mercedes-Benz</option>
                        <option value="Tesla">Tesla</option>
                        <option value="Honda">Honda</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Type Automotive</label>
                    <select name="type" className="mt-1 p-2 w-full border rounded-md" required>
                        <option value="">Select Type</option>
                        <option value="Sedan">Sedan</option>
                        <option value="SUV">SUV</option>
                        <option value="Truck">Truck</option>
                        <option value="SportsCar">Sports Car</option>
                        <option value="ElectricVehicle">Electric Vehicle</option>
                        <option value="HybridVehicle">Hybrid Vehicle</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Price</label>
                    <input type="number" name="price" className="mt-1 p-2 w-full border rounded-md" placeholder="Enter price" required />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Short Description</label>
                    <textarea rows="3" name="details" className="mt-1 p-2 w-full border rounded-md" placeholder="Enter short description" required></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Rating</label>
                    <input type="number" name="rating" className="mt-1 p-2 w-full border rounded-md" placeholder="Enter rating" required />
                </div>
                <input type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 cursor-pointer" value="Add Product"/>
            </form>
        </div>
        </div>
    );
};

export default AddProduct;