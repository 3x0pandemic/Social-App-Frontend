import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import PropTypes from "prop-types";
import MyButton from "../../util/MyButton";
import DeleteRant from "./DeleteRant";
import RantDialog from "./RantDialog";
import LikeButton from "./LikeButton";
//Material UI Stuff
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
// Icons
import ChatIcon from "@material-ui/icons/Chat";

// Redux
import { connect } from "react-redux";

const styles = {
  card: {
    position: "relative",
    display: "flex",
    marginBottom: 20,
    border: "7px double rgba(0,0,0,0.5)",
    maxWidth: "100%"
  },
  image: {
    minWidth: 200,
    border: "3px solid rgba(0,0,0,0.3)",
    maxHeight: 300
  },
  content: {
    padding: 25,
    objectFit: "cover"
  },
  rantBody: {
    MaxfontSize: "6vw",
    fontFamily: "times-roman, serif"
  }
};

export class Rant extends Component {
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
          <Typography className={classes.rantBody}>{body}</Typography>
          <LikeButton rantId={rantId} />
          <span>{likeCount} Likes</span>
          <MyButton tip="comments">
            <ChatIcon color="primary" />
          </MyButton>
          <span>{commentCount} Comments</span>
          <RantDialog
            rantId={rantId}
            userHandle={userHandle}
            openDialog={this.props.openDialog}
          />
        </CardContent>
      </Card>
    );
  }
}

Rant.propTypes = {
  user: PropTypes.object.isRequired,
  rant: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  openDialog: PropTypes.bool
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(withStyles(styles)(Rant));
