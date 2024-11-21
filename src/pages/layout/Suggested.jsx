import './Layout.css';
import ractangularImg from '../../assets/Rectangle 24.png';
import ractangularImgTwo from '../../assets/Rectangle 25.png';
const Suggested = () => {
    return (
        <div className="suggested-conatiner w-full">
            <div className='w-3/4 mx-auto'>
                <h1 className='text-start suggested-title'>Suggested Places to Visit</h1>
                <h1 className='text-start suggested-sm-title mt-2'>Get special travel packages made tailored for your needs.</h1>
            </div>
            <div className='suggested-section w-3/4 mx-auto flex gap-4 justify-between'>
               <div className='w-1/4  suggested-image-section '>
               <img src={ractangularImg} alt="" className='suggested-image '/>
               </div>
               <div className='suggested-imageTitle-section '>
               <img src={ractangularImgTwo} alt="" className='suggested-large-image '/>
                <div className='flex w-11/12 mx-auto gap-4 mt-6'>
                   <div className='w-3/4'>
                    <p className='escape-title'>ESCAPE </p>
                    <p className='escape-title'>TO PARADISE</p>
                   </div>
                   <div className='w-full'>
                    <h3 className='eascape-tag'>Bask in the warm tropical sun with our exclusive Tropical Escape Package. This 7-day trip takes you to the most stunning tropical islands.</h3>
                    <div>
                        <button className='learn-more-button mt-4 text-white'>Learn More</button>
                    </div>
                   </div>
                </div>
               </div>
            </div>
        </div>
    );
};

export default Suggested;