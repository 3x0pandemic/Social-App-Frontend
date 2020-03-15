import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MyButton from "../../util/MyButton";
import PostRant from "../rant/PostRant";
import Notifications from "./Notifications";
// Material UI Stuff
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
// Icons
import HomeIcon from "@material-ui/icons/Home";

export class Navbar extends Component {
  render() {
    const { authenticated } = this.props;
    return (
      <AppBar>
        <Toolbar className="nav-container">
          {authenticated ? (
            <Fragment>
              <PostRant />
              <Link to="/">
                <MyButton tip="Home">
                  <HomeIcon />
                </MyButton>
              </Link>
              <Notifications />
            </Fragment>
          ) : (
            <Fragment>
              <div className="text-button">
                <Button
                  variant="contained"
                  color="secondary"
                  component={Link}
                  to="/login"
                >
                  Login
                </Button>
              </div>
              <div className="text-button">
                <Button
                  variant="contained"
                  color="secondary"
                  component={Link}
                  to="/"
                >
                  Home
                </Button>
              </div>
              <div className="text-button">
                <Button
                  variant="contained"
                  color="secondary"
                  component={Link}
                  to="signup"
                >
                  Signup
                </Button>
              </div>
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  authenticated: state.user.authenticated
});

export default connect(mapStateToProps)(Navbar);
