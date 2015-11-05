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

    if (drink ==='wine' || drink === 'cocktails' || drink === 'shots') {
      let drinks;
      switch(drink) {
        case 'wine':
            drinks = ['red-wine', 'white-wine']
            break;
        case 'cocktails':
            drinks = ['cocktails-00', 'cocktails-01', 'cocktails-02'];
            break;
        case 'shots':
            drinks = ['shots-00', 'shots-01'];
            break;
        default:
            drinks = ['beer'];
      }
      drinkIcon.src = `/img/${drinks[Math.floor(Math.random()*drinks.length)]}.jpg`;
    } else {
      drinkIcon.src = `/img/${drink}.jpg`;
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
