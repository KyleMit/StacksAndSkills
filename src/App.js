import React, { Component } from 'react';
import './App.css';
import stackData from './StackData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Stacks & Skills <span className="text-muted">(v0.0.4)</span> </h1>
        <content className="Stacks">
          <Stack stacks={stackData}   />
        </content>
      </div>
    );
  }
}


class Stack extends Component {
  render() {
    return (
      <>
        {this.props.stacks.map((stack, index) => (
          <div key={index} className="Stack">
            <h2>{stack.title}</h2>
            <Section items={stack.items} />
          </div>
        ))}
        </>
    );
  }
}

class Section extends Component {
  render() {
    return (
      <>
        {this.props.items.map((section, index) => (
          <ul key={index} className="Section">
            
            { (section.items && section.items.length) ?
              <>
                <li><h3>{section.title}</h3></li>
                <ul>
                  <Section items={section.items} />
                </ul>
              </>
            :
            <li>{section.title}</li>
            }
          </ul>
        ))}
        </>
    );
  }
}


export default App;
