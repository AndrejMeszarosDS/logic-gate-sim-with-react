import React, { Component } from "react";

class Selector extends Component {
  render() {
    const buttonNormal = { color: "black", backgroundColor: "white" };
    const buttonSelected = { color: "white", backgroundColor: "black" };
    var button1style = buttonNormal;
    var button2style = buttonNormal;
    var button3style = buttonNormal;
    if (this.props.gates_number === 1) {
      button1style = buttonSelected;
    }
    if (this.props.gates_number === 3) {
      button2style = buttonSelected;
    }
    if (this.props.gates_number === 7) {
      button3style = buttonSelected;
    }

    return (
      <div className="selector">
        <button
          className="button"
          style={button1style}
          onClick={() => this.props.changeGateNumber(1)}
        >
          1 Gate
        </button>
        <button
          className="button"
          style={button2style}
          onClick={() => this.props.changeGateNumber(3)}
        >
          3 Gate
        </button>
        <button
          className="button"
          style={button3style}
          onClick={() => this.props.changeGateNumber(7)}
        >
          7 Gate
        </button>
      </div>
    );
  }
}

export default Selector;
