let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

//Stores
let Store = require('../stores/store');

let App = React.createClass({

  mixins: [
    Reflux.connect(Store)
  ],

  newNameKeyDown(e) {
    if (event.keyCode !== 13) return;
    e.preventDefault();
    var val = React.findDOMNode(this.refs.roundField).value.trim();
    if (val) {
      Actions.addName(val);
      React.findDOMNode(this.refs.roundField).value = '';
    }
  },

  onButtonClick() {
    Actions.buttonClick();
  },

  render(){

    let person = this.state.chosenPerson;
    let people = this.state.people.map((person, i) => {
      return (
        <li>
          <span>{person}</span>
        </li>
      )
    }, this);


    return (
      <div>
        <h1>Who's round is it?</h1>
        <div className="named-person">
          <p>{person}</p>
        </div>
        <div className="people">
         <ul>
           {people}
         </ul>
        </div>
        <input
          ref="roundField"
          className="new-round"
          placeholder="Input the names of your chums"
          onKeyDown={this.newNameKeyDown}
          autoFocus={true}
        />
        <button onClick={this.onButtonClick}>whos round is it?</button>
      </div>
    )
  }
});

export default App;
