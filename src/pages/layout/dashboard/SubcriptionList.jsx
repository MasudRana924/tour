import "./SubscriptionList.css"; // Import CSS file for styling

const SubscriptionList = () => {
    return (
        <div className="md:flex justify-between gap-4">
            {/* Subscription Details Card */}
            <div className="w-full border rounded-lg shadow-md p-4">
                <h3 className="text-2xl text-gray-900 font-semibold">Triple Subscriptions</h3>
                <div className="md:flex justify-between mt-4">
                    <div>
                        <p className="md:text-xl text-green-500 font-medium">Active</p>
                        <p className="mt-4 text-gray-500">July 01 - July 31 </p>
                    </div>
                    <div>
                        <p className="mt-4 text-xl font-semibold text-gray-900"> 490 Tk </p>
                        <p className="mt-2 text-gray-500 "> /monthly </p>
                    </div>
                </div>


            </div>

            {/* Actions Card */}
            <div className="w-full border rounded-lg shadow-md p-4">
                <h3 className="text-2xl text-gray-900 font-semibold">Current Plan</h3>
                <div className="md:flex justify-between mt-4">
                    <div>
                        <p className="md:text-xl text-gray-500 font-medium">15 days left</p>
                    </div>
                    <div>
                        <p className="text-xl font-semibold text-gray-900"> 490 Tk </p>
                        <p className="mt-2 text-gray-500 "> /monthly </p>
                    </div>
                </div>
                <div className="md:flex justify-between mt-4 gap-4">
                    <button className="border rounded-lg border-teal-500 text-teal-500 h-12 w-full font-medium">Upgrade Plan</button>
                    <button className="border rounded-lg border-teal-500 bg-teal-500 text-white h-12 w-full font-medium mt-4 md:mt-0">Reset Now</button>
                </div>

            </div>
        </div>
    );
};

export default SubscriptionList;
