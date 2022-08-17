// mui 5
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const FeedsBox = styled(Box)(({ theme }) => ({
  flex: 4,
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(1),
  },
}));
