import React, { useContext } from "react";
import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  Avatar,
} from "@mui/material";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import ThemeToggle from "../common/ThemeToggle";
import ThemeContext from "../../context/ThemeContext";
import { NotificationIcon, SearchIcon } from "../../svgs/icons";

const HeaderAppBar = styled.div`
  background-color: ${(props) => props.theme.colors.background.card};
  color: ${(props) => props.theme.colors.text.primary.light};
  box-shadow: none;
  height: 64px;
  gap: 32px;
  flex-shrink: 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.border.card};
`;

const SearchWrapper = styled.div`
  position: relative;
  border-radius: 12px;
  background-color: ${(props) => props.theme.colors.background.main};
  margin-right: ${(props) => props.theme.spacing(2)};
  margin-left: 0;
  width: 100%;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 12px;
  border: 1px solid ${(props) => props.theme.colors.border.card};

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    margin-left: ${(props) => props.theme.spacing(3)};
    width: auto;
  }
`;

const StyledInputBase = styled(InputBase)`
  color: inherit;
  width: 100%;

  .MuiInputBase-input {
    padding: ${(props) => props.theme.spacing(1)};
    padding-left: ${(props) => props.theme.spacing(3)};
    width: 100%;
    font-size: 14px;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      width: 50ch;
    }
  }
`;

const BreadcrumbBar = styled(Box)`
  background-color: ${(props) => props.theme.colors.background.card};
  border-bottom: 1px solid ${(props) => props.theme.colors.border.card};
  padding: 12px 16px;
  align-items: center;
  flex-shrink: 0;
`;

const UserAvatar = styled(Avatar)`
  background-color: ${(props) =>
    props.theme.mode === "light" ? "#513CCE" : "#8378FF"};
  color: ${(props) =>
    props.theme.mode === "light"
      ? props.theme.colors.text.primary.light
      : props.theme.colors.primary.main};
  width: 36px;
  height: 36px;
`;

// Update icon colors based on theme mode
const StyledIconButton = styled(IconButton)`
  color: ${(props) =>
    props.theme.mode === "light"
      ? props.theme.colors.text.primary.dark
      : props.theme.colors.text.primary.light};
`;

const TitleText = styled.p`
  color: ${(props) => (props.theme.mode === "light" ? "#0E253C" : "#FFF")};
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
`;

const SubTitleText = styled.p`
  color: ${(props) =>
    props.theme.mode === "light"
      ? "rgba(14, 37, 60, 0.85)"
      : "rgba(255, 255, 255, 0.80)"};
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
`;

const Header = () => {
  const { isDarkMode, theme } = useContext(ThemeContext);

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
            {!isDarkMode ? (
              <img
                src={"/assets/images/logo-light.png"}
                alt="logo"
                width={125}
                height={32}
              />
            ) : (
              <img
                src={"/assets/images/logo-dark.png"}
                alt="logo"
                width={125}
                height={32}
              />
            )}
          </Box>

          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <SearchWrapper>
              <SearchIcon
                height={20}
                width={20}
                color={isDarkMode ? "#FFFFFF" : "#0E253C"}
              />
              <StyledInputBase
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
              />
            </SearchWrapper>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <StyledIconButton size="large" aria-label="show notifications">
              <Badge badgeContent={0} color="error">
                <NotificationIcon
                  height={20}
                  width={20}
                  color={isDarkMode ? "#FFFFFF" : "#0E253C"}
                  hasFillOpacity={!isDarkMode}
                />
              </Badge>
            </StyledIconButton>
            <ThemeToggle />
            <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
              <UserAvatar>MS</UserAvatar>
              <Box
                sx={{
                  ml: 1,
                  display: {
                    xs: "none",
                    sm: "block",
                  },
                }}
              >
                {/* <Typography
                  variant="body2"
                  component="div"
                  color="themetext.primary"
                >
                  Manoj Sharma
                </Typography> */}
                <TitleText>Manoj Sharma</TitleText>
                <SubTitleText>Super Admin</SubTitleText>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </HeaderAppBar>

      <BreadcrumbBar>
        <Typography variant="body2" color="text.primary">
          CRM / Account /{" "}
          <span style={{ fontWeight: 600 }}>Account Details</span>
        </Typography>
      </BreadcrumbBar>
    </Box>
  );
};

export default Header;
