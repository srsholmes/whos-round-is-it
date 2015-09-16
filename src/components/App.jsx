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

  onChooseLad() {
    Actions.chooseLad();
  },

  onClearLads() {
    Actions.clearLads();
  },

  textShrink() {
    console.log('textShrink');
    var textDiv = document.querySelector('.named-person');
    var textContainer = document.querySelector('.name');
    var textSpan = document.querySelector('.chosen-name');

    if (textSpan) {
      console.log('inside the if');
      textSpan.style.fontSize = '86px';
      console.log(textSpan.style.fontSize);
      console.log(textSpan.offsetWidth);
      console.log(textDiv.offsetWidth);
      while(textContainer.offsetWidth > textDiv.offsetWidth)
      {
        textSpan.style.fontSize = parseInt(textSpan.style.fontSize) - 1 + 'px';
        console.log(textSpan.style.fontSize);
      }
    }
  },

  componentDidUpdate() {
    this.textShrink();
  },

  render(){
    let button, clearButton, ladTitle, namedPerson;
    let person = this.state.chosenPerson;
    let people = this.state.people.map((person, i) => {
      return (
        <li>
          <h5 className="name">{person}</h5>
        </li>
      )
    }, this);

    ladTitle = (`Who's a lad?`);

    if (person){
      namedPerson = (
        <div className="named-person">
          <h4>It's</h4>
          <h2 className="name">
            <span className="beer-icon">🍻</span>
            <span className="chosen-name">{person}'s</span>
            <span className="beer-icon">🍻</span>
          </h2>
          <h4>round!</h4>
          <span className="beer-icon breaker">🍻</span>
        </div>
      )

      ladTitle = (`Still a lad?`);
    }
    if (people.length > 0) {
      button = (<button className="whos-round-btn waves-effect waves-light btn" onClick={this.onChooseLad}>Choose a lad</button>);
      clearButton = (<button className="whos-round-btn waves-effect waves-light btn" onClick={this.onClearLads}>Sack them off</button>)
    }

    return (
      <div className="container">
        <div>
          {namedPerson}
          <div className="people">
            <h3>{ladTitle}</h3>
             <ul className="the-lads">
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
          <div className="col s12 btn-wrap">
            {button}
          </div>
          <div className="col s12 btn-wrap">
            {clearButton}
          </div>
        </div>
      </div>
    )
  }
});

export default App;
