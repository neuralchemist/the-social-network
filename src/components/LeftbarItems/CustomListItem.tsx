import React from "react";
// mui 5
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// custom types
type Props = {
  icon: React.ReactNode;
  text: string;
};

function CustomListItem({ icon, text }: Props) {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText secondary={text} />
      </ListItemButton>
    </ListItem>
  );
}

export default CustomListItem;
