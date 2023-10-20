import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";


const UpdateProduct = () => {
    const car = useLoaderData();
    const { _id, image, name, brandName, type, price, rating } = car;

    const handleUpdateCar = e => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;

        const updateCar = { image, name, brandName, type, price, rating }
        console.log(updateCar);
        fetch(`https://b8a10-brandshop-server-side-3npr2xlsd.vercel.app/car/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCar)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    swal("Good job!", "Product updated successfully", "success");
                }
                else {
                    swal("Good job!", "Product updated successfully", "success");
                }
            })

    }


    return (
        <div>
            <div className="max-w-lg mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Update Product</h2>
                <form onSubmit={handleUpdateCar}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Image URL</label>
                        <input type="text" name="image" className="mt-1 p-2 w-full border rounded-md" placeholder="Enter image URL" defaultValue={image} required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Name</label>
                        <input type="text" name="name" className="mt-1 p-2 w-full border rounded-md" placeholder="Enter product name" defaultValue={name} required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Brand</label>
                        <select name="brandName" className="mt-1 p-2 w-full border rounded-md" defaultValue={brandName} required>
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
                        <select name="type" className="mt-1 p-2 w-full border rounded-md" defaultValue={type} required>
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
                        <input type="number" name="price" className="mt-1 p-2 w-full border rounded-md" placeholder="Enter price" defaultValue={price} required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Rating</label>
                        <input type="range" name="rating" className="mt-1 p-2 w-full border rounded-md" placeholder="Enter rating" defaultValue={rating} required />
                    </div>
                    <input type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 cursor-pointer" value="Update Product" />
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;