// mui 5
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

export const HomeStack = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  [theme.breakpoints.up("xl")]: {
    width: 1400,
    margin: "0 auto",
  },
}));
