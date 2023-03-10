import { Box, CssBaseline, Toolbar } from "@mui/material";
import React from "react";
import ResponsiveDrawer from "./ResponsiveDrawer";
import NavBar from "./NavBar";

const Layout = ({ handleActiveLink, activelink, children }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerWidth = 240;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* ///////////////////////////////App Bar Code//////////////////////////////////// */}
      <NavBar
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />
      {/* /////////////////////////Rasponsive Drawer Code//////////////////////////////// */}
      <ResponsiveDrawer
        activelink={activelink}
        handleActiveLink={handleActiveLink}
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
