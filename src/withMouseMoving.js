import React, { Component } from "react";

const withMouseMoving = (WrappedComponent, props) => {
  class HOCMouseMoving extends Component {
    constructor(props) {
      super(props);
      this.state = {
        mouseIsMoving: false,
        intervalMove: false
      };
    }
    handleMouseMoving = () => {
      // not optimized at all...
      this.setState(prevState => {
        if (this.state.intervalMove) clearTimeout(this.state.intervalMove);
        return {
          mouseIsMoving: true,
          intervalMove: setTimeout(() => {
            this.setState(prevState => {
              return {
                mouseIsMoving: false
              };
            });
          }, this.props.inactivityDuration)
        };
      });
    };
    componentWillUnmount = () => {
      if (this.state.intervalMove) clearTimeout(this.state.intervalMove);
      this.setState(prevState => {
        return {
          mouseIsMoving: false,
          intervalMove: false
        };
      });
    };
    render() {
      return (
        <WrappedComponent
          handleMouseMoving={this.handleMouseMoving}
          mouseIsMoving={this.state.mouseIsMoving}
          inactivityDuration={this.props.inactivityDuration}
          {...this.props}
        />
      );
    }
  }
  return HOCMouseMoving;
};

export default withMouseMoving;
