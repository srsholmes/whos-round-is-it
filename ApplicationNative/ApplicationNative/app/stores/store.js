'use strict';

var Reflux = require('reflux');
var Actions = require('../actions/actions');

var Store = Reflux.createStore({
  //Set up multiple stores as triggers on this store affect
  //everything listening to them.
  listenables: [Actions],

  init: function init() {
    this.contents = {
      heading: 'This is my initial state heading',
      counter: 0
    };
  },

  getInitialState: function getInitialState() {
    return this.contents;
  },

  onClickHeading: function onClickHeading() {
    this.contents.heading = 'You changed the heading';
    this.trigger(this.contents);
  },

  onIncrementCounter: function onIncrementCounter() {
    this.contents.counter++;
    this.trigger(this.contents);
  }

});

module.exports = Store;