import React, { Component } from 'react';
import './App.css';
import stackData from './StackData.json';
import Clamp from './Utility';

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

const tiers_alt = [
  { "level": 1, "text": "1 year" },
  { "level": 2, "text": "2 years" },
  { "level": 3, "text": "3 years" },
  { "level": 4, "text": "4 years" },
  { "level": 5, "text": "5 years" },
  { "level": 6, "text": "6 years" },
  { "level": 7, "text": "7 years" },
  { "level": 8, "text": "8 years" },
]



const MaxSkill = 8;
const MinSkill = 0;
const MaxPref = 1;
const MinPref = -1;


class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Stacks & Skills <span className="text-muted">(v{process.env.REACT_APP_VERSION})</span> </h1>
        
       
        <content className="Stacks">
          <Stack stacks={stackData}   />
        </content>

        <Instructions></Instructions>
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
    skillLevel: 0,
    preference: 0
  }
  
  handleClick = (e) => {
    let increment = e.type === 'click' ? 1 : -1
    let curSkill = this.state.skillLevel
    let newSkill = curSkill + increment;

    newSkill = Clamp(newSkill, MinSkill, MaxSkill)

    this.setState({
      skillLevel: newSkill
    })

    e.preventDefault(); 
    e.stopPropagation(); 
  }

  handleKeyDown = (e) => {


    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {

      let increment = e.key === 'ArrowRight' ? 1 : -1
      let curSkill = this.state.skillLevel
      let newSkill = curSkill + increment;
  
      newSkill = Clamp(newSkill, MinSkill, MaxSkill)
  
      this.setState({
        skillLevel: newSkill
      })

      e.preventDefault(); 
      e.stopPropagation(); 
    }
    
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {

      let increment = e.key === 'ArrowUp' ? 1 : -1
      let curPref = this.state.preference
      let newPref = curPref + increment;
  
      newPref = Clamp(newPref, MinPref, MaxPref)
  
      this.setState({
        preference: newPref
      })

      e.preventDefault(); 
      e.stopPropagation(); 
     
    }
  }

  render() {
    return (
      <li>
        <button onClick={this.handleClick}
                onContextMenu={this.handleClick}
                onKeyDown={this.handleKeyDown} 
                data-skill-level={this.state.skillLevel}
                data-skill-pref={this.state.preference} >
            <span className="title">
              {this.props.title}
            </span>
            
            <span className="preference">
              {this.state.preference === 1 ? '🡅' : this.state.preference === -1 ? '🡇' : ''}
            </span>
        </button >
      </li>
    );
  }
}


class Instructions extends Component {

  state = {
    isOpen: true,
  }
  
  handleClick = (e) => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <footer className={"hud " + (this.state.isOpen ? 'active' : '')}
              onClick={this.handleClick}>
        <h2>Instructions</h2>

        <h3>Skill Levels - Option A)</h3>
        <div className="overview">
          {tiers.map((tier, index) => (
            <div key={index} className="card"
                data-skill-level={tier.level}  >
              {tier.text}
            </div>
          ))}
        </div>

        <h3>Skill Levels - Option B)</h3>
        <div className="overview">
          {tiers_alt.map((tier, index) => (
            <div key={index} className="card"
                data-skill-level={tier.level}  >
              {tier.text}
            </div>
          ))}
        </div>


      </footer>
    );
  }
}


export default App;
