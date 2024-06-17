
import { Button, Menu, MenuItem } from "semantic-ui-react";

import { NavLink } from "react-router-dom";

const NavBar = () => {
  
  return (
    <Menu inverted fixed="top">
      <MenuItem as = {NavLink} to="/" header>
        <img src="/assets/logo.png" alt="logo" style={{marginRight:'15px'}} />
        Reactivties
      </MenuItem>
      <MenuItem as = {NavLink} to="/activities" name="Activities" />
      <MenuItem>
        <Button as = {NavLink} to="/createActivity" positive content="Create Activity" />
      </MenuItem>
    </Menu>
  );
};

export default NavBar;
