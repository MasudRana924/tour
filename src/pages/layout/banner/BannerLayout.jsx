import './BannerLayout.css';

const BannerLayout = () => {
    return (
        <div className="w-full lg:w-3/4 mx-auto px-4">
            <p className="banner-title text-center">UNFORGETTABLE TRAVEL AWAITS THE</p>
            <p className="adventure-title text-center mt-2">ADVENTURE</p>
            <p className="experience-title text-center mt-4">
                Experience the thrill of exploring the world's most fascinating destinations with
            </p>
            <p className="experience-title text-center">our expertly curated travel packages.</p>

            <div className="banner-bottom-section border mt-12"></div>
        </div>
    );
};

export default BannerLayout;
