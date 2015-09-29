let React = require('react');
let Reflux = require('reflux');

let Person = React.createClass({
  render(){
    let drinkIcon = new Image();
    let drink = this.props.drink;
    let person = this.props.chosenPerson;
    drinkIcon.src = `/assets/img/${drink}.jpg`;
    if (person){
      return (
        <div className="named-person">
          <h4>It's</h4>
          <h2 className="name">
            <span className="beer-icon">
              <img src={drinkIcon.src}/>
            </span>
            <span className="chosen-name">{person}'s</span>
            <span className="beer-icon">
              <img src={drinkIcon.src}/>
            </span>
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
