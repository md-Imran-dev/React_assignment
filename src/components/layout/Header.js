import React from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  Avatar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50ch",
    },
  },
}));

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ backgroundColor: "white" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar sx={{ bgcolor: "#5e35b1", width: 32, height: 32, mr: 1 }}>
              Q
            </Avatar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" }, fontWeight: "bold" }}
            >
              Quotient
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              size="large"
              aria-label="show notifications"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
              <Avatar sx={{ bgcolor: "#5e35b1", width: 36, height: 36 }}>
                MS
              </Avatar>
              <Box sx={{ ml: 1, display: { xs: "none", sm: "block" } }}>
                <Typography variant="body2" component="div">
                  Manoj Sharma
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Super Admin
                </Typography>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        sx={{ bgcolor: "white", px: 3, py: 1, borderBottom: "1px solid #eee" }}
      >
        <Typography variant="body2" color="text.secondary">
          CRM / Account / Account Details
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
