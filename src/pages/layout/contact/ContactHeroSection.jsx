import backImg from "../../../assets/unsplash_1NTOQHBRegA.png";
import imgFour from "../../../assets/Image.png";
import imgTwo from "../../../assets/Image (2).png";
import imgThree from "../../../assets/Image (2).png";

const ContactHeroSection = () => {
    return (
                    <div
                style={{ backgroundImage: `url(${backImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                className="w-full md:h-screen md:flex md:flex-col md:items-center md:justify-center  lg:pt-0 lg:pb-0 pt-24"
            >
                <div className="w-full lg:w-3/4 mx-auto flex flex-col lg:flex-row gap-4 h-36 md:h-64 rounded-lg overflow-hidden" style={{ backgroundColor: 'rgba(0, 152, 131, 0.46)' }}>

                    {/* Left Section: Images */}
                    <div className="w-full lg:w-1/4 mx-auto flex flex-col gap-4 pt-8 h-auto overflow-hidden">
                        <img
                            src={imgFour}
                            alt="Image 1"
                            className="w-24 " // Fixed height for smaller screens
                        />
                        <img
                            src={imgTwo}
                            alt="Image 2"
                            className="w-24" // Fixed height for smaller screens
                        />
                        <img
                            src={imgThree}
                            alt="Image 3"
                            className="w-24" // Fixed height for smaller screens
                        />
                    </div>

                    {/* Middle Section: Contact Information */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-4 py-8 lg:py-0">
                        <div className="w-full text-center mb-8">
                            <p className="text-white text-xs">
                                Home / Pages / Contact
                            </p>
                            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-8 mt-4">
                                Contact Information
                            </h1>
                        </div>
                    </div>

                    {/* Right Section: Bottom Image */}
                    <div className="w-full lg:w-1/4 flex justify-center lg:justify-start">
                        {/* <div classNameName="bg-white p-4 rounded-lg shadow-lg w-full lg:w-auto">
                            <img
                                src={imgThree}
                                alt="Bottom Image"
                                classNameName="w-full h-auto object-cover rounded-lg"
                            />
                        </div> */}
                    </div>

                </div>
            </div>
    );
};

export default ContactHeroSection;
