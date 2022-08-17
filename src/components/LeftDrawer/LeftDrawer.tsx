import * as React from "react";
// mui 5
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
// custom components
import LeftbarItems from "../LeftbarItems";

type Props = {
  open: boolean;
  handleClose: () => void;
};

function LeftDrawer({ open, handleClose }: Props) {
  return (
    <div>
      <Drawer anchor="left" open={open} onClose={handleClose}>
        <Box sx={{ width: 280 }} role="presentation">
          <LeftbarItems />
        </Box>
      </Drawer>
    </div>
  );
}

export default LeftDrawer;
