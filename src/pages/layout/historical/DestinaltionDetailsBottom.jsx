import imgOne from '../../../assets/Image (6).png'

const DestinaltionDetailsBottom = () => {
    return (
        <div className='p-4 lg:p-0 lg:w-3/4 mx-auto mt-8'>
            <div>
                <img src={imgOne} alt="" className='mt-8' />
                <div className='mt-4'>
                    <h1 className='text-start text-sm lg:text-xl text-gray-700 font-semibold'>Pack Lightly and Smartly</h1>
                    <p className='mt-4 text-sm text-gray-700 '>Packing can be a daunting task, but with some careful planning and smart choices, you can pack light and efficiently. Start by making a packing list and sticking to it, focusing on versatile and comfortable clothing that can be mixed and matched. Invest in quality luggage and packing organizers to maximize space and minimize wrinkles.</p>
                </div>
                <div className='mt-4'>
                    <h1 className='text-start text-sm lg:text-xl text-gray-700 font-semibold'>Stay Safe and Healthy</h1>
                    <p className='mt-4 text-sm text-gray-700 '>Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy. This includes researching any required vaccinations or medications, staying hydrated, washing your hands frequently, and using sunscreen and insect repellent. It's also essential to keep your valuables safe and secure and to be aware of your surroundings at all times.</p>
                </div>
                <div className='mt-4'>
                    <h1 className='text-start text-sm lg:text-xl text-gray-700 font-semibold'>Immerse Yourself in the Local Culture</h1>
                    <p className='mt-4 text-sm text-gray-700 '>One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.</p>
                </div>
                <div className='mt-4 mb-4'>
                    <h1 className='text-start text-sm lg:text-xl text-gray-700 font-semibold'>Capture Memories</h1>
                    <p className='mt-4 text-sm text-gray-700 '>Finally, don't forget to capture memories of your journey. Whether it's through photographs, journaling, or souvenirs, preserving the moments and experiences of your travels can bring joy and nostalgia for years to come. However, it's also essential to be present in the moment and not let technology distract you from the beauty of your surroundings.</p>
                </div>
            </div>
        </div>
    );
};

export default DestinaltionDetailsBottom;