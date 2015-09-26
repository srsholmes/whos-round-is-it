let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

import { LOCAL_STORAGE_KEY, DRINKS } from '../constants/constants';

//Variables to work set up the app.
let obj, people, drink;

let Store = Reflux.createStore({
  listenables: [Actions],

  init() {
    this._setupLocalStorage();
  },

  _setupLocalStorage() {
    //Set up the object
    this.contents = {
      chosenPerson: null,
      people: [],
      drink: null
    };

    console.log(localStorage.getItem(LOCAL_STORAGE_KEY));
    //If there is no local storage, set it to the empty this.contents.
    //Otherwise get the obj from local storage.
    if (localStorage.getItem(LOCAL_STORAGE_KEY) === null) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.contents)); 
    } else {
      this.contents = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    }
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
      people: [], 
      drink: null
    };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.contents));
    this.trigger(this.contents);
  },

  getInitialState() {
  	return this.contents;
  }

});

module.exports = Store;
