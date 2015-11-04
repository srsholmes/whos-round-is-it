'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var Store = require('../../stores/store');
var Actions = require('../../actions/actions');

var App = _react2['default'].createClass({
  displayName: 'App',

  mixins: [_reflux2['default'].connect(Store)],

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'h1',
        null,
        'This is the Web Application'
      ),
      _react2['default'].createElement(
        'h2',
        { onClick: function () {
            return Actions.clickHeading();
          } },
        this.state.heading
      ),
      _react2['default'].createElement(
        'p',
        { onClick: function () {
            return Actions.incrementCounter();
          } },
        'Click me to increment a counter'
      ),
      _react2['default'].createElement(
        'p',
        null,
        this.state.counter
      )
    );
  }
});

_reactDom2['default'].render(_react2['default'].createElement(
  'div',
  null,
  _react2['default'].createElement(App, null)
), document.querySelector('[app]'));