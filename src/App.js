import React, { Component } from "react";
import "./App.css";
import Gate from "./components/gate";
import Input from "./components/input";
import Selector from "./components/selector";

function dataStruct(inputA, inputB, logic, output) {
  this.inputA = inputA;
  this.inputB = inputB;
  this.logic = logic;
  this.output = output;
}

var logicData = [
  new dataStruct(false, false, "AND", false),
  new dataStruct(false, false, "AND", false),
  new dataStruct(false, false, "AND", false),
  new dataStruct(false, false, "AND", false),
  new dataStruct(false, false, "AND", false),
  new dataStruct(false, false, "AND", false),
  new dataStruct(false, false, "AND", false),
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { logicData, gates_number: 1 };
  }

  changeGateNumber = (value) => {
    this.setState({ gates_number: value });
  };

  changeGateLogic = (id, logic) => {
    logicData = this.state.logicData;
    logicData[id].logic = logic;
    this.doLogic(logicData);
  };

  changeInput = (id, input, value) => {
    logicData = this.state.logicData;
    if (input === "inputA") {
      logicData[id].inputA = value;
    } else {
      logicData[id].inputB = value;
    }
    this.doLogic(logicData);
  };

  setLogic = (logic, inputA, inputB) => {
    switch (logic) {
      case "AND":
        return inputA && inputB;
      case "OR":
        return inputA || inputB;
      case "XOR":
        return (inputA || inputB) && !(inputA && inputB);
      default:
        return false;
    }
  };

  doLogic = (logicData) => {
    // 0. gate
    logicData[0].output = this.setLogic(
      logicData[0].logic,
      logicData[0].inputA,
      logicData[0].inputB
    );
    // 1. gate
    logicData[1].output = this.setLogic(
      logicData[1].logic,
      logicData[1].inputA,
      logicData[1].inputB
    );
    // 2. gate
    logicData[2].output = this.setLogic(
      logicData[2].logic,
      logicData[2].inputA,
      logicData[2].inputB
    );
    // 3. gate
    logicData[3].output = this.setLogic(
      logicData[3].logic,
      logicData[3].inputA,
      logicData[3].inputB
    );
    // 4. gate
    logicData[4].inputA = logicData[0].output;
    logicData[4].inputB = logicData[1].output;
    logicData[4].output = this.setLogic(
      logicData[4].logic,
      logicData[4].inputA,
      logicData[4].inputB
    );
    // 5. gate
    logicData[5].inputA = logicData[2].output;
    logicData[5].inputB = logicData[3].output;
    logicData[5].output = this.setLogic(
      logicData[5].logic,
      logicData[5].inputA,
      logicData[5].inputB
    );
    // 6. gate
    logicData[6].inputA = logicData[4].output;
    logicData[6].inputB = logicData[5].output;
    logicData[6].output = this.setLogic(
      logicData[6].logic,
      logicData[6].inputA,
      logicData[6].inputB
    );
    this.setState({ logicData: logicData });
  };

  render() {
    return (
      <div className="app">
        <div className="head">
          <div>
            <h1>Logic gate simulator</h1>
          </div>
          <Selector
            changeGateNumber={this.changeGateNumber}
            gates_number={this.state.gates_number}
          />
        </div>
        <div className="body">
          {this.state.gates_number === 1 && (
            <div className="gates">
              <div>
                <div>
                  <Input
                    id={0}
                    inputA={this.state.logicData[0].inputA}
                    inputB={this.state.logicData[0].inputB}
                    changeInput={this.changeInput}
                  />
                  <Gate
                    id={0}
                    inputA={this.state.logicData[0].inputA}
                    inputB={this.state.logicData[0].inputB}
                    output={this.state.logicData[0].output}
                    logicSelected={this.state.logicData[0].logic}
                    changeGateLogic={this.changeGateLogic}
                  />
                </div>
              </div>
            </div>
          )}

          {this.state.gates_number === 3 && (
            <div className="gates">
              <div>
                <div>
                  <Input
                    id={0}
                    inputA={this.state.logicData[0].inputA}
                    inputB={this.state.logicData[0].inputB}
                    changeInput={this.changeInput}
                  />
                  <Gate
                    id={0}
                    inputA={this.state.logicData[0].inputA}
                    inputB={this.state.logicData[0].inputB}
                    output={this.state.logicData[0].output}
                    logicSelected={this.state.logicData[0].logic}
                    changeGateLogic={this.changeGateLogic}
                  />
                </div>
                <div>
                  <Input
                    id={1}
                    inputA={this.state.logicData[1].inputA}
                    inputB={this.state.logicData[1].inputB}
                    changeInput={this.changeInput}
                  />
                  <Gate
                    id={1}
                    inputA={this.state.logicData[1].inputA}
                    inputB={this.state.logicData[1].inputB}
                    output={this.state.logicData[1].output}
                    logicSelected={this.state.logicData[1].logic}
                    changeGateLogic={this.changeGateLogic}
                  />
                </div>
              </div>
              <div className="short_connector3">
                <div className="line1" />
                <div className="line2" />
              </div>
              <div>
                <div>
                  <Gate
                    id={4}
                    inputA={this.state.logicData[4].inputA}
                    inputB={this.state.logicData[4].inputB}
                    output={this.state.logicData[4].output}
                    logicSelected={this.state.logicData[4].logic}
                    changeGateLogic={this.changeGateLogic}
                  />
                </div>
              </div>
            </div>
          )}

          {this.state.gates_number === 7 && (
            <div className="gates">
              <div>
                <div>
                  <Input
                    id={0}
                    inputA={this.state.logicData[0].inputA}
                    inputB={this.state.logicData[0].inputB}
                    changeInput={this.changeInput}
                  />
                  <Gate
                    id={0}
                    inputA={this.state.logicData[0].inputA}
                    inputB={this.state.logicData[0].inputB}
                    output={this.state.logicData[0].output}
                    logicSelected={this.state.logicData[0].logic}
                    changeGateLogic={this.changeGateLogic}
                  />
                </div>
                <div>
                  <Input
                    id={1}
                    inputA={this.state.logicData[1].inputA}
                    inputB={this.state.logicData[1].inputB}
                    changeInput={this.changeInput}
                  />
                  <Gate
                    id={1}
                    inputA={this.state.logicData[1].inputA}
                    inputB={this.state.logicData[1].inputB}
                    output={this.state.logicData[1].output}
                    logicSelected={this.state.logicData[1].logic}
                    changeGateLogic={this.changeGateLogic}
                  />
                </div>
                <div>
                  <Input
                    id={2}
                    inputA={this.state.logicData[2].inputA}
                    inputB={this.state.logicData[2].inputB}
                    changeInput={this.changeInput}
                  />
                  <Gate
                    id={2}
                    inputA={this.state.logicData[2].inputA}
                    inputB={this.state.logicData[2].inputB}
                    output={this.state.logicData[2].output}
                    logicSelected={this.state.logicData[2].logic}
                    changeGateLogic={this.changeGateLogic}
                  />
                </div>
                <div>
                  <Input
                    id={3}
                    inputA={this.state.logicData[3].inputA}
                    inputB={this.state.logicData[3].inputB}
                    changeInput={this.changeInput}
                  />
                  <Gate
                    id={3}
                    inputA={this.state.logicData[3].inputA}
                    inputB={this.state.logicData[3].inputB}
                    output={this.state.logicData[3].output}
                    logicSelected={this.state.logicData[3].logic}
                    changeGateLogic={this.changeGateLogic}
                  />
                </div>
              </div>
              <div className="short_connector7">
                <div className="line1" />
                <div className="line2" />
                <div className="line3" />
                <div className="line4" />
              </div>
              <div>
                <div>
                  <Gate
                    id={4}
                    inputA={this.state.logicData[4].inputA}
                    inputB={this.state.logicData[4].inputB}
                    output={this.state.logicData[4].output}
                    logicSelected={this.state.logicData[4].logic}
                    changeGateLogic={this.changeGateLogic}
                  />
                </div>
                <div className="gate"></div>
                <div>
                  <Gate
                    id={5}
                    inputA={this.state.logicData[5].inputA}
                    inputB={this.state.logicData[5].inputB}
                    output={this.state.logicData[5].output}
                    logicSelected={this.state.logicData[5].logic}
                    changeGateLogic={this.changeGateLogic}
                  />
                </div>
              </div>
              <div className="long_connector">
                <div className="line1" />
                <div className="line2" />
              </div>
              <div>
                <div>
                  <Gate
                    id={6}
                    inputA={this.state.logicData[6].inputA}
                    inputB={this.state.logicData[6].inputB}
                    output={this.state.logicData[6].output}
                    logicSelected={this.state.logicData[6].logic}
                    changeGateLogic={this.changeGateLogic}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
