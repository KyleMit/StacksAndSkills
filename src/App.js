import React, { Component } from 'react';
import './App.css';
import stackData from './StackData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Stacks & Skills</h1>
        <Stack stacks={stackData} />
      </div>
    );
  }
}

class Stack extends Component {
  render() {
    return (
      <>
        {this.props.stacks.map((stack, index) => (
          <div key={index}>
            
            { (!stack.items.length) ?
              <span>{stack.title}</span>
            :
              <>
                <h2>{stack.title}</h2>
                <ul>
                  {stack.items.map( (item, index) => (
                    <li key={index}>{item.title}</li>
                  ))}
                </ul>
              </>
            }
          </div>
        ))}
        </>
    );
  }
}

export default App;
