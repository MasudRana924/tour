import { Routes,Route  } from 'react-router-dom';
import HomeLayout from '../pages/layout/HomeLayout';
import Login from '../pages/auth/Login';
import AboutusLayout from '../pages/layout/about/AboutusLayout';
import ContactUs from '../pages/layout/contact/ContactUs';
import HistoricalLayout from '../pages/layout/about/HistoricalLayout';
const AppRoutes = () => {
    return (
        <Routes>
           <Route path="/" element={<HomeLayout />} />
           <Route path="/user/login" element={<Login />} />
           <Route path="/about-us" element={<AboutusLayout />} />
           <Route path="/contact-us" element={<ContactUs />} />
           {/* <Route path="/hitorical-place" element={<HistoricalPlace />} /> */}
           <Route path="/historical/place" element={<HistoricalLayout />} />
        </Routes>
    );
};

export default AppRoutes;