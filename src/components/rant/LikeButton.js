import React, { Component } from "react";
import MyButton from "../../util/MyButton";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// Icons
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
// Redux
import { connect } from "react-redux";
import { likeRant, unlikeRant } from "../../redux/actions/dataActions";

export class LikeButton extends Component {
  likedRant = () => {
    if (
      this.props.user.likes &&
      this.props.user.likes.find(like => like.rantId === this.props.rantId)
    )
      return true;
    else return false;
  };
  likeRant = () => {
    this.props.likeRant(this.props.rantId);
  };
  unlikeRant = () => {
    this.props.unlikeRant(this.props.rantId);
  };
  render() {
    const { authenticated } = this.props.user;
    const likeButton = !authenticated ? (
      <Link to="/login">
        <MyButton tip="Like">
          <FavoriteBorder color="error" />
        </MyButton>
      </Link>
    ) : this.likedRant() ? (
      <MyButton tip="Undo Like" onClick={this.unlikeRant}>
        <FavoriteIcon color="error" />
      </MyButton>
    ) : (
      <MyButton tip="Like" onClick={this.likeRant}>
        <FavoriteBorder color="error" />
      </MyButton>
    );
    return likeButton;
  }
}

LikeButton.propTypes = {
  user: PropTypes.object.isRequired,
  rantId: PropTypes.string.isRequired,
  likeRant: PropTypes.func.isRequired,
  unlikeRant: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

const mapActionsToProps = {
  likeRant,
  unlikeRant
};

export default connect(mapStateToProps, mapActionsToProps)(LikeButton);
