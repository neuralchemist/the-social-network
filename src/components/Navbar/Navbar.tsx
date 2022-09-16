import React, { useState } from "react";
// Mui 5
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
// custom components
import { CustomToolbar, LogoDesktop, LogoMobile } from "./styledComponents";
import { SearchBox, IconsDesktop, IconsMobile } from "./styledComponents";
import { CustomAvatar, CustomBadge } from "./styledComponents";
import UserMenu from "./UserMenu";
import LeftDrawer from "../LeftDrawer";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => setIsDrawerOpen(true);
  const handleDrawerClose = () => setIsDrawerOpen(false);
  return (
    <AppBar position="sticky" elevation={0}>
      <CustomToolbar>
        {/* Logo */}
        <LogoDesktop>
          <Typography variant="h6">The Social Network</Typography>
        </LogoDesktop>

        <LogoMobile>
          <IconButton onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
          <ChildCareIcon />
        </LogoMobile>

        {/* Search */}
        <Box flex={4}>
          <SearchBox>
            <InputBase placeholder="search..." />
          </SearchBox>
        </Box>

        {/* Icons */}
        <IconsDesktop>
          <CustomBadge badgeContent={4} color="error">
            <MailIcon color="inherit" />
          </CustomBadge>
          <CustomBadge badgeContent={4} color="error">
            <NotificationsIcon color="inherit" />
          </CustomBadge>
          <CustomAvatar onClick={handleClick}>T</CustomAvatar>
        </IconsDesktop>

        <IconsMobile flex={2} onClick={handleClick}>
          <CustomAvatar>T</CustomAvatar>
        </IconsMobile>
      </CustomToolbar>
      <UserMenu open={open} handleClose={handleClose} anchorEl={anchorEl} />
      <LeftDrawer open={isDrawerOpen} handleClose={handleDrawerClose} />
    </AppBar>
  );
}

export default Navbar;
