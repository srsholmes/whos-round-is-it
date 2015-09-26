let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

import { LOCAL_STORAGE_KEY, DRINKS } from '../constants/constants';

//Variables to work set up the app.
let obj, people, drink;

let Store = Reflux.createStore({
  listenables: [Actions],

  init() {
    this.contents = {
      chosenPerson: null,
      people: [],
      drink: null
    };
    this._setupLocalStorage();
  },

  _setupLocalStorage() {
    localStorage.getItem(LOCAL_STORAGE_KEY) === null ? localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.contents)) : this.contents = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  },

  _updateLocalStorage(obj) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(obj));
  },

  onChooseDrink(drink) {
    this.contents.drink = DRINKS[drink];
    this._updateLocalStorage(this.contents);
    this.trigger(this.contents);
  },

  onAddName(name) {
  	this.contents.people.push(name);
    this._updateLocalStorage(this.contents);
  	this.trigger(this.contents);
  },

  onChooseLad() {
  	let people = this.contents.people;
  	let num = Math.floor(people.length * Math.random());
  	let choice = people[num];
  	people.splice(num, 1);
  	this.contents = {
  		chosenPerson: choice,
    	people: people,
      drink: this.contents.drink
  	};
  	this.trigger(this.contents);
  },

  onMixDrinks() {
    this.contents = {
      chosenPerson: null,
      people: this.contents.people, 
      drink: null
    };
    this.trigger(this.contents);
  },

  onClearLads() {
    this.contents = {
      chosenPerson: null,
      people: [], 
      drink: this.contents.drink
    };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.contents));
    this.trigger(this.contents);
  },

  getInitialState() {
  	return this.contents;
  }

});

module.exports = Store;
