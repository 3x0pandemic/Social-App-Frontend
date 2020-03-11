import React, { Component } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";

import Rant from "../components/Rant";
import Profile from "../components/Profile";

import { connect } from "react-redux";
import { getRants } from "../redux/actions/dataActions";

export class home extends Component {
  componentDidMount() {
    this.props.getRants();
  }
  render() {
    const { rants, loading } = this.props.data;
    let recentRantsMarkup = !loading ? (
      rants.map(rant => <Rant key={rant.rantId} rant={rant} />)
    ) : (
      <p>Loading...</p>
    );
    return (
      <Grid container spacing={10}>
        <Grid item sm={8} xs={12}>
          {recentRantsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          <Profile />
        </Grid>
      </Grid>
    );
  }
}

home.propTypes = {
  getRants: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps, { getRants })(home);
