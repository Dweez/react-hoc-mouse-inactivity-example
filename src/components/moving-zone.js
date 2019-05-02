import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

import withMouseMoving from "../withMouseMoving";
import HideableComponent from "./hideable-component";

const styles = theme => ({
  zone: {
    display: "flex",
    justifyContent: "center",
    fontSize: "1.2rem",
    alignItems: "center",
    width: "100%",
    height: "200px",
    minHeight: "200px",
    flexDirection: "column",
    border: "3px solid #567acd",
    borderRadius: "8px",
    color: "#3c5ba2",
    backgroundColor: "#86a1e0"
  }
});

class MovingZone extends Component {
  render() {
    const {
      classes,
      handleMouseMoving,
      mouseIsMoving,
      inactivityDuration
    } = this.props;
    return (
      <div className={classes.zone} onMouseMove={handleMouseMoving}>
        {mouseIsMoving
          ? `Stop moving your mouse for ${inactivityDuration /
              1000} seconds to hide Polom`
          : "Move your mouse here"}
        <HideableComponent mouseIsMoving={mouseIsMoving} />
      </div>
    );
  }
}

const moving = withMouseMoving(MovingZone);

export default withStyles(styles)(moving);
