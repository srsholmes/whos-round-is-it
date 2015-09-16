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
    let button, namedPerson;
    let person = this.state.chosenPerson;
    let people = this.state.people.map((person, i) => {
      return (
        <li>
          <h5 className="name">{person}</h5>
        </li>
      )
    }, this);

    if (person){
      namedPerson = (
        <div className="named-person">
          <h4>It's</h4>
          <h2 className="name">🍻 {person}'s 🍻</h2>
          <h4>round!</h4>
        </div>
      )
    }
    if (people.length > 0) {
      button = (<button className="whos-round-btn waves-effect waves-light btn" onClick={this.onButtonClick}>Choose person</button>);
    }

    return (
      <div className="container">
        <div className="row">
          {namedPerson}
          <div className="people">
            <h3>Who's in?</h3>
             <ul>
               {people}
             </ul>
          </div>
          <div className="input-field col s12">
            <input ref="roundField"
              className="new-round"
              placeholder="Whack in the lads names..."
              onKeyDown={this.newNameKeyDown}
              autoFocus={true}
              id="names" type="text" class="validate" />
          </div>
          <div class="col s12">
            {button}
          </div>
        </div>
      </div>
    )
  }
});

export default App;
