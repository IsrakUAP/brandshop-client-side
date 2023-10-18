

import { useLoaderData, useParams } from "react-router-dom";
import Car from "./Car";
import SimpleSlider from "./SimpleSlider";

const ShowCars = () => {
    const cars = useLoaderData();
    const {brandName} = useParams();
    const filteredCars = cars.filter(car => car.brandName === brandName);

    return (
        <div>
            <div className=" mb-6"><SimpleSlider></SimpleSlider></div>
            
        <div className="grid grid-cols-3 gap-1">
            {
                filteredCars.length > 0 ? (
                    filteredCars.map((car, idx) => <Car car={car} key={idx} />)
                ) : (
                    <p className="text-4xl text-center">No cars found for {brandName}</p>
                )
            }
        </div>
        </div>
    );
};

export default ShowCars;
