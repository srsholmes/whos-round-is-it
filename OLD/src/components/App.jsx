let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

//Components
import { Game, EntryQuestion } from './';

//Stores
let Store = require('../stores/store');

let App = React.createClass({

  mixins: [
    Reflux.connect(Store)
  ],

  render(){
    return (
      <div className={this.state.drink + " container"}>
        <EntryQuestion  {...this.state}/>
        <Game {...this.state} />
      </div>
    )
  }
});

export default App;
