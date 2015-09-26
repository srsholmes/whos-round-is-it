let React = require('react');
let Reflux = require('reflux');

let People = React.createClass({

//Reafactor and remove this logic from the component.

  componentWillMount() {
    this.props.sex === 'male' ? this.title = (`Who's a lad?`) : this.title = (`Who's a lass?`);
    this.ladTitles = ['One more round?', 'Another?', 'A quick one?', 'Still a lad?', 'Shots?', 'Go on...', 'Feeling good?', 'Pint?'];
    this.lassTitles = ['Another glass?', 'A little top up?', 'Be naughty'];
  },

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.chosenPerson === null) {
      this.props.sex === 'male' ? this.title = (`Who's a lad?`) : this.title = (`Who's a lass?`);
      return;
    }
    if (nextProps.chosenPerson !== this.props.chosenPerson) {
      if (nextProps.people.length === 0 && nextProps.chosenPerson !== null ) {
        this.title = 'Oh dear...'
      } else {
        let sex;
        this.props.sex === 'male' ? sex = this.ladTitles : sex = this.lassTitles;
        this.title = sex[Math.floor(Math.random() * sex.length)];
      }
    }
  },

  render(){
    let people = this.props.people.join(', ');
    let person = this.props.chosenPerson;
    return (
      <div className="people">
        <h3 className={person == null ? 'title' : 'sub-title' }>{this.title}</h3>
         <h5 className="the-lads">{people}</h5>
      </div>
    )
  }
});

export default People;
