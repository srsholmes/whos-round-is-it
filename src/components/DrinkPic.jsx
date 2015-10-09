let React = require('react');
let Reflux = require('reflux');

let Person = React.createClass({


  shouldComponentUpdate(nextProps) {
    return nextProps.cocktails !== this.props.cocktails;
  },

  render(){
    let drinkIcon = new Image();
    let drink = this.props.drink;
    let person = this.props.chosenPerson;

    if (drink ==='wine' || drink === 'cocktails') {
      let drinks;
      drink === 'wine' ? drinks = ['red-wine', 'white-wine'] : drinks = ['cocktails-00', 'cocktails-01', 'cocktails-02'];
      drinkIcon.src = `/assets/img/${drinks[Math.floor(Math.random()*drinks.length)]}.jpg`;
    } else {
      drinkIcon.src = `/assets/img/${drink}.jpg`;
    }
    return (
      <div>
        <span className="beer-icon left">
          <img src={drinkIcon.src}/>
        </span>
        <span className="beer-icon right">
          <img src={drinkIcon.src}/>
        </span>
      </div>
    )
    
  }
});

export default Person;
