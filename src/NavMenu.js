import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-static";

const options = [
  { route: "/", name: "Home" },
  { route: "/events", name: "Events" },
  { route: "/wtf", name: "D.A.D?" }
];

const ITEM_HEIGHT = 48;

class NavMenu extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={open ? "long-menu" : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              width: 200
            }
          }}
        >
          {options.map(option => (
            <MenuItem key={option.route} onClick={this.handleClose}>
              <Link className="link__hide-astyle" exact to={option.route}>
                {option.name}
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

export default NavMenu;
