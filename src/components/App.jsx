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
    let val = React.findDOMNode(this.refs.roundField).value.trim();
    if (val) {
      Actions.addName(val);
      React.findDOMNode(this.refs.roundField).value = '';
    }
  },

  onChooseLad() {
    window.scroll(0,0);
    Actions.chooseLad();
  },

  onClearLads() {
    Actions.clearLads();
  },

  textShrink() {
    console.log('textShrink');
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
    let button, clearButton, ladTitle, namedPerson;
    let beerIcon = new Image();
        beerIcon.src = '/assets/img/beer-emoji.png';
    let person = this.state.chosenPerson;
    let people = this.state.people.join(', ');

    ladTitle = (`Who's a lad?`);

    if (person){
      namedPerson = (
        <div className="named-person">
          <h4>It's</h4>
          <h2 className="name">
            <span className="beer-icon">
              <img src={beerIcon.src}/>
            </span>
            <span className="chosen-name">{person}'s</span>
            <span className="beer-icon">
              <img src={beerIcon.src}/>
            </span>
          </h2>
          <h4>round!</h4>
          <span className="beer-icon breaker">
            <img src={beerIcon.src}/>
          </span>
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
            <h3 className={person == null ? 'title' : 'sub-title' }>{ladTitle}</h3>
             <h5 className="the-lads">{people}</h5>
          </div>
          <div className="input-field col s12">
            <input ref="roundField"
              className="new-round"
              placeholder="Whack in the lads names..."
              onKeyDown={this.newNameKeyDown}
              autoFocus={true}
              id="names" type="text" className="validate" />
          </div>
          <div className="buttons">
            <div className="btn-wrap">
              {button}
            </div>
            <div className="btn-wrap">
              {clearButton}
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export default App;
