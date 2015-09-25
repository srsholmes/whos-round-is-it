let React = require('react');
let Reflux = require('reflux');

let Person = React.createClass({
  render(){
    let beerIcon = new Image();
        beerIcon.src = '/assets/img/beer-emoji.png';
    let person = this.props.name;
    
    if (person){
      return (
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
    } else {
      return (
        <div></div>
      )
    }
  }
});

export default Person;
