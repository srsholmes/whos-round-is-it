'use strict';

var React = require('react-native');
var Reflux = require('reflux');

let Store = require('../../stores/store');
let Actions = require('../../actions/actions');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var ApplicationNative = React.createClass({

  mixins: [
    Reflux.connect(Store)
  ],
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>This is the iOS App</Text>
        <Text onPress={() => Actions.clickHeading()} style={styles.welcome}>
          {this.state.heading}
        </Text>
        <Text onPress={() => Actions.incrementCounter()}>Click me to increment a counter</Text>
        <Text style={styles.counter}>{this.state.counter}</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  counter: {
    fontSize: 30,
    top: 10,
    fontWeight: 'bold'
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ApplicationNative', () => ApplicationNative);
