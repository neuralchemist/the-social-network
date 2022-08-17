// mui 5
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const LeftbarBox = styled(Box)(({ theme }) => ({
  display: "none",

  [theme.breakpoints.up("lg")]: {
    display: "block",
    padding: theme.spacing(1),
    flex: 1,
    maxWidth: 280,
  },
}));
