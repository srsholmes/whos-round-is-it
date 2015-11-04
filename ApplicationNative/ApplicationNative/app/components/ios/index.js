'use strict';

var React = require('react-native');
var Reflux = require('reflux');

var Store = require('../../stores/store');
var Actions = require('../../actions/actions');

var AppRegistry = React.AppRegistry;
var StyleSheet = React.StyleSheet;
var Text = React.Text;
var View = React.View;

var ApplicationNative = React.createClass({
  displayName: 'ApplicationNative',

  mixins: [Reflux.connect(Store)],
  render: function render() {
    return React.createElement(
      View,
      { style: styles.container },
      React.createElement(
        Text,
        { style: styles.welcome },
        'This is the iOS App'
      ),
      React.createElement(
        Text,
        { onPress: function () {
            return Actions.clickHeading();
          }, style: styles.welcome },
        this.state.heading
      ),
      React.createElement(
        Text,
        { onPress: function () {
            return Actions.incrementCounter();
          } },
        'Click me to increment a counter'
      ),
      React.createElement(
        Text,
        { style: styles.counter },
        this.state.counter
      )
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  counter: {
    fontSize: 30,
    top: 10,
    fontWeight: 'bold'
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

AppRegistry.registerComponent('ApplicationNative', function () {
  return ApplicationNative;
});