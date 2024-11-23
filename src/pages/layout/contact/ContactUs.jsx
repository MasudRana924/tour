// import backImg from '../../../assets/unsplash_1NTOQHBRegA.png';
// import Navbar from '../../../components/common/Navbar';
// import imgOne from '../../../assets/Image (1).png';
// import imgTwo from '../../../assets/Image (2).png';
// import imgThree from '../../../assets/Image (2).png';
// import imgFour from '../../../assets/Image.png';
// import Footer from '../../../components/common/Footer';

// const ContactUs = () => {
//     return (
//         <div>
//             <Navbar />
//             <div
//                 style={{ backgroundImage: `url(${backImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//                 className="w-full h-screen flex flex-col items-center justify-center pt-24 lg:pt-0 pb-24 lg:pb-0"
//             >
//                 <div className="w-full lg:w-3/4 mx-auto flex flex-col lg:flex-row gap-4 h-40 lg:h-64 rounded-lg overflow-hidden" style={{ backgroundColor: 'rgba(0, 152, 131, 0.46)' }}>

//                     {/* Left Section: Images */}
//                     <div className="w-full lg:w-1/4 mx-auto flex flex-col gap-4 pt-8 h-auto overflow-hidden">
//                         <img
//                             src={imgFour}
//                             alt="Image 1"
//                             className="w-24 " // Fixed height for smaller screens
//                         />
//                         <img
//                             src={imgTwo}
//                             alt="Image 2"
//                             className="w-24" // Fixed height for smaller screens
//                         />
//                         <img
//                             src={imgThree}
//                             alt="Image 3"
//                             className="w-24" // Fixed height for smaller screens
//                         />
//                     </div>

//                     {/* Middle Section: Contact Information */}
//                     <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-4 py-8 lg:py-0">
//                         <div className="w-full text-center mb-8">
//                             <p className="text-white text-xs">
//                                 Home / Pages / Contact
//                             </p>
//                             <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-8 mt-4">
//                                 Contact Information
//                             </h1>
//                         </div>
//                     </div>

//                     {/* Right Section: Bottom Image */}
//                     <div className="w-full lg:w-1/4 flex justify-center lg:justify-start">
//                         {/* <div classNameName="bg-white p-4 rounded-lg shadow-lg w-full lg:w-auto">
//                             <img
//                                 src={imgThree}
//                                 alt="Bottom Image"
//                                 classNameName="w-full h-auto object-cover rounded-lg"
//                             />
//                         </div> */}
//                     </div>

//                 </div>
//             </div>
//             <section className="bg-white">
//                 <div className="container px-6 py-12 mx-auto">
//                     <div className="lg:flex  lg:-mx-6">
//                         <div className="lg:w-1/2 lg:mx-6 lg:mt-20">
//                             <h1 className="text-2xl font-semibold text-gray-800 capitalize  lg:text-3xl">
//                                 Contact Information
//                             </h1>

//                             <div className="mt-6 space-y-8 md:mt-8">
//                                 <p className="flex items-start -mx-2">
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                                     </svg>

//                                     <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
//                                         Cecilia Chapman 711-2880 Nulla
//                                         St. Mankato Mississippi 96522
//                                     </span>
//                                 </p>

//                                 <p className="flex items-start -mx-2">
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                                     </svg>

//                                     <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">(257) 563-7401</span>
//                                 </p>

//                                 <p className="flex items-start -mx-2">
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                                     </svg>

//                                     <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">acb@example.com</span>
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="mt-8 lg:w-1/2 lg:mx-6">
//                             <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white lg:max-w-xl">
//                                 <form className="mt-6 flex flex-col">
//                                     <div className="flex-1">
//                                         <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
//                                         <input type="text" placeholder="John Doe" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
//                                     </div>
//                                     <div className="flex-1">
//                                         <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last Name</label>
//                                         <input type="text" placeholder="John Doe" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
//                                     </div>
//                                     <div className="flex-1 mt-6">
//                                         <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
//                                         <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
//                                     </div>
//                                     <div className="flex-1 mt-6">
//                                         <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Phone</label>
//                                         <input type="text" placeholder="+880111111111" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
//                                     </div>
//                                     <div className="w-full mt-6">
//                                         <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message the host (optional)</label>
//                                         <textarea className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Type Here"></textarea>
//                                     </div>
//                                     <div className="mt-6 flex justify-end">
//                                         <button className="lg:w-1/4 p-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform rounded-md" style={{ backgroundColor: '#34B778' }}>
//                                             Send Message
//                                         </button>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </section>
//             <Footer/>
//         </div>
//     );
// };

// export default ContactUs;


import ContactHeroSection from "./ContactHeroSection";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <ContactHeroSection />
      <section className="bg-white py-12">
        <div className="container px-6 mx-auto lg:flex lg:gap-8">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactUs;

