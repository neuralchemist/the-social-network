import React from "react";
// mui  5
import List from "@mui/material/List";
import GroupIcon from "@mui/icons-material/Group";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CasinoIcon from "@mui/icons-material/Casino";
// custom components

import CustomListItem from "./CustomListItem";
import ToggleThemeSwitch from "./ToggleThemeSwitch";

function LeftbarItems() {
  return (
    <List>
      <CustomListItem text="Groups" icon={<GroupIcon />} />
      <CustomListItem text="Photos" icon={<PhotoLibraryIcon />} />
      <CustomListItem text="Markets" icon={<StorefrontIcon />} />
      <CustomListItem text="Games" icon={<CasinoIcon />} />
      <ToggleThemeSwitch />
    </List>
  );
}

export default LeftbarItems;
