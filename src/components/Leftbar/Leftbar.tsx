import React from "react";
// mui 5
import Box from "@mui/material/Box";
// custom components
import { LeftbarBox } from "./styledComponents";
import LeftbarItems from "../LeftbarItems";

function Leftbar() {
  return (
    <LeftbarBox>
      <Box sx={{ position: "fixed", maxWidth: "inherit" }}>
        <LeftbarItems />
      </Box>
    </LeftbarBox>
  );
}

export default Leftbar;
