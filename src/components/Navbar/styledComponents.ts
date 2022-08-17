// mui 5
import { styled, alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";

export const CustomToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.up("xl")]: {
    width: 1400,
    margin: "0 auto",
  },
}));

export const LogoDesktop = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("lg")]: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-start",
  },
}));

export const LogoMobile = styled(Box)(({ theme }) => ({
  display: "flex",
  flex: 2,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: theme.spacing(1),

  [theme.breakpoints.up("lg")]: {
    display: "none",
  },
}));

// Modify for screen size

export const SearchBox = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  maxWidth: 400,
  margin: "0 auto",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },

  padding: theme.spacing(1),
}));

export const IconsDesktop = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("lg")]: {
    display: "flex",
    flex: 2,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: theme.spacing(2),
  },
}));

export const IconsMobile = styled(Box)(({ theme }) => ({
  display: "flex",
  flex: 2,
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: theme.spacing(1),
  cursor: "pointer",
  [theme.breakpoints.up("lg")]: {
    display: "none",
  },
}));

export const CustomBadge = styled(Badge)(({ theme }) => ({
  cursor: "pointer",
}));

export const CustomAvatar = styled(Avatar)(({ theme }) => ({
  cursor: "pointer",
  width: theme.spacing(4),
  height: theme.spacing(4),
}));
