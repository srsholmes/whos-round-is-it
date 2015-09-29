let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

//Components
import { Person, People, Buttons } from './';

//Stores
let Store = require('../stores/store');

let Game = React.createClass({

  newNameKeyDown(e) {
    if (event.keyCode !== 13) return;
    e.preventDefault();
    let val = React.findDOMNode(this.refs.roundField).value.trim();
    if (val) {
      if (/[ ,]+/.test(val)) {
        var arr = val.split(/[ ,]+/);
        arr.map((i, el) => {
          Actions.addName(i);
        });
      } else {
        Actions.addName(val);
      }
      React.findDOMNode(this.refs.roundField).value = '';
    }
  },

  textShrink() {
    let textDiv = document.querySelector('.named-person');
    let textContainer = document.querySelector('.name');
    let textSpan = document.querySelector('.chosen-name');
    if (textSpan) {
      textSpan.style.fontSize = '86px';
      while(textContainer.offsetWidth > textDiv.offsetWidth - 120 )
      {
        textSpan.style.fontSize = parseInt(textSpan.style.fontSize) - 1 + 'px';
      }
    }
  },

  componentDidUpdate() {
    this.textShrink();
  },

  render(){
    if (this.props.drink === null) {
      return (
        <div></div>
      )
    } else {
      return (
        <div>
          <Person {...this.props}/>
          <People {...this.props}/>         
          <div className="input-field col s12">
            <input ref="roundField"
              className="new-round validate"
              placeholder="Whack in the lads names..."
              onKeyDown={this.newNameKeyDown}
              autoFocus={true}
              id="names" type="text"/>
          </div>
          <Buttons {...this.props}/>       
        </div>
      )
    }

  }
});

export default Game;
