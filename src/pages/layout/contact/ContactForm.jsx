

const ContactForm = () => {
  return (
    <div className="mt-8 lg:w-1/2 lg:mx-6">
                            <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white lg:max-w-xl">
                                <form className="mt-6 flex flex-col">
                                    <div className="flex-1">
                                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                                        <input type="text" placeholder="John Doe" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>
                                    <div className="flex-1">
                                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last Name</label>
                                        <input type="text" placeholder="John Doe" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>
                                    <div className="flex-1 mt-6">
                                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                        <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>
                                    <div className="flex-1 mt-6">
                                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Phone</label>
                                        <input type="text" placeholder="+880111111111" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>
                                    <div className="w-full mt-6">
                                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message the host (optional)</label>
                                        <textarea className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Type Here"></textarea>
                                    </div>
                                    <div className="mt-6 flex justify-end">
                                        <button className="lg:w-1/4 p-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform rounded-md" style={{ backgroundColor: '#34B778' }}>
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
  );
};

export default ContactForm;
