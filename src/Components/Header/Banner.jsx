

const Banner = () => {
    return (
        <div>
             <div className="banner-section relative h-80 flex items-center justify-center text-white bg-cover bg-center" style={{ backgroundImage: 'url("https://i.ibb.co/pfHnjY8/1a-bmw-wanchaishowroom-finedata-1.webp")' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="container text-center z-10">
                <h1 className="text-4xl font-bold mb-4">Welcome to Car Planet</h1>
                <p className="text-lg mb-8">Explore our wide range of high-quality cars and find the perfect one for you.</p>
                <p className="text-lg">Browse through our inventory, compare features, and discover exceptional deals on your dream car. Our team of experts is here to assist you at every step, ensuring a seamless and enjoyable car-buying experience.</p>
            </div>
        </div>
        </div>
    );
};

export default Banner;