import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import softCirclesLogo from "../../assets/softCirclesLogo.png";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Person2Icon from "@mui/icons-material/Person2";
import Groups2Icon from "@mui/icons-material/Groups2";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-center",
  backgroundColor: "black",
}));

const WhiteDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: "white",
}));

const StyledListItemButton = styled(ListItemButton)(() => ({
  "&.active": {
    backgroundColor: `#1E81FD !important`,
    color: "#fff",
    borderRadius: "20px",
    border: "#fff solid 1px",
  },
  "&:hover": {
    backgroundColor: `#1E81FD !important`,
    color: "#fff",
    borderRadius: "20px",
    border: "#fff solid 1px",
  },
}));

// const StyledListItemButton = styled(ListItemButton)(({ to, activelink }) => ({
//   backgroundColor: to === activelink && `#1E81FD !important`,
//   color: to === activelink ? "#fff" : "inherit",
//   borderRadius: "8px",
//   border: to === activelink ? "#fff solid 1px" : "none",
// }));

const pages = [
  {
    name: "Dashboard",
    to: "/",
    icon: DashboardIcon,
  },
  {
    name: "Profile",
    to: "/second-section",
    icon: Person2Icon,
  },
  {
    name: "Self Service",
    to: "/third-section",
    icon: Groups2Icon,
  },
];

const ResponsiveDrawer = ({
  activelink,
  handleActiveLink,
  drawerWidth,
  handleDrawerToggle,
  mobileOpen,
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant={isSmallScreen ? "temporary" : "permanent"}
        open={isSmallScreen ? mobileOpen : true}
        onClose={isSmallScreen ? handleDrawerToggle : undefined}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "black",
            color: "white",
          },
        }}
      >
        <DrawerHeader>
          <Toolbar />
          <Box
            sx={{
              maxWidth: 130,
            }}
            component="img"
            alt="logo"
            src={softCirclesLogo}
          ></Box>
        </DrawerHeader>
        <WhiteDivider />
        <List>
          {pages.map((page) => {
            return (
              <>
                <ListItem key={page.name} disablePadding>
                  <StyledListItemButton
                    component={NavLink}
                    disableTouchRipple
                    disableRipple
                    to={page.to}
                    // activelink={activelink}
                    // onClick={()=>{handleActiveLink(page.to)}}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: "30px !important",
                        color: "white !important",
                      }}
                    >
                      <page.icon />
                    </ListItemIcon>

                    <ListItemText
                      alignSelf="start"
                      sx={{
                        color: "white",
                        textDecoration:
                          page.to === activelink ? "underline" : "none",
                      }}
                    >
                      {page.name}
                    </ListItemText>
                  </StyledListItemButton>
                </ListItem>
              </>
            );
          })}
        </List>
      </Drawer>
    </Box>
  );
};

export default ResponsiveDrawer;
