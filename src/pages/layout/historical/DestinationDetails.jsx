import { useParams } from 'react-router-dom';
import backImg from '../../../assets/Hero Section-Bg Image-01.png';
import Footer from '../../../components/common/Footer';
import Navbar from '../../../components/common/Navbar';
import { imageData } from '../about/HistoricalLayout';
import DestinationDetailsTop from './DestinationDetailsTop';
import DestinaltionDetailsBottom from './DestinaltionDetailsBottom';

const DestinationDetails = () => {
    const { id } = useParams();
    const destination = imageData.find((item) => item.id === parseInt(id));
    return (
        <div>
            <Navbar />
            <div
                style={{ backgroundImage: `url(${backImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                className="w-full h-screen flex flex-col items-center justify-center pt-24 lg:pt-0 pb-24 lg:pb-0"
            >
                <h1 className='text-white lg:text-3xl text-center'>{destination.title}</h1>
                <h1 className='text-white text-xl mt-4'>Pages | Blogs</h1>
            </div>
            <DestinationDetailsTop/>
            <DestinaltionDetailsBottom/>


            <Footer />

        </div>
    );
};

export default DestinationDetails;