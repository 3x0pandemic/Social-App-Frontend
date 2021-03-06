import React, { Component, Fragment } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import MyButton from "../../util/MyButton";

// MUI Stuff
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/Button";
// Icons
import DeleteOutline from "@material-ui/icons/DeleteOutline";
// Redux
import { connect } from "react-redux";
import { deleteRant } from "../../redux/actions/dataActions";

const styles = {
  deleteButton: {
    position: "absolute",
    top: "10%",
    left: "90%"
  }
};

class DeleteRant extends Component {
  state = {
    open: false
  };
  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  deleteRant = () => {
    this.props.deleteRant(this.props.rantId);
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <MyButton
          tip="Delete  Rant"
          onClick={this.handleOpen}
          btnClassName={classes.deleteButton}
        >
          <DeleteOutline color="secondary" />
        </MyButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>
            Are You Sure You Want To Delete This Rant? Rants Cannot Be Retrieved
            Once Deleted.
          </DialogTitle>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.deleteRant} color="secondary">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

DeleteRant.propTypes = {
  deleteRant: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  rantId: PropTypes.string.isRequired
};

export default connect(null, { deleteRant })(withStyles(styles)(DeleteRant));
