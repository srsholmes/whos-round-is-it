let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

import { DRINKS } from '../constants/constants';


let EntryQuestion = React.createClass({

  chooseDrink() {
    console.log('chooseDrink');
  },

  render(){
    let drink = this.props.drink;
    if (drink) return (<div></div>);

    let entryButtons = DRINKS.map((drink, i) => {
      return (
        <button refs={drink} onClick={this.chooseDrink} className={ drink + ' whos-round-btn choose-drink-icon waves-effect waves-light btn'}>{drink}</button>
      )
    }, this);
    
    return (
      <div>
        <h1>What do you fancy?</h1>
        {entryButtons}
      </div>
    )
  }
});

export default EntryQuestion;
