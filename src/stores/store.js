let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

import { LOCAL_STORAGE_KEY, DRINKS } from '../constants/constants';

//Variables to work set up the app.
let people;

let Store = Reflux.createStore({
  listenables: [Actions],

  init() {
    this._setupLocalStorage();
    this.contents = {
    	chosenPerson: null,
    	people: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)),
      drink: null
    };
  },

  _setupLocalStorage() {
    if (localStorage.getItem(LOCAL_STORAGE_KEY) === null) {
      people = [];
    } else {
      people = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    }
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(people));
    people.push(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
  },

  _updatePeople(people) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(people));
  },

  onAddName(name) {
  	this.contents.people.push(name);
    this._updatePeople(this.contents.people);
  	this.trigger(this.contents);
  },

  onChooseLad() {
  	let people = this.contents.people;
  	let num = Math.floor(people.length * Math.random());
  	let choice = people[num];
  	people.splice(num, 1);
  	this.contents = {
  		chosenPerson: choice,
    	people: people
  	};
  	this.trigger(this.contents);
  },

  onMixDrinks() {
    this.contents.drink = DRINKS[Math.floor(Math.random() * DRINKS.length)];
    this.trigger(this.contents);
  },

  onClearLads() {
    this.contents = {
      chosenPerson: null,
      people: []
    };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.contents.people));
    this.trigger(this.contents);
  },

  getInitialState() {
  	return this.contents;
  }

});

module.exports = Store;
