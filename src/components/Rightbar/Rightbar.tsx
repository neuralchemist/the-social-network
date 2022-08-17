import React from "react";
// mui 5
import Box from "@mui/material/Box";
// custom components
import OnlineFriends from "./OnlineFriends";
import Stories from "./Stories";
import { RightbarBox } from "./styledComponents";

function Rightbar() {
  return (
    <RightbarBox>
      <Box sx={{ position: "fixed", maxWidth: "inherit" }}>
        <OnlineFriends />
        <Stories  />
      </Box>
    </RightbarBox>
  );
}

export default Rightbar;
