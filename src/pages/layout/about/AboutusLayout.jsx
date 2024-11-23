import backImg from '../../../assets/Rectangle 18.png';
import { styled, Box } from '@mui/material';
import Navbar from '../../../components/common/Navbar';
import Footer from '../../../components/common/Footer';
import Stats from './Stats';
import Reviews from './Reviews';
// import AboutUs from './AboutUs';
// const MainWrapper = styled('div')(() => ({
//     display: 'flex',
//     minHeight: '100vh',
//     width: '100%',
// }));
// const PageWrapper = styled('div')(() => ({
//     display: 'flex',
//     flexGrow: 1,
//     flexDirection: 'column',
//     zIndex: 1,
//     width: '100%',
//     backgroundColor: 'transparent',
// }));
const AboutusLayout = () => {
    return (
        <div>
            <Navbar/>
            <div
            style={{ backgroundImage: `url(${backImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            className="w-full h-screen flex flex-col items-center justify-center pt-24 lg:pt-0 pb-24 lg:pb-0"
        >
            <div>
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
        </div>
        <Stats/>
        <Reviews/>
        <Footer/>
        </div>
        // <MainWrapper>
        //     <Box
        //         sx={{
        //             position: 'absolute',
        //             top: 0,
        //             left: 0,
        //             width: '100%',
        //             height: '85vh',
        //             backgroundImage: `url(${backImg})`,
        //             backgroundSize: 'cover',
        //             backgroundPosition: 'center',
        //             zIndex: -1,
        //         }}
        //     />

        //     <PageWrapper className="page-wrapper">
        //         <Navbar />
        //         <Box
        //             sx={{
        //                 minHeight: 'calc(100vh - 170px)',
        //                 pt: { xs: 10, sm: 15 },
        //                 pb: { xs: 8, sm: 12 },
        //             }}
        //         >
        //             {/* <SearchNurseLayout />
        //             <Nurses /> */}
        //             <AboutUs/>

        //         </Box>
        //         <Footer />
        //     </PageWrapper>

        // </MainWrapper>
    );
};

export default AboutusLayout;
