let React = require('react');
let Reflux = require('reflux');
let Actions = require('../../actions/actions');

import { DRINKS, PHRASES } from '../../constants/constants';

import { chooseRandom } from '../../modules';


let EntryQuestion = React.createClass({
  render(){
    let drink = this.props.drink;
    let title = chooseRandom(PHRASES.Entry.title);
    if (drink) return (<div></div>);

    let entryButtons = DRINKS.map((drink, i) => {
      return (
        <button onClick={Actions.chooseDrink.bind(null, i)} className={ drink + ' whos-round-btn choose-drink-btn waves-effect waves-light btn'}>{drink}</button>
      )
    }, this);
    
    return (
      <div>
        <h1 className="title">{ title }</h1>
        {entryButtons}
      </div>
    )
  }
});

export default EntryQuestion;
