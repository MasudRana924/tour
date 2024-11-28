import Footer from "../../../components/common/Footer";
import Navbar from "../../../components/common/Navbar";
import { FaMapMarkerAlt } from "react-icons/fa";
import backImg from '../../../assets/tour.jpg';
import { useNavigate } from 'react-router-dom';
import TabSection from "./Tab";

const tourGuideData = [
    {
        id: 1,
        image: 'https://img.freepik.com/free-photo/business-concept-smiling-thoughtful-handsome-man-standing-white-isolated-background-touching-his-chin-with-hand_1258-80750.jpg?uid=R84769369&ga=GA1.1.78409749.1684004130&semt=ais_hybrid',
        name: 'Sylhet Adventure',
        location: 'Sylhet',
        price: '$50/day',
        description: 'Explore the lush green tea gardens and serene waterfalls of Sylhet. You will be mesmerized by the beauty of nature.',
    },
    {
        id: 2,
        image: 'https://img.freepik.com/free-photo/business-concept-smiling-thoughtful-handsome-man-standing-white-isolated-background-touching-his-chin-with-hand_1258-80750.jpg?uid=R84769369&ga=GA1.1.78409749.1684004130&semt=ais_hybrid',
        name: 'Beach Paradise',
        location: 'Cox Bazar',
        price: '$70/day',
        description: 'Enjoy the world’s longest sea beach and mesmerizing sunsets. A perfect destination for beach lovers.',
    },
    {
        id: 3,
        image: 'https://img.freepik.com/free-photo/business-concept-smiling-thoughtful-handsome-man-standing-white-isolated-background-touching-his-chin-with-hand_1258-80750.jpg?uid=R84769369&ga=GA1.1.78409749.1684004130&semt=ais_hybrid',
        name: 'Hill Trekking',
        location: 'Bandarban',
        price: '$60/day',
        description: 'Experience the rugged beauty of the hills and tribal culture. Perfect for adventure enthusiasts.',
    },
    {
        id: 4,
        image: 'https://img.freepik.com/free-photo/business-concept-smiling-thoughtful-handsome-man-standing-white-isolated-background-touching-his-chin-with-hand_1258-80750.jpg?uid=R84769369&ga=GA1.1.78409749.1684004130&semt=ais_hybrid',
        name: 'Mystic Sajek',
        location: 'Sajek',
        price: '$80/day',
        description: 'Discover the cloud-kissed valleys and breathtaking views of Sajek. A heavenly retreat.',
    },
    {
        id: 5,
        image: 'https://img.freepik.com/free-photo/business-concept-smiling-thoughtful-handsome-man-standing-white-isolated-background-touching-his-chin-with-hand_1258-80750.jpg?uid=R84769369&ga=GA1.1.78409749.1684004130&semt=ais_hybrid',
        name: 'Heritage Tour',
        location: 'Sonargaon',
        price: '$40/day',
        description: 'Dive into the history and culture of ancient Bengal. A journey through time.',
    },
    {
        id: 6,
        image: 'https://img.freepik.com/free-photo/business-concept-smiling-thoughtful-handsome-man-standing-white-isolated-background-touching-his-chin-with-hand_1258-80750.jpg?uid=R84769369&ga=GA1.1.78409749.1684004130&semt=ais_hybrid',
        name: 'Mangrove Adventure',
        location: 'Sundarbans',
        price: '$90/day',
        description: 'Explore the mysterious mangrove forest and spot the Royal Bengal Tiger. A thrilling adventure awaits.',
    },
];

const TourGuideLayout = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Navbar />
            <div
                style={{ backgroundImage: `url(${backImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                className="w-full h-screen flex flex-col md:justify-center pt-24 lg:pt-0 pb-24 lg:pb-0"
            >
                <div>
                    <div className="w-full lg:w-8/12 mx-auto bg-white h-64 border rounded-lg">

                        <TabSection/>
                    </div>
                </div>
            </div>
            <div className="container px-4 py-8 lg:w-3/4 mx-auto mt-16 md:mt-0">
                <h2 className="text-2xl font-semibold text-center mb-2">POPULAR TOUR Guide</h2>
                <p className="text-sm mt-2 text-center">
                    Discover curated tours with unmatched experiences and affordable prices.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-4 lg:mt-16">
                    {tourGuideData.map((tour) => (
                        <div
                            key={tour.id}
                            className="cursor-pointer border rounded-lg p-2"
                            onClick={() => navigate(`/tour/${tour.id}`)}
                        >
                            <img src={tour.image} alt={tour.name} className="w-full h-44 mb-2 border rounded-lg " />
                            <h3 className="text-lg font-medium  text-center text-blue-700">{tour.name}</h3>
                            <p className="text-start text-sm text-gray-400 flex items-center mt-2 ">
                                <FaMapMarkerAlt className="mr-2 text-red-500" /> {tour.location}
                            </p>
                            <p className="text-start text-sm text-gray-900 mt-2">{tour.price}</p>
                            <p className="text-start text-sm text-gray-600 mt-2">
                                {tour.description.length > 50
                                    ? `${tour.description.substring(0, 50)}...`
                                    : tour.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TourGuideLayout;
