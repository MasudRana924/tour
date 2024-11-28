import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { DatePicker, Form, Input, Button } from 'antd';
import 'antd/dist/reset.css'; // Import Ant Design's CSS
import './TourGuideDetails.css'; // Import custom CSS file
import Footer from "../../../components/common/Footer";
import Navbar from "../../../components/common/Navbar";
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
    // Add other tours as necessary
];

const TourGuideDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const tour = tourGuideData.find((item) => item.id === parseInt(id));

    if (!tour) {
        return <div className="text-center text-red-500">Tour not found</div>;
    }

    const handleSubmit = (values) => {
        console.log({
            name: values.name,
            phone: values.phone,
            dates: values.dates,
        });
        alert('Tour booked successfully!');
    };

    return (
        <div>
            <Navbar/>
            <div className="tour-details-container mt-8 md:mt-36">
            <button
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={() => navigate(-1)} // Navigate back to the previous page
            >
                Back
            </button>
            <div className="tour-content">
                <div className="tour-info">
                    <img src={tour.image} alt={tour.name} className="tour-image" />
                    <h1 className="tour-name">{tour.name}</h1>
                    <p className="tour-location">{tour.location}</p>
                    <p className="tour-price">{tour.price}</p>
                    <p className="tour-description">{tour.description}</p>
                </div>
                <div className="booking-form">
                    <h2 className="form-title">Book Your Tour Guide </h2>
                    <Form
                        onFinish={handleSubmit}
                        className="form-wrapper"
                        layout="vertical"
                    >
                        <Form.Item
                            label="Select Dates"
                            name="dates"
                            rules={[{ required: true, message: 'Please select dates!' }]}
                        >
                            <DatePicker.RangePicker
                                format="YYYY-MM-DD"
                                style={{ width: '100%' }}
                                className="h-12"
                            />
                        </Form.Item>
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: 'Please enter your name!' }]}
                        >
                            <Input placeholder="Enter your name" className="h-12" />
                        </Form.Item>
                        <Form.Item
                            label="Phone Number"
                            name="phone"
                            rules={[{ required: true, message: 'Please enter your phone number!' }]}
                        >
                            <Input placeholder="Enter your phone number" className="h-12"/>
                        </Form.Item>
                        <Button type="primary" htmlType="submit" className="w-full h-12">
                            Book Now
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
            <Footer/>
        </div>
    );
};

export default TourGuideDetails;
