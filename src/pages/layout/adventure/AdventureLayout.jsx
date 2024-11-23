
import backImg from '../../../assets/Rectangle 44.png';

const AdventureLayout = () => {
    return (
        <div
            style={{ backgroundImage: `url(${backImg})`, height: '640px' }}
            className="w-full bg-cover bg-center flex items-center"
        >
            <div className="w-3/4 lg:w-2/4 mx-auto text-gray-900">
                <h1 className="text-xl lg:text-4xl text-center font-medium pt-24">
                    START YOUR ADVENTURE
                </h1>
                <h1 className="text-sm text-start pt-4">
                    Sign up for our newsletter and receive exclusive travel deals, insider tips, and
                    destination inspiration. Don't miss out on the adventure - join our mailing list
                    today!
                </h1>
                <div className="w-3/4 mx-auto flex gap-4 pt-8">
                    {/* Input Field */}
                    <input
                        type="text"
                        placeholder="Enter your email"
                        className="w-full h-10 bg-transparent border-b-2 border-gray-700 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-900 transition duration-300"
                    />
                    {/* Submit Button */}
                    <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdventureLayout;
