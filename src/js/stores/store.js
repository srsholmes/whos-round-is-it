let Reflux = require('reflux');
let Actions = require('../actions/actions');

import { LOCAL_STORAGE_KEY, DRINKS } from '../constants/constants';

let Store = Reflux.createStore({
  listenables: [Actions],

  init() {
    this.contents = {
      chosenPerson: null,
      people: [],
      group: [],
      drink: null,
      dataValid: true
    };
    this._setupLocalStorage();
  },

  _setupLocalStorage() {
    let localStorageItem = localStorage.getItem(LOCAL_STORAGE_KEY);
    localStorageItem === null || JSON.parse(localStorageItem).dataValid !== true ? localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.contents)) : this.contents = JSON.parse(localStorageItem);
  },

  _updateLocalStorage(obj) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(obj));
  },

  onChooseDrink(i) {
    this.contents.drink = DRINKS[i];
    this._updateLocalStorage(this.contents);
    this.trigger(this.contents);
  },

  onAddName(name) {
  	this.contents.people.push(name);
    this.contents.group.push(name);
    this._updateLocalStorage(this.contents);
  	this.trigger(this.contents);
  },

  onChooseLad() {
  	let people = this.contents.people;
    let group = this.contents.group;
  	let num = Math.floor(people.length * Math.random());
  	let choice = people[num];
  	people.splice(num, 1);
    this.contents.chosenPerson = choice;
    this.contents.peope = people;
    this.trigger(this.contents);
  },

  onMixDrinks() {
    this.contents = {
      chosenPerson: null,
      people: this.contents.people,
      group: this.contents.group,
      drink: null,
      dataValid: true
    };
    this._updateLocalStorage(this.contents);
    this.trigger(this.contents);
  },

  onNewRound() {
    this.contents.people = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)).group;
    this.contents.chosenPerson = null;
    this._updateLocalStorage(this.contents);
    this.trigger(this.contents);
  },

  onClearLads() {
    this.contents = {
      chosenPerson: null,
      people: [],
      group:[],
      drink: this.contents.drink,
      dataValid: true
    };
    this._updateLocalStorage(this.contents);
    this.trigger(this.contents);
  },

  getInitialState() {
  	return this.contents;
  }

});

module.exports = Store;
