import React from "react";
import { Button, Menu, MenuItem } from "semantic-ui-react";
import { useStore } from "../stores/store";

const NavBar = () => {
  const {activityStore} = useStore();
  return (
    <Menu inverted fixed="top">
      <MenuItem header>
        <img src="/assets/logo.png" alt="logo" style={{marginRight:'15px'}} />
        Reactivties
      </MenuItem>
      <MenuItem name="Activities" />
      <MenuItem>
        <Button positive onClick = {()=>activityStore.openForm()} content="Create Activity" />
      </MenuItem>
    </Menu>
  );
};

export default NavBar;
