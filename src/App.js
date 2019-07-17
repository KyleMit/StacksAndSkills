import React, { Component } from 'react';
import './App.css';
import stackData from './StackData.json';



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Stacks & Skills <span className="text-muted">(v{process.env.REACT_APP_VERSION})</span> </h1>
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
                <li><h3><button >{section.title}</button></h3></li>
                <ul>
                  <Section items={section.items} />
                </ul>
              </>
            :
            <Item title={section.title}></Item>
            }
          </ul>
        ))}
        </>
    );
  }
}


class Item extends Component {

  // Define the initial state:
  state = {
    skillLevel: 0
  }
  
  handleClick = (e) => {
    this.setState({
      skillLevel: this.state.skillLevel + 1
    })
  }

  render() {
    return (
      <li>
        <button onClick={this.handleClick}
                data-skill-level={this.state.skillLevel} >
            {this.props.title}
        </button >
      </li>
    );
  }
}


export default App;
