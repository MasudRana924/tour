import { NavLink, Outlet } from "react-router-dom";
import Footer from "../../../components/common/Footer";
import Navbar from "../../../components/common/Navbar"
const DashboardLayout = () => {
    const sidebarItems = [
        { name: "Dashboard", path: "dashboard" },
        { name: "Services", path: "services" },

    ];
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <div className="w-full md:w-11/12 md:flex-grow lg:w-10/12 mx-auto md:flex justify-center md:mt-44 mb-12 ">
                {/* Left Sidebar */}
                <div className=" hidden md:block w-1/4 bg-gray-50 p-4 ">
                    <h2 className="text-lg font-semibold mb-4">Tour Guide Dashboard</h2>
                    <ul className="space-y-2">
                        {sidebarItems.map((item, index) => (
                            <li key={index} className="border-b">
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `block py-2 px-4 rounded ${isActive
                                            ? 'bg-teal-500 text-white'
                                            : 'text-gray-900 hover:bg-gray-200'
                                        }`
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <button className='mt-4 w-full bg-red-500 h-10 border rounded-lg text-white'>Logout</button>
                </div>

                {/* Right Content Area */}
                <div className="w-full md:w-3/4 lg:w-3/4 bg-white p-6 mt-16 md:mt-0 lg:mt-0">
                    <Outlet />
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default DashboardLayout;