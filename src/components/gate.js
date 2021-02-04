import React, { Component } from "react";
import bool2text from "./utils";

class Gate extends Component {
  render() {
    const buttonNormal = { color: "black", backgroundColor: "white" };
    const buttonSelected = { color: "white", backgroundColor: "black" };
    var button1style = buttonNormal;
    var button2style = buttonNormal;
    var button3style = buttonNormal;
    if (this.props.logicSelected === "AND") {
      button1style = buttonSelected;
    }
    if (this.props.logicSelected === "OR") {
      button2style = buttonSelected;
    }
    if (this.props.logicSelected === "XOR") {
      button3style = buttonSelected;
    }
    return (
      <div className="gate">
        <div className="left">
          <div className="left_top">
            <p className="name">{bool2text(this.props.inputA)}</p>
          </div>
          <div className="left_mid">
            <p className="name">{bool2text(this.props.inputB)}</p>
          </div>
        </div>
        <div className="mid">
          <div className="outline">
            <button
              className="button"
              style={button1style}
              onClick={() => this.props.changeGateLogic(this.props.id, "AND")}
            >
              AND
            </button>
            <button
              className="button"
              style={button2style}
              onClick={() => this.props.changeGateLogic(this.props.id, "OR")}
            >
              OR
            </button>
            <button
              className="button"
              style={button3style}
              onClick={() => this.props.changeGateLogic(this.props.id, "XOR")}
            >
              XOR
            </button>
          </div>
        </div>
        <div className="right">
          <div className="right_top">
            <p className="name">{bool2text(this.props.output)}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Gate;
