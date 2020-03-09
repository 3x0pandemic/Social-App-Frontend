import React, { Component } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";

import Rant from "../components/Rant";

export class home extends Component {
  state = {
    rants: null
  };
  componentDidMount() {
    axios
      .get("/rants")
      .then(res => {
        this.setState({
          rants: res.data
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    let recentRantsMarkup = this.state.rants ? (
      this.state.rants.map(rant => <Rant key={rant.rantId} rant={rant} />)
    ) : (
      <p>Loading...</p>
    );
    return (
      <Grid container spacing={10}>
        <Grid item sm={8} xs={12}>
          {recentRantsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          <p>Profile...</p>
        </Grid>
      </Grid>
    );
  }
}

export default home;
