import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
     };   //object it includes the data that component needs

    render() { 
        return (
            <div>
            <span>{this.formatCount()}</span>
            <button>Increment</button>
            </div>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
        }
}
 
export default Counter;