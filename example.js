'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('./');

var _2 = _interopRequireDefault(_);

var _reactSimpletabs = require('react-simpletabs');

var _reactSimpletabs2 = _interopRequireDefault(_reactSimpletabs);

var _path = require('path');

var base = typeof window === 'object' ? window.location.pathname : '';
var pathPrefix = undefined;

if (base === '/') {
  pathPrefix = '';
} else if (/\/$/.test(base)) {
  pathPrefix = base;
} else if (base) {
  pathPrefix = _path.dirname(base);
} else {
  pathPrefix = '';
}

var svgUri = pathPrefix + '/assets/icons.svg';

exports['default'] = _react2['default'].createElement(
  _reactSimpletabs2['default'],
  { className: 'library--example-tabs' },
  _react2['default'].createElement(
    _reactSimpletabs2['default'].Panel,
    { title: 'Default version' },
    _2['default'].options.icon.map(function (iconType) {
      var key = 'default--' + iconType;
      return _react2['default'].createElement(_2['default'], { icon: iconType, uri: svgUri, key: key });
    })
  ),
  _react2['default'].createElement(
    _reactSimpletabs2['default'].Panel,
    { title: 'Rounded' },
    _2['default'].options.icon.map(function (iconType) {
      var key = 'rounded--' + iconType;
      return _react2['default'].createElement(_2['default'], { icon: iconType, uri: svgUri, className: 'rounded', color: 'white',
        background: 'black', key: key
      });
    })
  ),
  _react2['default'].createElement(
    _reactSimpletabs2['default'].Panel,
    { title: 'Icons in a background-image' },
    _2['default'].options.icon.map(function (iconType) {
      var className = 'icon icon--' + iconType;
      return _react2['default'].createElement(
        'span',
        { className: className, key: className },
        'Text for a11y and SEO purposes.'
      );
    })
  ),
  _react2['default'].createElement(
    _reactSimpletabs2['default'].Panel,
    { title: 'Icons in a background-image (london color)', style: { background: '#333' } },
    _2['default'].options.icon.map(function (iconType) {
      var className = 'icon icon--' + iconType + '-london';
      return _react2['default'].createElement(
        'span',
        { className: className, key: className },
        'Text for a11y and SEO purposes.'
      );
    })
  )
);
module.exports = exports['default'];