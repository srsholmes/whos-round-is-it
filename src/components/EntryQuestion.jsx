let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

import { DRINKS, PHRASES } from '../constants/constants';

let EntryQuestion = React.createClass({

  chooseDrink(i) {
    Actions.chooseDrink(i);
  },

  render(){
    let drink = this.props.drink;
    if (drink) return (<div></div>);

    let entryButtons = DRINKS.map((drink, i) => {
      return (
        <button onClick={this.chooseDrink.bind(null, i)} className={ drink + ' whos-round-btn choose-drink-btn waves-effect waves-light btn'}>{drink}</button>
      )
    }, this);
    
    return (
      <div>
        <h1 className="title">{ PHRASES.Entry.title }</h1>
        {entryButtons}
      </div>
    )
  }
});

export default EntryQuestion;
