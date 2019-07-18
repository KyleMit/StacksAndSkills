import React, { Component } from 'react';
import './App.css';
import stackData from './StackData.json';

const tiers = [
  { "level": 1, "text": "1 point if you've heard of it" },
  { "level": 2, "text": "1 point if you can describe it" },
  { "level": 3, "text": "1 point if you've ever used it (hello world counts)" },
  { "level": 4, "text": "1 point if you've used it in the last 6 months" },
  { "level": 5, "text": "1 point if you've deployed it to production" },
  { "level": 6, "text": "1 point if you've worked on it for > 6 months" },
  { "level": 7, "text": "1 point if you've worked on it for > 2 years" },
  { "level": 8, "text": "1 point if you could give a presentation on it" },
]

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Stacks & Skills <span className="text-muted">(v{process.env.REACT_APP_VERSION})</span> </h1>
        
        <div className="overview">
          {tiers.map((tier, index) => (
            <div key={index} className="card"
                 data-skill-level={tier.level}  >
              {tier.text}
            </div>
          ))}
        </div>
        
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
