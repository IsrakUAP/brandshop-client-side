

const ContactUs = () => {
    return (
        <div>
            <p className="text-center text-4xl font-semibold mb-4">Contact Us</p>
            <div className="flex flex-wrap justify-center items-center bg-gray-100">
      <div className="w-full md:w-1/2 p-8">
        <h1 className="text-3xl font-bold mb-6">Welcome to Our Car Plant</h1>
        <p className="mb-4">
          We are a leading car manufacturing company dedicated to delivering high-quality vehicles
          tailored to meet your needs. With cutting-edge technology and a focus on sustainability,
          we pride ourselves on creating the cars of tomorrow.
        </p>
        <h2 className="text-xl font-semibold mb-2">Why Choose Us?</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Exceptional Quality</li>
          <li>Innovative Designs</li>
          <li>Environmentally Friendly</li>
          <li>Customer Satisfaction</li>
        </ul>
      </div>
      <div className="w-full md:w-1/2 p-8">
        <div className="bg-white p-8 rounded shadow-lg">
          <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
          <form className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-semibold text-gray-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="border border-gray-300 rounded px-3 py-2"
                placeholder="Your Full Name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-semibold text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-3 py-2"
                placeholder="Your Email"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-sm font-semibold text-gray-600 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="border border-gray-300 rounded px-3 py-2"
                placeholder="Your Phone Number"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm font-semibold text-gray-600 mb-1">
                Message
              </label>
              <textarea
                id="message"
                className="border border-gray-300 rounded px-3 py-2 h-32"
                placeholder="Your Message"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
        </div>
    );
};

export default ContactUs;