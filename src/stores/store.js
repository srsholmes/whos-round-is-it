let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

let Store = Reflux.createStore({
  listenables: [Actions],

  init() {
    console.log('store init');
    this.contents = {
    	chosenPerson: null,
    	people: []
    };
  },

  onAddName(name) {
  	this.contents.people.push(name);
  	this.trigger(this.contents);
  },

  onButtonClick() {
  	var people = this.contents.people;
  	var choice = people[Math.floor(people.length * Math.random())];
  	people.splice(choice, 1);

  	this.contents = {
  		chosenPerson: choice,
    	people: people
  	};

  	this.trigger(this.contents);
  },

  getInitialState() {
  	return this.contents;
  }

});

module.exports = Store;
