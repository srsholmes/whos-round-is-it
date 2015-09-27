let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

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

  render(){
    let people = this.props.people;
    let chooseButton, clearButton, mixerButton;
    if (people.length > 0) {
      chooseButton = (
        <button className="whos-round-btn waves-effect waves-light btn" onClick={this.onChooseLad}>
          {this.props.drink === 'beer' ? `Choose a lad` : `Choose a lass`}
        </button>
      );
      clearButton = (<button className="whos-round-btn waves-effect waves-light btn" onClick={this.onClearLads}>Get rid of them</button>);
      mixerButton = (<button className="whos-round-btn waves-effect waves-light btn" onClick={this.onMixDrinks}>Mix up the drinks</button>);
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
        <div></div>
      )
    }
  }
});

export default Buttons;
