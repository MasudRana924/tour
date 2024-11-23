import { RxAvatar } from "react-icons/rx";
import imgOne from '../../../assets/Image (5).png'

const DestinationDetailsTop = () => {
    return (
        <div className='p-4 lg:p-0 lg:w-3/4 mx-auto mt-8'>
                <button className='w-1/4 text-white h-12 lg:text-xl font-medium border rounded-lg' style={{ backgroundColor: '#34B778' }}>Adventure</button>
                <h1 className='text-start text-sm lg:text-3xl font-medium mt-4'>The Impact of Technology on the Workplace: How Technology is Changing</h1>
                <div className='flex gap-4 mt-4'>
                    <RxAvatar className='text-xl text-gray-400' />
                    <p className='text-sm text-gray-400'>Tracey Wilson</p>
                    <p className='text-sm text-gray-400'>August 20, 2022</p>
                </div>
                <div>
                    <img src={imgOne} alt="" className='mt-8' />
                    <p className='text-start text-xl text-gray-700 mt-4'>Cox's Bazar, a town in southeastern Bangladesh, is renowned for having the longest natural sea beach in the world, stretching over 120 kilometers (75 miles). This scenic coastal town is steeped in history and cultural heritage, making it one of the country's most popular tourist destinations.
                        Historical Background
                        Cox's Bazar's name comes from Captain Hiram Cox, an officer of the British East India Company. He was appointed as the Superintendent of Palonki (the present Cox's Bazar) in the late 18th century to deal with a centuries-old conflict between Arakanese refugees and local Rakhains. Captain Cox's efforts to rehabilitate refugees were significant, though he died before finishing his work. In his honor, a market was established and named Cox's Bazar.
                        Ancient and Colonial Influences
                        Before the British period, Cox's Bazar was known by different names, such as Panowa, meaning "yellow flower." The area was part of the ancient Buddhist kingdom of Arakan (now Rakhine State in Myanmar) and was influenced by Buddhist and Hindu traditions, as evidenced by the ancient temples and relics scattered around the region.
                        During the British colonial period, Cox's Bazar began to develop as a tourist destination. The British established several structures, including rest houses and clubs, to enjoy the scenic beauty of the area. The establishment of these facilities laid the foundation for the modern tourist industry in Cox's Bazar.
                        Geographical Significance
                        Cox's Bazar is not only known for its vast sandy beaches but also for its unique natural features. The town is surrounded by the Bay of Bengal on one side and hills covered with tropical rainforests on the other. The Himchari National Park, with its lush greenery and waterfalls, and the stunning Inani Beach, with its coral stones, are notable attractions.
                        Cultural Heritage
                        Cox's Bazar is home to a diverse population, including ethnic groups like the Rakhine and Chakma, who have preserved their distinct cultural traditions. The local markets reflect this diversity, offering a variety of handicrafts, traditional textiles, and local delicacies.
                        Modern Development
                        In recent years, Cox's Bazar has seen significant development as a tourist destination. New hotels, resorts, and tourist facilities have been established to cater to the growing number of visitors. The government and private sector have invested in improving infrastructure, promoting ecotourism, and preserving the natural and cultural heritage of the region.
                        Key Attractions
                        <br />
                        <span> <span className='font-bold text-3xl'>. </span> Laboni Beach: The main beach of Cox's Bazar, popular for its stunning sunsets.</span>
                        <br />
                        <span>
                            <span className='font-bold text-3xl'>. </span> Himchari National Park: Known for its waterfalls and diverse flora and fauna.
                        </span>
                        <br />
                        <span><span className='font-bold text-3xl'>. </span> Inani Beach: Famous for its rock and coral formations</span>
                        <br />
                        <span> <span className='font-bold text-3xl'>. </span> Aggameda Khyang: A large Buddhist monastery with numerous scripts and ancient artifacts.</span>
                        <br />
                        <span> <span className='font-bold text-3xl'>. </span> Ramu: A village with a large number of Buddhist monasteries, temples, and pagodas.
                            Conclusion</span>
                        Cox's Bazar's historical, cultural, and natural significance make it a unique destination in Bangladesh. Its long beach, historical background, and cultural diversity continue to attract tourists from around the world, making it a key player in the country's tourism industry.
                        4o</p>
                    <div className="mt-8 h-24 rounded-lg  w-full bg-green-200 flex items-center justify-center border-l-8  border-l-green-500" >
                        <p className='text-md'>“ Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy. ”</p>

                    </div>
                </div>
            </div>
    );
};

export default DestinationDetailsTop;