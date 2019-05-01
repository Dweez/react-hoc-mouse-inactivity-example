import React, { Component } from "react";
import Slide from "@material-ui/core/Slide";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  slider: {
    position: "fixed",
    width: "250px",
    bottom: "1rem",
    margin: "0 auto",
    padding: "1rem",
    color: "#fff",
    borderRadius: "8px",
    backgroundColor: "#e43a95"
  }
});

class HideableComponent extends Component {
  render() {
    const { classes, mouseIsMoving } = this.props;
    return (
      <Slide in={mouseIsMoving} direction="up" className={classes.slider}>
        <div>Polom</div>
      </Slide>
    );
  }
}

export default withStyles(styles)(HideableComponent);
