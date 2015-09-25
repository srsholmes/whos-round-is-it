let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

//Components
import { Person, People, Buttons } from './';

//Stores
let Store = require('../stores/store');

let App = React.createClass({

  mixins: [
    Reflux.connect(Store)
  ],

  newNameKeyDown(e) {
    if (event.keyCode !== 13) return;
    e.preventDefault();
    let val = React.findDOMNode(this.refs.roundField).value.trim();
    if (val) {
      Actions.addName(val);
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
    return (
      <div className={this.state.drink + " container"}>
        <div>
          <Person {...this.state}/>
          <People {...this.state}/>         
          <div className="input-field col s12">
            <input ref="roundField"
              className="new-round validate"
              placeholder="Whack in the lads names..."
              onKeyDown={this.newNameKeyDown}
              autoFocus={true}
              id="names" type="text"/>
          </div>
          <Buttons {...this.state}/>       
        </div>
      </div>
    )
  }
});

export default App;
