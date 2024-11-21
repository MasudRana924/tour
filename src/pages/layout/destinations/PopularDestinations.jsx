import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PopularDestinations.css";
import sliderImgOne from '../../../assets/Image 02.png';
// import sliderImgTwo from '../../../assets/Image 02.png';
import sliderImgThree from '../../../assets/Image 03.png';
import { IoLocationOutline } from "react-icons/io5";
const PopularDestinations = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        // slidesToScroll: 1,
        // autoplay: true,
        // speed: 4000,
        // autoplaySpeed: 4000,
        // cssEase: "linear"
    };

    return (
        <div className="popular-destinations w-full ">
            <div className="w-2/4 mx-auto">
                <h2 className="title text-center">Popular Destinations</h2>
                <p className="text-center mt-2 mr-8 small-title">Explore our top destinations right from our beloved clients’ reviews.</p>
                <div className="flex justify-between gap-2 mt-8">
                    <button className="w-full button-all text-white">All</button>
                    <button className="w-full destinations-button">Best Seller</button>
                    <button className="w-full destinations-button ">Nature</button>
                    <button className="w-full destinations-button ">City</button>
                    <button className="w-full destinations-button ">Season</button>
                </div>
            </div>
            <div className="slider-container w-3/4 mx-auto  mt-8">
                <Slider {...settings}>
                    <div className="">
                        <img src={sliderImgOne} alt="" />
                        <p className="slider-title text-start mt-2">Italy</p>
                        <p className="slider-sm-title text-start mt-2 flex"> <IoLocationOutline /> 20 packages</p>
                    </div>
                    <div className="slider-item relative w-full ">
                        <img src={sliderImgOne} alt="" className="second-img rounded-lg" />
                        <div className="content-overlay absolute inset-0 flex flex-col justify-center items-start bg-black bg-opacity-50 p-4 text-white">
                            <p className="slider-title text-start mt-2 text-white">Italy</p>
                            <p className="slider-sm-title  text-white text-start mt-2 flex items-center">
                                <IoLocationOutline className="mr-1 text-white" /> 20 packages
                            </p>
                            <p className="slider-mid-title text-start mt-2 ">
                                Switzerland, officially the Swiss Confederation, is a landlocked country located at the northern part of Europe.
                            </p>
                            <div className="mt-4 flex gap-2">
                                <button className="slider-book-btn text-white ">Book Now</button>
                                <button className="slider-more-btn">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div  className="">
                        <img src={sliderImgThree} alt="" className="w-3/4 mx-auto"/>
                        <div className="w-3/4 mx-auto">
                        <p className="slider-title text-start mt-2">Italy</p>
                        <p className="slider-sm-title text-start mt-2 flex"> <IoLocationOutline /> 20 packages</p>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default PopularDestinations;
