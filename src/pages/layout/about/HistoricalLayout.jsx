import backImg from '../../../assets/Hero Section-Bg Image-01.png';
import Navbar from '../../../components/common/Navbar';
import Footer from '../../../components/common/Footer';
import imgOne from '../../../assets/Rectangle 38.png';
import imgTwo from '../../../assets/Rectangle 39.png';
import imgThree from '../../../assets/Rectangle 38 (5).png';
import { useNavigate } from 'react-router-dom';
export const imageData = [
    { id: 1, image: imgOne, title: 'Discover the Worlds Longest Natural Sea Beach at Coxs Bazar', smtitle: '24.OCT.2022 | BY ADMIN' },
    { id: 2, image: imgTwo, title: 'Unveil the Historical Charm of Coxs Bazar', smtitle: '24.OCT.2022 | BY ADMIN' },
    { id: 3, image: imgThree, title: 'Coxs Bazar: A Blend of History and Natural Beauty', smtitle: '24.OCT.2022 | BY ADMIN' },
    { id: 4, image: imgTwo, title: 'Explore the Rich Heritage and Scenic Wonders of Coxs Bazar', smtitle: '24.OCT.2022 | BY ADMIN' },
    { id: 5, image: imgThree, title: 'Coxs Bazar: Where History Meets the Horizon', smtitle: '24.OCT.2022 | BY ADMIN' },
    { id: 6, image: imgThree, title: 'Discover the Worlds Longest Natural Sea Beach at Coxs Bazar', smtitle: '24.OCT.2022 | BY ADMIN' },
    { id: 7, image: imgTwo, title: 'Discover the Worlds Longest Natural Sea Beach at Coxs Bazar', smtitle: '24.OCT.2022 | BY ADMIN' },
    { id: 8, image: imgOne, title: 'Discover the Worlds Longest Natural Sea Beach at Coxs Bazar', smtitle: '24.OCT.2022 | BY ADMIN' },
    { id: 9, image: imgTwo, title: 'Discover the Worlds Longest Natural Sea Beach at Coxs Bazar', smtitle: '24.OCT.2022 | BY ADMIN' },
];


const HistoricalLayout = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Navbar />
            <div
                style={{ backgroundImage: `url(${backImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                className="w-full h-screen flex flex-col items-center justify-center pt-24 lg:pt-0 pb-24 lg:pb-0"
            >
                <div>
                <div className="w-full  mx-auto text-gray-900">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-8">
                        Historical Place Appeared On Search
                    </h1>
                    <p className="text-center text-white">
                        Home | Pages | Blog
                    </p>
                </div>
                </div>
            </div>
            <div className="container  px-4 py-8 lg:w-3/4 mx-auto">
                <h2 className="text-2xl font-semibold text-center mb-2">POPULAR DESTINATIONS</h2>
                <p className='text-sm mt-2 text-center '>Explore our top destinations right from our beloved clients’ reviews.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-4 lg:mt-16">
                {imageData.map((item) => (
                        <div
                            key={item.id}
                            className="cursor-pointer"
                            onClick={() => navigate(`/destination/${item.id}`)}
                        >
                            <img src={item.image} alt={item.title} className="w-full h-44 mb-2" />
                            <p className="text-start text-sm text-gray-400">{item.smtitle}</p>
                            <h3 className="text-lg font-medium text-start">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HistoricalLayout;
