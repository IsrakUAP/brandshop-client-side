

const Banner = () => {
    return (
        <div className="mb-8 relative">
            <img className="w-full h-auto object-cover" src="https://www.car-planet.co.uk/img-src/_themev2-carplanet-3866/theme/hero-mobile-large.1695040758.png" alt="Car Planet Background" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                <h1 className="text-4xl font-bold mb-4 text-white">Welcome to Car Planet</h1>
                <p className="text-lg mb-4 text-white">Explore our wide range of high-quality cars and find the perfect one for you.</p>
                <p className="text-lg text-white">Browse through our inventory, compare features, and discover exceptional deals on your dream car. Our team of experts is here to assist you at every step, ensuring a seamless and enjoyable car-buying experience.</p>
            </div>
        </div>
    );
};

export default Banner;