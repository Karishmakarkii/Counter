import React, { Component } from 'react';
import Counter from "./counter";
class Counters extends Component {
    state = { 
        
            counters: [
                { id: 1 , value: 4},
                { id: 2 , value: 9},
                { id: 3 , value: 0},
                { id: 4 , value: 0}
             
            ]
     };
     handleIncrement = counter => {
             const counters = {...this.state.counters};
             const index = counters.indexOf(counter);
             counters[index] ={ ...counter };
             counters[index].value++;
             this.setState({ counters });
         };
     handleReset = () => {
         this.state.counters.map( counter => {
             counter.value = 0;
             return counter;
         })
     }
     handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters }) //key and valuer are same other otherwise key : value
     };
    render() { 
        return (<div>
            <button 
            onClick = {this.handleReset}
            className= "btn btn-primary btn-sm m-2">Reset</button>
           { this.state.counters.map(counter => (
           <Counter key={counter.id}
            onDelete= {this.handleDelete}
            onIncrement= {this.handleIncrement}
           counter = {counter}
           />
           ))}
        </div>  );
    }
}
 
export default Counters;