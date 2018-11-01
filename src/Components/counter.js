import React, { Component } from 'react';

class Counter extends Component {

  state = {
    value: this.props.value,
    
  }

//   constructor() {
//         super();  
//         this.handleIncrement = this.handleIncrement.bind(this);
//          we can just make this method an arrow function
//     }

  formatCount = () => {
      const {value} = this.state;
      return value === 0 ? 'Zero' : value;
  }

  handleIncrement = () => {
    console.log('increment clicked');
    // this.state.count++;
    this.setState({ value: this.state.value + 1 });
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
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }
}

export default Counter;