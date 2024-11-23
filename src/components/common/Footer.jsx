// import { Box, Container, Grid, Typography, Link, Divider } from "@mui/material";
// import { Facebook, LinkedIn, Instagram } from "@mui/icons-material";
// const Footer = () => {
//     return (
//         <Box
//             component="footer"
//             sx={{
//                 backgroundColor: "#480ca8",
//                 py: 4,
//                 color: "white",
//             }}
//         >
//             <Container maxWidth="lg">
//                 <Grid container spacing={4}>
//                     <Grid item xs={12} sm={6} md={3}>
//                         <Typography
//                             variant="h6"
//                             gutterBottom
//                             sx={{ fontSize: "16px", fontWeight: "bold", lineHeight: "1.5" }}
//                         >
//                             Discover
//                         </Typography>
//                         <Box sx={{ pl: 0, fontSize: "14px" }}>
//                             <Grid container spacing={2}>
//                                 <Grid item xs={6}>
//                                     <Typography
//                                         variant="body2"
//                                         gutterBottom
//                                         sx={{ fontSize: "14px", lineHeight: "1.8" }}
//                                     >
//                                         <Link href="#" color="inherit" underline="none">
//                                             Home
//                                         </Link>
//                                     </Typography>
//                                     <Typography
//                                         variant="body2"
//                                         gutterBottom
//                                         sx={{ fontSize: "14px", lineHeight: "1.8" }}
//                                     >
//                                         <Link href="#" color="inherit" underline="none">
//                                             Terms
//                                         </Link>
//                                     </Typography>
//                                     <Typography
//                                         variant="body2"
//                                         gutterBottom
//                                         sx={{ fontSize: "14px", lineHeight: "1.8" }}
//                                     >
//                                         <Link href="#" color="inherit" underline="none">
//                                             Talent & Culture
//                                         </Link>
//                                     </Typography>
//                                 </Grid>
//                                 <Grid item xs={6}>
//                                     <Typography
//                                         variant="body2"
//                                         gutterBottom
//                                         sx={{ fontSize: "14px", lineHeight: "1.8" }}
//                                     >
//                                         <Link href="#" color="inherit" underline="none">
//                                             Refund Policy
//                                         </Link>
//                                     </Typography>
//                                     <Typography
//                                         variant="body2"
//                                         gutterBottom
//                                         sx={{ fontSize: "14px", lineHeight: "1.8" }}
//                                     >
//                                         <Link href="#" color="inherit" underline="none">
//                                             EMI Policy
//                                         </Link>
//                                     </Typography>
//                                     <Typography
//                                         variant="body2"
//                                         gutterBottom
//                                         sx={{ fontSize: "14px", lineHeight: "1.8" }}
//                                     >
//                                         <Link href="#" color="inherit" underline="none">
//                                             Privacy Policy
//                                         </Link>
//                                     </Typography>
//                                 </Grid>
//                             </Grid>
//                         </Box>
//                     </Grid>

//                     <Grid item xs={12} sm={6} md={3}>
//                         <Typography
//                             variant="h6"
//                             gutterBottom
//                             sx={{ fontSize: "16px", fontWeight: "bold", lineHeight: "1.5" }}
//                         >
//                             Payment Methods
//                         </Typography>
//                         <Box
//                             sx={{
//                                 display: "grid",
//                                 gridTemplateColumns: "repeat(1, 1fr)",
//                                 gap: "8px",
//                             }}
//                         >
//                             <img
//                                 src="https://signup.sslcommerz.com/assets/global/img/paywith_mobile_versionW.png"
//                                 alt="Payment Method"
//                                 style={{ maxWidth: "80%" }}
//                             />
//                         </Box>
//                     </Grid>

//                     <Grid item xs={12} sm={6} md={3}>
//                         <Typography
//                             variant="h6"
//                             gutterBottom
//                             sx={{ fontSize: "16px", fontWeight: "bold", lineHeight: "1.5" }}
//                         >
//                             Need Help?
//                         </Typography>
//                         <Typography
//                             variant="body2"
//                             gutterBottom
//                             sx={{ fontSize: "14px", lineHeight: "1.8" }}
//                         >
//                             We&apos;re here for you 24/7! Reach out to us through Messenger or
//                             call anytime, day or night, for the support you need.
//                         </Typography>
//                         <Typography
//                             variant="h6"
//                             gutterBottom
//                             sx={{
//                                 fontSize: "16px",
//                                 fontWeight: "bold",
//                                 lineHeight: "1.5",
//                                 mt: 2,
//                             }}
//                         >
//                             Experience Center
//                         </Typography>
//                         <Typography
//                             variant="body2"
//                             sx={{ fontSize: "14px", lineHeight: "1.8" }}
//                         >
//                             CareerCove, Dhaka
//                         </Typography>
//                     </Grid>

//                     <Grid item xs={12} sm={6} md={3}>
//                         <Typography
//                             variant="h6"
//                             gutterBottom
//                             sx={{ fontSize: "16px", fontWeight: "bold", lineHeight: "1.5" }}
//                         >
//                             Contact
//                         </Typography>
//                         <Typography
//                             variant="body2"
//                             sx={{ fontSize: "14px", lineHeight: "1.8" }}
//                         >
//                             info@CareerCove.com
//                             <br />
//                             +88 09678 232425
//                         </Typography>
//                         <Box sx={{ display: "flex", gap: "12px", mt: 2 }}>
//                             <Link
//                                 href="https://www.facebook.com/innovatica.software"
//                                 color="inherit"
//                                 underline="none"
//                                 sx={{
//                                     display: "flex",
//                                     alignItems: "center",
//                                     justifyContent: "center",
//                                     width: "36px",
//                                     height: "36px",
//                                     borderRadius: "50%",
//                                     backgroundColor: "#3b5998",
//                                     color: "white",
//                                     transition: "background-color 0.3s",
//                                     "&:hover": {
//                                         backgroundColor: "#2d4373",
//                                     },
//                                 }}
//                             >
//                                 <Facebook />
//                             </Link>
//                             <Link
//                                 href="https://www.linkedin.com/company/innovatica-software-lab-ltd"
//                                 color="inherit"
//                                 underline="none"
//                                 sx={{
//                                     display: "flex",
//                                     alignItems: "center",
//                                     justifyContent: "center",
//                                     width: "36px",
//                                     height: "36px",
//                                     borderRadius: "50%",
//                                     backgroundColor: "#0A66C2",
//                                     color: "white",
//                                     transition: "background-color 0.3s",
//                                     "&:hover": {
//                                         backgroundColor: "#003b75",
//                                     },
//                                 }}
//                             >
//                                 <LinkedIn />
//                             </Link>
//                             <Link
//                                 href="https://www.instagram.com/innovatica_software"
//                                 color="inherit"
//                                 underline="none"
//                                 sx={{
//                                     display: "flex",
//                                     alignItems: "center",
//                                     justifyContent: "center",
//                                     width: "36px",
//                                     height: "36px",
//                                     borderRadius: "50%",
//                                     backgroundColor: "#E4405F",
//                                     color: "white",
//                                     transition: "background-color 0.3s",
//                                     "&:hover": {
//                                         backgroundColor: "#D81B60",
//                                     },
//                                 }}
//                             >
//                                 <Instagram />
//                             </Link>
//                         </Box>
//                     </Grid>
//                 </Grid>
//                 <Divider sx={{ mt: 2 }} />
//                 <Box
//                     sx={{
//                         mt: 2,
//                         textAlign: "center",
//                     }}
//                 >
//                     <Typography
//                         variant="body2"
//                         sx={{ fontSize: "14px", lineHeight: "1.5" }}
//                     >
//                         © Copyright CareerCove
//                     </Typography>
//                 </Box>
//             </Container>
//         </Box>
//     );
// };
// export default Footer;
import './Footer.css';
import { FaInstagram, FaDribbble, FaTwitter, FaYoutube } from 'react-icons/fa';
import { CiLocationArrow1 } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {/* Copyright Section */}
          <div className="sm:col-span-2">
            <p className="text-sm text-white">Copyright © 2020 Nexcent Ltd.</p>
            <p className="text-sm text-white">All rights reserved</p>
            <div className="flex items-center mt-4 space-x-4">
              <a href="#" className="text-white hover:text-gray-400">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaDribbble size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <p className="font-semibold text-gray-300">Company</p>
            <div className="flex flex-col mt-5 space-y-2">
              <a href="#" className="text-gray-400 hover:text-blue-500 hover:underline">
                About us
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 hover:underline">
                Blog
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 hover:underline">
                Contact us
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 hover:underline">
                Bookings
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 hover:underline">
                Testimonials
              </a>
            </div>
          </div>

          {/* Support Links */}
          <div>
            <p className="font-semibold text-gray-300">Support</p>
            <div className="flex flex-col mt-5 space-y-2">
              <a href="#" className="text-gray-400 hover:text-blue-500 hover:underline">
                Help center
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 hover:underline">
                Terms of service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 hover:underline">
                Legal
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 hover:underline">
                Privacy policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 hover:underline">
                Status
              </a>
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <p className="font-semibold text-gray-300">Stay up to date</p>
            <div className="mt-5">
  <form className="relative">
    <input
      type="email"
      placeholder="Your email address"
      className="w-full px-4 py-2 pr-12 text-gray-800 rounded-lg focus:outline-none"
    />
    <button
      type="submit"
      className="absolute inset-y-0 right-0 px-4"
    >
     <CiLocationArrow1/>
    </button>
  </form>
</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
