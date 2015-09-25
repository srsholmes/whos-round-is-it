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
  
  render(){
    let people = this.props.people;
    let button, clearButton;

    if (people.length > 0) {
      button = (<button className="whos-round-btn waves-effect waves-light btn blue darken-3" onClick={this.onChooseLad}>Choose a lad</button>);
      clearButton = (<button className="whos-round-btn waves-effect waves-light btn blue darken-3" onClick={this.onClearLads}>Get rid of them</button>)
    }

    if (people.length > 0) {
      return (
        <div className="buttons">
          <div className="btn-wrap">
            {button}
          </div>
          <div className="btn-wrap">
            {clearButton}
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
