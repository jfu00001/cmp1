import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material-next/Button";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import logo from "../../logo.svg";

function Navbar(props) {
  const navbarHeight = isMobile ? "10vh" : "10vh";
  const { t } = useTranslation();
  let navItems = [
    ["/", t("navbar.home")],
    ["/aboutus", t("navbar.about-us")],
    ["/services", t("navbar.services")],
    ["/projects", t("navbar.projects")],
    ["/contactus", t("navbar.contact-us")],
  ];

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img
          src={logo}
          alt="Logo"
          style={{ width: "-webkit-fill-available" }}
        />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item[1]} sx={{ display: "block" }}>
            <Link to={item[0]} sx={{ display: "inherit" }}>
              {item[0] === location.pathname ? (
                <Button
                  sx={{
                    color: "white",
                    backgroundColor: "#0585A6",
                    width: "100%",
                  }}
                  variant="contained"
                >
                  {item[1]}
                </Button>
              ) : (
                <Button sx={{ color: "black", width: "100%" }}>
                  {item[1]}
                </Button>
              )}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex", height: navbarHeight }}>
      <CssBaseline />
      <AppBar component="nav" style={{ background: "white", height: navbarHeight }}>
        <Toolbar>
          {isMobile ? (
            <>
              <Link to="/">
                <img src={logo} alt="Mobile Logo" style={{ height: navbarHeight }} />
              </Link>
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  width: "-webkit-fill-available",
                }}
              >
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: "none" }, color: "#0585A6" }}
                >
                  <MenuIcon />
                </IconButton>
              </div>
            </>
          ) : null}

          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              marginLeft: "10%",
            }}
            color="black"
          >
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </Typography>
          <Box
            sx={{ display: { xs: "none", sm: "block" }, marginRight: "10%" }}
          >
            {navItems.map((item) => (
              <Link to={item[0]}>
                {item[0] === location.pathname ? (
                  <Button
                    sx={{ color: "white", backgroundColor: "#0585A6" }}
                    variant="contained"
                  >
                    {item[1]}
                  </Button>
                ) : (
                  <Button sx={{ color: "black" }}>{item[1]}</Button>
                )}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "90%",
              borderRadius: "0px 25px 25px 0px",
              height: "90%",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box height={navbarHeight} />
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
