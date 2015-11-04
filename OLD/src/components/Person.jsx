let React = require('react');
let Reflux = require('reflux');

import { DrinkPic } from './';


let Person = React.createClass({
  render(){
    let person = this.props.chosenPerson;
    if (person){
      return (
        <div className="named-person">
          <h4>It's</h4>
          <h2 className="name">
            <DrinkPic {...this.props}/>
            <span className="chosen-name">{person}'s</span>
          </h2>
          <h4>round!</h4>
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
});

export default Person;
