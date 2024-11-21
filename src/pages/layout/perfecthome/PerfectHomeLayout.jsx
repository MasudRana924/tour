import './PerfectHomeLayout.css';
import imgOne from '../../../assets/Rectangle 6709.png'
import imgTwo from '../../../assets/Rectangle 6710.png'

const PerfectHomeLayout = () => {
    return (
        <div className='perfect-home-container'>
            <div className='perfect-top-section flex justify-between gap-4 w-3/4 mx-auto'>
                <div className='w-full'>
                    <p className="perfect-home-title mt-16">The perfect home base for your special trip</p>
                    <p className="perfect-home-sm-title mt-2">Discover dreamy holiday homes all over the world</p>
                    <button className='perfect-home-find-btn text-white mt-4'>Find Now</button>
                </div>
                <div className='w-full'>
                    <img src={imgOne} alt="" />
                </div>
            </div>
            <div className='perfect-top-section flex justify-between gap-4 w-3/4 mx-auto'>
                <div className='w-full'>
                    <img src={imgTwo} alt="" />
                </div>
                <div className='w-full'>
                    <p className="perfect-home-title mt-16">Ticket Booking Made Easy</p>
                    <p className="perfect-home-sm-title mt-2">Conveniently Book Your Travel Tickets and Car Rentals</p>
                    <button className='perfect-home-find-btn text-white mt-4'>Book Now</button>
                </div>

            </div>
        </div>
    );
};

export default PerfectHomeLayout;