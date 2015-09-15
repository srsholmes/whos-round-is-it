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
      <div className="container">
        <div className="row">
          <h1>Who's round is it?</h1>
          <div className="named-person">
          <p>This persons round:</p>
            <p>{person}</p>
          </div>
          <div className="people">
          <p>In the list: </p>
           <ul>
             {people}
           </ul>
          </div>
          <div className="input-field col s12">
            <input ref="roundField"
              className="new-round"
              placeholder="Input the names of your chums"
              onKeyDown={this.newNameKeyDown}
              autoFocus={true}
              id="names" type="text" class="validate" />
          </div>
          <div class="col s12">
            <button className="whos-round-btn waves-effect waves-light btn" onClick={this.onButtonClick}>Choose person</button>
          </div>
        </div>
      </div>
    )
  }
});

export default App;
