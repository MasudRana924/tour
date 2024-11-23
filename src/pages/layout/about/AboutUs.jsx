
const AboutUs = () => {
    return (
        <div
            className="w-full "
        >
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 mx-auto text-gray-900 p-4">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-8">
                    About Us
                </h1>
                <p className='text-center'> <span className='text-gray-400 pt-8'>Home / Pages /</span> About Us</p>

            </div>
            <div className="w-full lg:w-3/4 mx-auto flex flex-wrap gap-8 pt-8 justify-center ">
                <div className="w-full sm:w-1/2 lg:w-1/4">
                    <p className="text-center sm:text-left lg:text-4xl text-white lg:mt-8">Where every tour feels extraordinary</p>

                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4">
                    <h3 className="text-xl sm:text-2xl text-center lg:text-left text-white">Variety Brands</h3>
                    <p className="text-center sm:text-left text-white mt-4 text-sm ">Platea non auctor fermentum sollicitudin. Eget adipiscing augue sit quam natoque ornare cursus viverra odio.</p>
                    <h3 className="text-xl sm:text-2xl text-center lg:text-left text-white mt-4">Maximum Freedom</h3>
                    <p className="text-center sm:text-left text-white text-sm  mt-4">Diam quam gravida ultricies velit duis consequat integer. Est aliquam posuere vel rhoncus massa volutpat in</p>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4">
                    <h3 className="text-xl sm:text-2xl text-center lg:text-left text-white">Awesome Support</h3>
                    <p className="text-center sm:text-left text-white mt-4 text-sm ">Eget adipiscing augue sit quam natoque ornare cursus viverra odio. Diam quam gravida ultricies velit</p>
                    <h3 className="text-xl sm:text-2xl text-center lg:text-left text-white mt-4">flexibility on the go</h3>
                    <p className="text-center sm:text-left text-white text-sm  mt-4">Vitae pretium nulla sed quam id nisl semper. Vel non in proin egestas dis.faucibus rhoncus. Iaculis dignissim aenean pellentesque nisl</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;