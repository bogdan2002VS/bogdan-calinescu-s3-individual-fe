import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { setLoggedUser } from '../../redux/userSlice';
import MenuItem from "@mui/material/MenuItem";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import { NavLink } from "react-router-dom";
import eat from "../../assets/eat.png";
import { HamburgerLink, LinkStyle } from "./Navbar.styled";
import { useDispatch } from 'react-redux';
import { Link } from "@mui/material";
const NavBar = () => {
  // const [isOpen, setIsOpen] = React.useState(
  //   JSON.parse(sessionStorage.getItem("userInfo")) || false
  // );

  const handleOut = () => {
    // setIsOpen(false);
    window.sessionStorage.clear();
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const dispatch = useDispatch();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };


  return (
    <AppBar position="sticky" style={{ background: "#046A38" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar
            alt="eat"
            src={eat}
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component={NavLink}
            to="/home"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {`Veganny`}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu} sx={{ p: 0, m: 0 }}>
                <HamburgerLink>
                  <NavLink
                    to={`/create-recipe`}
                    style={{
                      color: "black",
                      textDecoration: "none",
                    }}
                  >
                    Create Recipe
                  </NavLink>

                  <NavLink
                    to={`/`}
                    onClick={handleOut}
                    style={{
                      color: "black",
                      textDecoration: "none",
                    }}

                  >
                    Logout
                  </NavLink>
                </HamburgerLink>
              </MenuItem>
            </Menu>
          </Box>
          <LocalDiningIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />

          <Typography
            variant="h5"
            noWrap
            component={NavLink}
            to="/home"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "green",
              textDecoration: "none",
            }}
          >
            {`Veganny`}
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            { }
            <LinkStyle>

            
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                }}
              >
                { }
                <LinkStyle>

                  <NavLink
                    to={`/create-recipe`}
                    style={({ isActive }) => ({
                      color: isActive ? "white " : "#d8dfe979",
                      textDecoration: "none",
                    })}
                  >
                    Create Recipe
                  </NavLink>

                  {/* Add NavLink to Community-Recipe page here */}
                  <NavLink
                    to={`/community-recipe`}
                    style={({ isActive }) => ({
                      color: isActive ? "white " : "#d8dfe979",
                      textDecoration: "none",
                    })}
                  >
                    Community Recipe
                  </NavLink>

                  <NavLink
                    to={`/`}
                    onClick={handleOut}
                    style={({ isActive }) => ({
                      color: isActive ? "white " : "#d8dfe979",
                      textDecoration: "none",
                    })}

                  >
                    Logout
                    {/* {userInfo ? `LogOut` : `Login`} */}
                  </NavLink>
                </LinkStyle>
              </Box>
              
              </LinkStyle>
          </Box>

          <Box sx={{ flexGrow: 0 }}>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            ></Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );

  // ) : null;
};
export default NavBar;
