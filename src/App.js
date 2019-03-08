import React, { Component } from 'react';
import './App.css';

const stacks = [
  {
    title: "Process",
    items: [
        {
          title: "Agile", 
          items: [
            {title: "Philosophy"},
            {title: "Scrum"},
          ]
        },
        {title: "Business Analysis"},
        {title: "Documentation Management"},
    ]
  },
  {
    title: "User Experience",
    items: [
        {title: "Usability Testing"},
        {title: "User Research"},
    ]
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Stacks & Skills</h1>
        {stacks.map((stack, index) => (
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
      </div>
    );
  }
}

export default App;
