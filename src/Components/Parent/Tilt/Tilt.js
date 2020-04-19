import React, { Fragment } from "react";
import Tilt from 'react-tilt'

class Tiltjs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Tilt
        className="Tilt"
        options={{ max: 30 }}
        style={{ height: 175, width: 175 }}
      >
        <div className="Tilt-inner">
            {this.props.children}
        </div>
      </Tilt>
    );
  }
}
export default Tiltjs;