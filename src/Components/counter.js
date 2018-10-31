import React, { Component } from 'react';

class Counter extends Component {

  state = {
    count: 0,
  }

//   constructor() {
//         super();  
//         this.handleIncrement = this.handleIncrement.bind(this);
//          we can just make this method an arrow function
//     }

  formatCount = () => {
      const {count} = this.state;
      return count === 0 ? 'Zero' : count;
  }

  handleIncrement = () => {
    console.log('increment clicked');
    // this.state.count++;
    this.setState({ count: this.state.count + 1 });
  }

  render() {

    return (
      <div className="Counter">
        <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
        <button 
            onClick={this.handleIncrement} 
            className="btn btn-secondary btn-sm"> 
            Increment! 
        </button>
      </div>
    );
  }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
}

export default Counter;