// mui 5
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const RightbarBox = styled(Box)(({ theme }) => ({
  display: "none",

  [theme.breakpoints.up("md")]: {
    display: "block",
    padding: theme.spacing(1),
    flex: 2,
    maxWidth: 280,
  },
}));
