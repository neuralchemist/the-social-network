import React from "react";
// mui 5
import Switch from "@mui/material/Switch";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ModeNightIcon from "@mui/icons-material/ModeNight";
// custom context
import { useMode } from "../../context/ThemeModeContext";

function ToggleThemeSwitch() {
  const modeState = useMode();
  const handleSwitch = () => {
    modeState?.setMode((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ListItem disablePadding>
      <ListItemButton disableRipple>
        <ListItemIcon>
          <ModeNightIcon />
        </ListItemIcon>

        <Switch onChange={handleSwitch} />
      </ListItemButton>
    </ListItem>
  );
}

export default ToggleThemeSwitch;
