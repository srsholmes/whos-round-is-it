let React = require('react');
let Reflux = require('reflux');
let Actions = require('../../actions/actions');

import { PHRASES } from '../../constants/constants';

let Buttons = React.createClass({

  onChooseLad() {
    window.scroll(0,0);
    Actions.chooseLad();
  },

  onClearLads() {
    Actions.clearLads();
  },

  onMixDrinks() {
    Actions.mixDrinks();
  },

  onNewRound() {
    Actions.newRound();
  },

  render(){
    let people = this.props.people;
    let chooseButton, clearButton, mixerButton, newRoundButton;
    let drink = this.props.drink;

    if (people.length > 0) {
      chooseButton = (
        <button className="whos-round-btn waves-effect waves-light btn" onClick={this.onChooseLad}>
          {PHRASES[drink].chooseButton}
        </button>
      );
      clearButton = (<button className="whos-round-btn waves-effect waves-light btn" onClick={this.onClearLads}>Clear people</button>);
      mixerButton = (<button className="whos-round-btn waves-effect waves-light btn" onClick={this.onMixDrinks}>Mix up the drinks</button>);
    }

    if (people.length === 0 && this.props.group.length > 0) {
      newRoundButton = (<button className="whos-round-btn waves-effect waves-light btn" onClick={this.onNewRound}>Another round</button>);
    }

    if (people.length > 0) {
      return (
        <div className="buttons">
          <div className="btn-wrap">
            {chooseButton}
          </div>
          <div className="btn-wrap">
            {clearButton}
          </div>
          <div className="btn-wrap">
            {mixerButton}
          </div>
        </div>
      )
    } else {
      return (
        <div className="buttons">
          {newRoundButton}
        </div>
      )
    }
  }
});

export default Buttons;
