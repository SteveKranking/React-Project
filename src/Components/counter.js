import React, { Component } from 'react';

class Counter extends Component {

  state = {
    count: 1
  }

  formatCount = () => {
      const {count} = this.state;
      return count === 0 ? 'Zero' : count;
  }

  render() {
    return (
      <div className="Counter">
        <span> {this.formatCount()} </span>
        <button className="btn btn-primary"> Increment! </button>
      </div>
    );
  }
}

export default Counter;