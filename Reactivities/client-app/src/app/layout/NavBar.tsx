import React from "react";
import { Button, Menu, MenuItem } from "semantic-ui-react";
interface Props {
  openForm : ()=>void ;
}
const NavBar = ({openForm}: Props) => {
  return (
    <Menu inverted fixed="top">
      <MenuItem header>
        <img src="/assets/logo.png" alt="logo" style={{marginRight:'15px'}} />
        Reactivties
      </MenuItem>
      <MenuItem name="Activities" />
      <MenuItem>
        <Button positive onClick = {openForm} content="Create Activity" />
      </MenuItem>
    </Menu>
  );
};

export default NavBar;
