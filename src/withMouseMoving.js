import React, { Component } from "react";

const withMouseMoving = options => WrappedComponent => {
  console.log(options);
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
          }, options.inactivityDuration)
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
          inactivityDuration={options.inactivityDuration}
          {...this.props}
        />
      );
    }
  }
  return HOCMouseMoving;
};

export default withMouseMoving;
