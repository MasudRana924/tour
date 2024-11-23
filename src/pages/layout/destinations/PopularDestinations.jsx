import "./PopularDestinations.css";
import sliderImgOne from '../../../assets/Image 02.png';
import sliderImgTwo from '../../../assets/Image 02.png';
import { IoLocationOutline } from "react-icons/io5";
const PopularDestinations = () => {
  return (
    <div className="popular-destinations w-full ">
      <div className="w-full md:w-2/4 mx-auto">
        <h2 className="title text-center">Popular Destinations</h2>
        <p className="text-center mt-2 mr-8 small-title">Explore our top destinations right from our beloved clients’ reviews.</p>
        <div className=" m-4 lg:mt-8 flex flex-wrap justify-between gap-2 ">
          <button className="w-full sm:w-1/2 lg:w-auto button-all text-white">All</button>
          <button className="w-full sm:w-1/2 lg:w-auto destinations-button">Best Seller</button>
          <button className="w-full sm:w-1/2 lg:w-auto destinations-button">Nature</button>
          <button className="w-full sm:w-1/2 lg:w-auto destinations-button">City</button>
          <button className="w-full sm:w-1/2 lg:w-auto destinations-button">Season</button>
        </div>
      </div>

      <div className="carousel-container mt-8">
        {/* <div className="carousel">

          <div className="carousel-item ">
            <img src={sliderImgOne} alt="w-full" className="w-full object-cover" />
            <p className="slider-title text-start mt-2">Italy</p>
            <p className="slider-sm-title text-start mt-2 flex">
              <IoLocationOutline /> 20 packages
            </p>
          </div>


          <div className="carousel-item relative">
            <img src={sliderImgTwo} alt="" className="w-full  object-cover" />
            <div className="rounded-lg overlay-content absolute  inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
              <p className="text-white text-lg">Italy</p>
              <p className="text-white text-sm flex items-center mt-2">
                <IoLocationOutline className="mr-1" /> 20 packages
              </p>
              <p className="text-white text-sm mt-2">
                Switzerland, officially the Swiss Confederation, is a landlocked country located at the northern part of Europe.
              </p>
              <div className="mt-4 flex gap-2">
                <button className="slider-book-btn  text-white px-4 py-2 rounded">Book Now</button>
                <button className="slider-more-btn bg-transparent text-white border border-white px-4 py-2 rounded">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="carousel-item ">
            <img src={sliderImgOne} alt="w-full" className="w-full object-cover" />
            <p className="slider-title text-start mt-2">Italy</p>
            <p className="slider-sm-title text-start mt-2 flex">
              <IoLocationOutline /> 20 packages
            </p>
          </div>
          
        </div> */}
        <div className="carousel">
  {/* First Slide */}
  <div className="carousel-item first">
    <img src={sliderImgOne} alt="Destination 1" className="w-full object-cover" />
    <p className="slider-title text-start mt-2">Italy</p>
    <p className="slider-sm-title text-start mt-2 flex">
      <IoLocationOutline /> 20 packages
    </p>
  </div>

  {/* Second Slide */}
  <div className="carousel-item second">
    <img src={sliderImgTwo} alt="Destination 2" className="w-full object-cover" />
    <div className="overlay-content">
      <p className="text-white text-lg">Italy</p>
      <p className="text-white text-sm flex items-center mt-2">
        <IoLocationOutline className="mr-1" /> 20 packages
      </p>
      <p className="text-white text-sm mt-2">
        Switzerland, officially the Swiss Confederation, is a landlocked country located in the northern part of Europe.
      </p>
      <div className="mt-4 flex gap-2">
        <button className="slider-book-btn text-white px-4 py-2 rounded">Book Now</button>
        <button className="slider-more-btn bg-transparent text-white border border-white px-4 py-2 rounded">
          Learn More
        </button>
      </div>
    </div>
  </div>

  {/* Third Slide */}
  <div className="carousel-item third">
    <img src={sliderImgOne} alt="Destination 3" className="w-full object-cover" />
    <p className="slider-title text-start mt-2">France</p>
    <p className="slider-sm-title text-start mt-2 flex">
      <IoLocationOutline /> 15 packages
    </p>
  </div>

  {/* Fourth Slide */}
  <div className="carousel-item fourth">
    <img src={sliderImgTwo} alt="Destination 4" className="w-full object-cover" />
    <div className="overlay-content">
      <p className="text-white text-lg">Italy</p>
      <p className="text-white text-sm flex items-center mt-2">
        <IoLocationOutline className="mr-1" /> 20 packages
      </p>
      <p className="text-white text-sm mt-2">
        Switzerland, officially the Swiss Confederation, is a landlocked country located in the northern part of Europe.
      </p>
      <div className="mt-4 flex gap-2">
        <button className="slider-book-btn text-white px-4 py-2 rounded">Book Now</button>
        <button className="slider-more-btn bg-transparent text-white border border-white px-4 py-2 rounded">
          Learn More
        </button>
      </div>
    </div>
  </div>

  {/* Fifth Slide */}
  <div className="carousel-item fifth">
    <img src={sliderImgOne} alt="Destination 5" className="w-full object-cover" />
    <p className="slider-title text-start mt-2">Spain</p>
    <p className="slider-sm-title text-start mt-2 flex">
      <IoLocationOutline /> 10 packages
    </p>
  </div>
</div>


      </div>
    </div>

  );
};
export default PopularDestinations;
