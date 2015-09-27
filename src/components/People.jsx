let React = require('react');
let Reflux = require('reflux');

import { PHRASES } from '../constants/constants';

import { chooseRandom } from '../modules';

let People = React.createClass({

  componentWillMount() {
    let drink = this.props.drink;
    this.title = PHRASES[drink].title;
  },

  componentWillUpdate(nextProps, nextState) {
    let drink = this.props.drink;
    if (nextProps.chosenPerson === null) {
      this.title = PHRASES[drink].title;
      return;
    }
    if (nextProps.chosenPerson !== this.props.chosenPerson) {
      if (nextProps.people.length === 0 && nextProps.chosenPerson !== null ) {
        this.title = 'Oh dear...'
      } else {
        this.title = chooseRandom(PHRASES[drink].continueRound);
      }
    }
  },

  render(){
    console.log(this.props);
    let people = this.props.people.join(', ');
    let person = this.props.chosenPerson;
    return (
      <div className="people">
        <h3 className={person == null ? 'title' : 'sub-title' }>{this.title}</h3>
         <h5 className="the-lads">{people}</h5>
      </div>
    )
  }
});

export default People;
