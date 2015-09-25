let React = require('react');
let Reflux = require('reflux');

let People = React.createClass({

  componentWillMount() {
    this.ladTitle = (`Who's a lad?`);
    this.ladTitles = ['One more round?', 'Another?', 'A quick one?', 'Still a lad?', 'Shots?', 'Go on...', 'Feeling good?', 'Pint?'];   
  },

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.chosenPerson !== this.props.chosenPerson) {
      console.log('inside the if');
      this.ladTitle = this.ladTitles[Math.floor(Math.random()*this.ladTitles.length)];   
    }
  },

  render(){
    let people = this.props.people.join(', ');
    let person = this.props.chosenPerson;
    return (
      <div className="people">
        <h3 className={person == null ? 'title' : 'sub-title' }>{this.ladTitle}</h3>
         <h5 className="the-lads">{people}</h5>
      </div>
    )
  }
});

export default People;
