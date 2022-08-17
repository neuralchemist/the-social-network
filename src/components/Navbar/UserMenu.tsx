import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

type UserMenuProps = {
  open: boolean;
  handleClose: () => void;
  anchorEl: HTMLElement | null;
};
/** open when clicked on anchor element. closes when clicked elsewhere. */
function UserMenu({ open, handleClose, anchorEl }: UserMenuProps) {
  return (
    <Menu
      id="positioned-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <MenuItem>Profile</MenuItem>
      <MenuItem>My account</MenuItem>
      <MenuItem>Logout</MenuItem>
    </Menu>
  );
}

export default UserMenu;
