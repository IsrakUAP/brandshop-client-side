

const Card = ({ brand }) => {
    const { brandImage, brandName } = brand;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className="h-[260px] w-[350px]" src={brandImage} /></figure>
                <div className="card-body items-center">
                    <h2 className="card-title">{brandName}</h2>
                </div>
            </div>
        </div>
    );
};

export default Card;