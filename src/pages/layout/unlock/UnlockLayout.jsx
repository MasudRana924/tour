import './Unlocklayout.css';
import unlockImg from '../../../assets/Rectangle 25 (1).png'
const UnlockLayout = () => {
    return (
        <div className='unlock-container'>
        <div className='unlock-section lg:w-3/4 mx-auto'>
            <div className='w-full'>
                <p className="lg:text-4xl lg:text-center pt-32">Unlock Exclusive Experiences with Our Tour Guides</p>
                <p className="text-center text-sm mt-4">Discover Hidden Gems with Personalized Tours</p>
                
            </div>
            <div className='lg:w-3/4 mx-auto mt-4'>
                <img src={unlockImg} alt=""/>
                <p className='text-sm mt-4 w-3/4 mx-auto'>Uncover secret spots and local favorites with Trippie's exclusive network of knowledgeable tour guides. From off-the-beaten-path adventures to insider access, our guides specialize in creating custom experiences tailored to your interests. Step into a world of discovery unlike any other, only with Trippie.</p>
                <div className='w-2/4 lg:w-1/4 mx-auto'>
                <button className='w-3/4 unlock-btn text-white mt-4'>Find Now</button>
                </div>
            </div>
        </div>

    </div>
    );
};

export default UnlockLayout;