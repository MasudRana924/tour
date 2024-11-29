import { Routes,Route, Navigate  } from 'react-router-dom';
import HomeLayout from '../pages/layout/HomeLayout';
import Login from '../pages/auth/Login';
import AboutusLayout from '../pages/layout/about/AboutusLayout';
import ContactUs from '../pages/layout/contact/ContactUs';
import HistoricalLayout from '../pages/layout/about/HistoricalLayout';
import DestinationDetails from '../pages/layout/historical/DestinationDetails';
import TourGuideLayout from '../pages/layout/tourguide/TourGuideLayout';
import TourGuideDetails from '../pages/layout/tourguide/TourGuideDetails';
import Dashboard from '../pages/layout/dashboard/Dashboard';
import Services from '../pages/layout/dashboard/Services';
import DashboardLayout from '../pages/layout/dashboard/DashboardLayout';
const AppRoutes = () => {
    return (
        <Routes>
           <Route path="/" element={<HomeLayout />} />
           <Route path="/user/login" element={<Login />} />
           <Route path="/about-us" element={<AboutusLayout />} />
           <Route path="/contact-us" element={<ContactUs />} />
           <Route path="/historical/place" element={<HistoricalLayout />} />
           <Route path="/destination/:id" element={<DestinationDetails />} />
           <Route path="/tour/guide" element={<TourGuideLayout />} />
           <Route path="/tour/:id" element={<TourGuideDetails />} />

           <Route path="/guide/dashboard" element={<DashboardLayout />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="services" element={<Services />} />
          </Route>
        </Routes>
    );
};

export default AppRoutes;