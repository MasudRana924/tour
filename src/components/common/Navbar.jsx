import { useState } from "react";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
// import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
// import Drawer from "@mui/material/Drawer";
// import MenuIcon from "@mui/icons-material/Menu";
export const Navbar = () => {
    // const [open, setOpen] = useState(false);
    //   const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    // const toggleDrawer = (newOpen) => () => {
    //     setOpen(newOpen);
    // };
    // const scrollToSection = (sectionId) => {
    //     const sectionElement = document.getElementById(sectionId);
    //     const offset = 128;
    //     if (sectionElement) {
    //         const targetScroll = sectionElement.offsetTop - offset;
    //         sectionElement.scrollIntoView({ behavior: "smooth" });
    //         window.scrollTo({
    //             top: targetScroll,
    //             behavior: "smooth",
    //         });
    //         setOpen(false);
    //     }
    // };

    return (
        <Box>
            <AppBar
                position="fixed"
                sx={{
                    bgcolor: "rgba(255, 255, 255, 0.4)",
                    backdropFilter: "blur(24px)",
                    boxShadow: `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`,
                    backgroundImage: "none",
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar
                        variant="regular"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexShrink: 0,
                            maxHeight: 40,
                        }}
                    >
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: "flex",
                                alignItems: "center",
                                ml: "-18px",
                                px: 0,
                            }}
                        >
                            {/* <Link to="/">
                                <Typography variant="h5" className="text-violet-500 text-xl">
                                    CareerCove
                                </Typography>
                            </Link> */}
                            <Box sx={{ display: { xs: "none", md: "flex" } }}>
                                <MenuItem
                                    onClick={() => scrollToSection("features")}
                                    sx={{ py: "6px", px: "12px" }}
                                >
                                    {/* Add content if necessary */}
                                </MenuItem>
                                <MenuItem
                                    onClick={() => scrollToSection("testimonials")}
                                    sx={{ py: "6px", px: "12px" }}
                                >
                                    {/* Add content if necessary */}
                                </MenuItem>
                                <MenuItem
                                    onClick={() => scrollToSection("highlights")}
                                    sx={{ py: "6px", px: "12px" }}
                                >
                                    <Typography variant="body2" color="text.primary">
                                        Home
                                    </Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => scrollToSection("pricing")}
                                    sx={{ py: "6px", px: "12px" }}
                                >
                                    <Typography variant="body2" color="text.primary">
                                        Join Tour
                                    </Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => scrollToSection("faq")}
                                    sx={{ py: "6px", px: "12px" }}
                                >
                                    <Typography variant="body2" color="text.primary">
                                        Tour Guides
                                    </Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => scrollToSection("faq")}
                                    sx={{ py: "6px", px: "12px" }}
                                >
                                    <Typography variant="body2" color="text.primary">
                                        Restaurants
                                    </Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => scrollToSection("faq")}
                                    sx={{ py: "6px", px: "12px" }}
                                >
                                    <Typography variant="body2" color="text.primary">
                                        Bookings
                                    </Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => scrollToSection("faq")}
                                    sx={{ py: "6px", px: "12px" }}
                                >
                                    <Typography variant="body2" color="text.primary">
                                        Pages
                                    </Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => scrollToSection("faq")}
                                    sx={{ py: "6px", px: "12px" }}
                                >
                                    <Typography variant="body2" color="text.primary">
                                        Dashboard
                                    </Typography>
                                </MenuItem>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: { xs: "none", md: "flex" },
                                gap: 0.5,
                                alignItems: "center",
                            }}
                        >

                            <Button
                                color="primary"
                                variant="text"
                                size="small"
                                component={Link}
                                to="/user/login"
                            >
                                Sign in
                            </Button>
                            <Button
                                color="primary"
                                variant="contained"
                                size="small"
                                component="a"
                                href="/sign-up/"
                            >
                                Register
                            </Button>
                        </Box>
                        {/* <Box sx={{ display: { sm: "", md: "none" } }}>
                            <Button
                                variant="text"
                                color="primary"
                                aria-label="menu"
                                onClick={toggleDrawer(true)}
                                sx={{ minWidth: "30px", p: "4px" }}
                            >
                                <MenuIcon />
                            </Button>
                            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                                <Box
                                    sx={{
                                        minWidth: "60dvw",
                                        p: 2,
                                        backgroundColor: "background.paper",
                                        flexGrow: 1,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "end",
                                            flexGrow: 1,
                                        }}
                                    >

                                    </Box>
                                    <MenuItem onClick={() => scrollToSection("features")}>
                                        For Sale
                                    </MenuItem>
                                    <MenuItem onClick={() => scrollToSection("testimonials")}>
                                        For Rent
                                    </MenuItem>
                                    <MenuItem onClick={() => scrollToSection("highlights")}>
                                        Highlights
                                    </MenuItem>
                                    <MenuItem onClick={() => scrollToSection("pricing")}>
                                        Pricing
                                    </MenuItem>
                                    <MenuItem onClick={() => scrollToSection("faq")}>
                                        FAQ
                                    </MenuItem>
                                    <Divider />
                                    {!isAuthenticated && (
                                        <>
                                            <MenuItem>
                                                <Button
                                                    color="primary"
                                                    variant="contained"
                                                    component={Link}
                                                    to="/material-ui/getting-started/templates/sign-up/"
                                                    target="_blank"
                                                    sx={{ width: "100%" }}
                                                >
                                                    Sign up
                                                </Button>
                                            </MenuItem>
                                            <MenuItem>
                                                <Button
                                                    color="primary"
                                                    variant="outlined"
                                                    component={Link}
                                                    to="/material-ui/getting-started/templates/sign-in/"
                                                    target="_blank"
                                                    sx={{ width: "100%" }}
                                                >
                                                    Sign in
                                                </Button>
                                            </MenuItem>
                                        </>
                                    )}
                                </Box>
                            </Drawer>
                        </Box> */}
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};

export default Navbar;
