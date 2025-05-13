import React from "react";
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
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import ThemeToggle from "../common/ThemeToggle";


const HeaderAppBar = styled.div`
  background-color: ${props => props.theme.colors.background.main};
  color: ${props => props.theme.colors.text.primary.light};
  box-shadow: none;
`;

const SearchWrapper = styled.div`
  position: relative;
  border-radius: ${props => props.theme.borderRadius.md};
  background-color: ${props => props.theme.mode === 'light'
    ? props.theme.colors.background.subdued
    : 'rgba(255, 255, 255, 0.15)'
  };
  margin-right: ${props => props.theme.spacing(2)};
  margin-left: 0;
  width: 100%;
  
  &:hover {
    background-color: ${props => props.theme.mode === 'light'
      ? props.theme.colors.gray['10']
      : 'rgba(255, 255, 255, 0.25)'
    };
  }
  
  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    margin-left: ${props => props.theme.spacing(3)};
    width: auto;
  }
`;

const SearchIconWrapper = styled.div`
  padding: ${props => `${props.theme.spacing(0)} ${props.theme.spacing(2)}`};
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.mode === 'light'
    ? props.theme.colors.text.secondary.dark
    : props.theme.colors.text.primary.light
  };
`;

const StyledInputBase = styled(InputBase)`
  color: inherit;
  width: 100%;
  
  .MuiInputBase-input {
    padding: ${props => props.theme.spacing(1)};
    padding-left: calc(1em + ${props => props.theme.spacing(4)});
    width: 100%;
    
    @media (min-width: ${props => props.theme.breakpoints.md}) {
      width: 50ch;
    }
  }
`;

const BreadcrumbBar = styled(Box)`
  background-color: ${props => props.theme.colors.background.main};
  border-bottom: 1px solid ${props => props.theme.colors.border.light};
padding: 12px 16px;
align-items: center;
flex-shrink: 0;
`;

const UserAvatar = styled(Avatar)`
  background-color: ${props => props.theme.mode === 'light'
    ? props.theme.colors.primary.main
    : props.theme.colors.background.main
  };
  color: ${props => props.theme.mode === 'light'
    ? props.theme.colors.text.primary.light
    : props.theme.colors.primary.main
  };
  width: 36px;
  height: 36px;
`;

// Update icon colors based on theme mode
const StyledIconButton = styled(IconButton)`
  color: ${props => props.theme.mode === 'light'
    ? props.theme.colors.text.primary.dark
    : props.theme.colors.text.primary.light
  };
`;

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <HeaderAppBar position="static">
        <Toolbar>
          <StyledIconButton
            size="large"
            edge="start"
            aria-label="open drawer"
            sx={{ mr: 2, display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </StyledIconButton>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={'/assets/images/logo-light.png'} alt="logo" width={125} height={32} />
          </Box>

          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <SearchWrapper>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
              />
            </SearchWrapper>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <StyledIconButton
              size="large"
              aria-label="show notifications"
            >
              <Badge badgeContent={4} color="error">
                <NotificationsIcon />
              </Badge>
            </StyledIconButton>
            <ThemeToggle />
            <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
              <UserAvatar>MS</UserAvatar>
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
      </HeaderAppBar>

      <BreadcrumbBar>
        <Typography variant="body2" color="text.secondary">
          CRM / Account / Account Details
        </Typography>
      </BreadcrumbBar>
    </Box>
  );
};

export default Header;