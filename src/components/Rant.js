import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import PropTypes from "prop-types";
import MyButton from "../util/MyButton";
import DeleteRant from "./DeleteRant";
import RantDialog from "./RantDialog";
//Material UI Stuff
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
// Icons
import ChatIcon from "@material-ui/icons/Chat";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
// Redux
import { connect } from "react-redux";
import { likeRant, unlikeRant } from "../redux/actions/dataActions";
import dataReducer from "../redux/reducers/dataReducer";

const styles = {
  card: {
    position: "relative",
    display: "flex",
    marginBottom: 20
  },
  image: {
    minWidth: 200
  },
  content: {
    padding: 25,
    objectFit: "cover"
  }
};

export class Rant extends Component {
  likedRant = () => {
    if (
      this.props.user.likes &&
      this.props.user.likes.find(like => like.rantId === this.props.rant.rantId)
    )
      return true;
    else return false;
  };
  likeRant = () => {
    this.props.likeRant(this.props.rant.rantId);
  };
  unlikeRant = () => {
    this.props.unlikeRant(this.props.rant.rantId);
  };
  render() {
    dayjs.extend(relativeTime);
    const {
      classes,
      rant: {
        body,
        createdAt,
        userImage,
        userHandle,
        rantId,
        likeCount,
        commentCount
      },
      user: {
        authenticated,
        credentials: { handle }
      }
    } = this.props;

    const likeButton = !authenticated ? (
      <MyButton tip="Like">
        <Link to="/login">
          <FavoriteBorder color="primary" />
        </Link>
      </MyButton>
    ) : this.likedRant() ? (
      <MyButton tip="Undo Like" onClick={this.unlikeRant}>
        <FavoriteIcon color="primary" />
      </MyButton>
    ) : (
      <MyButton tip="Like" onClick={this.likeRant}>
        <FavoriteBorder color="primary" />
      </MyButton>
    );
    const deleteButton =
      authenticated && userHandle === handle ? (
        <DeleteRant rantId={rantId} />
      ) : null;
    return (
      <Card className={classes.card}>
        <CardMedia
          image={userImage}
          title="Profile Image"
          className={classes.image}
        />
        <CardContent className={classes.content}>
          <Typography
            variant="h5"
            component={Link}
            to={`/users/${userHandle}`}
            color="primary"
          >
            {userHandle}
          </Typography>
          {deleteButton}
          <Typography variant="body2" color="textSecondary">
            {dayjs(createdAt).fromNow()}
          </Typography>
          <Typography variant="body1">{body}</Typography>
          {likeButton}
          <span>{likeCount} Likes</span>
          <MyButton tip="comments">
            <ChatIcon color="primary" />
          </MyButton>
          <span>{commentCount} Comments</span>
          <RantDialog rantId={rantId} userHandle={userHandle} />
        </CardContent>
      </Card>
    );
  }
}

Rant.propTypes = {
  likeRant: PropTypes.func.isRequired,
  unlikeRant: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  rant: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

const mapActionsToProps = {
  likeRant,
  unlikeRant
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Rant));
