import { FaSearch, FaBell, FaCog } from "react-icons/fa";

const DashboardHeader = () => {
    return (
        <header className="dashboard-header">
            <div className="header-content">
                {/* Dashboard Title */}
                <h1 className="dashboard-title">Dashboard</h1>

                {/* Search Field */}
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="search-input"
                    />
                    <FaSearch className="search-icon" />
                </div>

                {/* Icons and Avatar */}
                <div className="header-icons">
                    <FaBell className="icon alert-icon" />
                    <FaCog className="icon settings-icon" />
                    <img
                        src="https://via.placeholder.com/40"
                        alt="User Avatar"
                        className="user-avatar"
                    />
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;
