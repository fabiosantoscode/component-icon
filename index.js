'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Icon = (function (_React$Component) {
  _inherits(Icon, _React$Component);

  function Icon() {
    _classCallCheck(this, Icon);

    _React$Component.apply(this, arguments);
  }

  Icon.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return this.props.icon !== nextProps.icon || this.props.background !== nextProps.background || this.props.color !== nextProps.color || this.props.size !== nextProps.size || this.props.className !== nextProps.className || this.props.uri !== nextProps.uri;
  };

  Icon.prototype.render = function render() {
    /* eslint "react/no-danger": 0 */
    return _react2['default'].createElement('svg', {
      role: 'img',
      'aria-labelledby': 'title',
      className: 'Icon Icon-' + this.props.icon + ' ' + (this.props.className || ''),
      width: this.props.size,
      height: this.props.size,
      fill: this.props.color,
      style: {
        background: this.props.background
      },
      dangerouslySetInnerHTML: {
        // use string literals here to avoid extraneous newlinw chars
        '__html': '<title id="title">' + this.props.icon + ' icon</title>' + '<use ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + ('xlink:href="' + this.props.uri + '#' + this.props.icon + '"') + '></use>'
      }
    });
  };

  _createClass(Icon, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        icon: _react2['default'].PropTypes.oneOf(Icon.options.icon).isRequired,
        background: _react2['default'].PropTypes.string,
        color: _react2['default'].PropTypes.string,
        size: _react2['default'].PropTypes.string,
        className: _react2['default'].PropTypes.string,
        uri: _react2['default'].PropTypes.string
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        className: '',
        uri: '/assets/icons.svg',
        size: '60px'
      };
    }
  }, {
    key: 'options',
    get: function get() {
      return {
        icon: ['close', 'down', 'economist-small', 'economist', 'facebook', 'googleplus', 'hamburger', 'home', 'instagram', 'left', 'linkedin', 'magnifier', 'mail', 'minus', 'plus', 'right', 'rss', 'share', 'tumblr', 'twitter', 'up', 'user', 'whatsapp', 'worldif', 'youtube']
      };
    }
  }]);

  return Icon;
})(_react2['default'].Component);

exports['default'] = Icon;
module.exports = exports['default'];