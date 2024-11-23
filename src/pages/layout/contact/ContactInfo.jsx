

const ContactInfo = () => {

  return (
    <div className="lg:w-1/2 lg:mx-6 lg:mt-20">
    <h1 className="text-2xl font-semibold text-gray-800 capitalize  lg:text-3xl">
        Contact Information
    </h1>

    <div className="mt-6 space-y-8 md:mt-8">
        <p className="flex items-start -mx-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>

            <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                Cecilia Chapman 711-2880 Nulla
                St. Mankato Mississippi 96522
            </span>
        </p>

        <p className="flex items-start -mx-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>

            <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">(257) 563-7401</span>
        </p>

        <p className="flex items-start -mx-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>

            <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">acb@example.com</span>
        </p>
    </div>
</div>
  );
};

export default ContactInfo;
