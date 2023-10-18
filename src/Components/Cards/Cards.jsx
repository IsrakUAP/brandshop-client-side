import Card from "./Card";


const Cards = ({brands}) => {
    return (
        <div>
            <p className=" text-center text-4xl font-semibold mb-4">Brand Collections </p>
        <div className="grid grid-cols-3 gap-4 my-4">
            {
                brands.map((brand,idx)=><Card key={idx} brand={brand}></Card>)
            }
        </div>
        </div>
    );
};

export default Cards;