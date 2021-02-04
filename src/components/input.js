import React from "react";
import bool2text from "./utils";

class Input extends React.Component {
  render() {
    return (
      <div className="input">
        <button
          className="ibutton"
          onClick={() =>
            this.props.changeInput(this.props.id, "inputA", !this.props.inputA)
          }
        >
          {bool2text(this.props.inputA)}
        </button>
        <button
          className="ibutton"
          onClick={() =>
            this.props.changeInput(this.props.id, "inputB", !this.props.inputB)
          }
        >
          {bool2text(this.props.inputB)}
        </button>
      </div>
    );
  }
}
export default Input;
