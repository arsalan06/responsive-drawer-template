import * as React from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Person2Icon from "@mui/icons-material/Person2";
import Groups2Icon from "@mui/icons-material/Groups2";
import softCirclesLogo from "../assets/softCirclesLogo.png";

const drawerWidth = 240;

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

const StyledListItemButton = styled(ListItemButton)(
  ({ theme, to, activelink }) => ({
    backgroundColor: to === activelink && `#1E81FD !important`,
    color: to === activelink ? "#fff" : "inherit",
    borderRadius: "8px",
    border: to === activelink ? "#fff solid 1px" : "inherit",
  })
);

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

function ResponsiveDrawerFullCode({
  window,
  handleActiveLink,
  activelink,
  children,
}) {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
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
        {/* <IconButton
          sx={{ backgroundColor: "blue !important", display: { sm: "hidden" } }}
          onClick={handleDrawerToggle}
        >
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton> */}
      </DrawerHeader>
      <WhiteDivider />
      <List>
        {pages.map((page) => {
          return (
            <>
              <NavLink to={page.to} style={{ textDecoration: "none" }}>
                <ListItem key={page.name} disablePadding>
                  <StyledListItemButton
                    disableTouchRipple
                    disableRipple
                    to={page.to}
                    activelink={activelink}
                    onClick={() => {
                      handleActiveLink(page.to);
                    }}
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
              </NavLink>
            </>
          );
        })}
      </List>
    </div>
  );

  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "white",
          color: "black",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
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
          {drawer}
        </Drawer>
      </Box>

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
}

export default ResponsiveDrawerFullCode;
