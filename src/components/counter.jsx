import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  styles = { fontSize: 50, fontWeight: "bold", fontColor: "black" };

  render() {
    console.log("props", this.props);
    return (
      <div>
        <span style={this.styles}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger m-2 btn-sm"
        >
          Delete
        </button>
      </div>
    );
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
