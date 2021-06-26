import React, { Component } from "react";
import { connect } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
} from "../src/services/Actions/CounterAction";

class App extends Component {
  render() {
    return (
      <div className="text-center mt-10 font-sans font-bold">
        <div className="text-lg text-white border p-10 bg-gray-400">Count: {this.props.count}</div>

        <div className="space-x-4 p-5">
          <button
            className="bg-black rounded-full text-sm uppercase text-white px-5 py-4"
            onClick={() => this.props.increaseCounter()}
          >
            Increase Count
          </button>

          <button
            className="bg-black rounded-full text-sm uppercase text-white px-5 py-4"
            onClick={() => this.props.decreaseCounter()}
          >
            Decrease Count
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),

    decreaseCounter: () => dispatch(decreaseCounter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
