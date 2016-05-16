(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *	Searchable Table
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *	Author: Jean-Pierre Sierens
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *	===========================================================================
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var SearchableTable = function (_React$Component) {
	_inherits(SearchableTable, _React$Component);

	function SearchableTable() {
		_classCallCheck(this, SearchableTable);

		// Initial state of the component

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SearchableTable).call(this));

		_this.state = { filterText: '' };
		return _this;
	}

	_createClass(SearchableTable, [{
		key: 'handleUserInput',
		value: function handleUserInput(filterText) {
			// When there's a change in the state, the component and all its
			// sub-components get updated.
			this.setState({ filterText: filterText });
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(SearchBar, {
					filterText: this.state.filterText,
					onUserInput: this.handleUserInput.bind(this)
				}),
				_react2.default.createElement(Table, {
					data: this.props.data,
					filterText: this.state.filterText
				})
			);
		}
	}]);

	return SearchableTable;
}(_react2.default.Component);

exports.default = SearchableTable;

var SearchBar = function (_React$Component2) {
	_inherits(SearchBar, _React$Component2);

	function SearchBar() {
		_classCallCheck(this, SearchBar);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SearchBar).apply(this, arguments));
	}

	_createClass(SearchBar, [{
		key: 'handleChange',
		value: function handleChange() {
			// passing filter data up by using a callback
			this.props.onUserInput(
			// ref is like the id
			this.refs.filterTextInput.value);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'form',
				null,
				_react2.default.createElement('input', {
					type: 'text',
					placeholder: 'Search for one keyword...',
					ref: 'filterTextInput',
					value: this.props.filterText,
					onChange: this.handleChange.bind(this)
				})
			);
		}
	}]);

	return SearchBar;
}(_react2.default.Component);

var Table = function (_React$Component3) {
	_inherits(Table, _React$Component3);

	function Table() {
		_classCallCheck(this, Table);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Table).apply(this, arguments));
	}

	_createClass(Table, [{
		key: 'render',
		value: function render() {
			var sections = [];
			var data = this.props.data;
			data.forEach(function (product) {
				if (product.name.indexOf(this.props.filterText) === -1) {
					return;
				}
				sections.push(_react2.default.createElement(Section, { key: product.name, data: product }));
			}.bind(this));
			return _react2.default.createElement(
				'div',
				null,
				sections
			);
		}
	}]);

	return Table;
}(_react2.default.Component);

var Section = function (_React$Component4) {
	_inherits(Section, _React$Component4);

	function Section() {
		_classCallCheck(this, Section);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Section).apply(this, arguments));
	}

	_createClass(Section, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'p',
					null,
					this.props.data.name,
					' = ',
					this.props.data.price,
					' '
				)
			);
		}
	}]);

	return Section;
}(_react2.default.Component);

},{"react":"react"}],2:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _SearchableTable = require('./SearchableTable');

var _SearchableTable2 = _interopRequireDefault(_SearchableTable);

var _data = require('./data');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Filterable CheatSheet Component
/*
*	Author: Jean-Pierre Sierens
*	===========================================================================
*/

_reactDom2.default.render(_react2.default.createElement(_SearchableTable2.default, { data: _data.data }), document.getElementById('searchableTable'));

},{"./SearchableTable":1,"./data":3,"react":"react","react-dom":"react-dom"}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var data = exports.data = [{ category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" }, { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" }, { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" }, { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" }, { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" }, { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }];

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvU2VhcmNoYWJsZVRhYmxlLmpzIiwiYXBwL2FwcC5qcyIsImFwcC9kYXRhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNNQTs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQixlOzs7QUFDcEIsNEJBQWM7QUFBQTs7OztBQUFBOztBQUdQLFFBQUssS0FBTCxHQUFhLEVBQUMsWUFBWSxFQUFiLEVBQWI7QUFITztBQUlWOzs7O2tDQUNlLFUsRUFBWTs7O0FBR3hCLFFBQUssUUFBTCxDQUFjLEVBQUMsWUFBWSxVQUFiLEVBQWQ7QUFDSDs7OzJCQUNJO0FBQ1AsVUFDQztBQUFBO0lBQUE7SUFDQyw4QkFBQyxTQUFEO0FBQ0MsaUJBQVksS0FBSyxLQUFMLENBQVcsVUFEeEI7QUFFZ0Isa0JBQWEsS0FBSyxlQUFMLENBQXFCLElBQXJCLENBQTBCLElBQTFCO0FBRjdCLE1BREQ7SUFLQyw4QkFBQyxLQUFEO0FBQ0MsV0FBTSxLQUFLLEtBQUwsQ0FBVyxJQURsQjtBQUVDLGlCQUFZLEtBQUssS0FBTCxDQUFXO0FBRnhCO0FBTEQsSUFERDtBQVlBOzs7O0VBeEIyQyxnQkFBTSxTOztrQkFBOUIsZTs7SUEyQmYsUzs7Ozs7Ozs7Ozs7aUNBQ1U7O0FBRVIsUUFBSyxLQUFMLENBQVcsV0FBWDs7QUFFSSxRQUFLLElBQUwsQ0FBVSxlQUFWLENBQTBCLEtBRjlCO0FBSUg7OzsyQkFDSTtBQUNQLFVBQ1U7QUFBQTtJQUFBO0lBQ0k7QUFDQyxXQUFLLE1BRE47QUFFQyxrQkFBWSwyQkFGYjtBQUdDLFVBQUksaUJBSEw7QUFJQyxZQUFRLEtBQUssS0FBTCxDQUFXLFVBSnBCO0FBS0MsZUFBVyxLQUFLLFlBQUwsQ0FBa0IsSUFBbEIsQ0FBdUIsSUFBdkI7QUFMWjtBQURKLElBRFY7QUFXQTs7OztFQXBCc0IsZ0JBQU0sUzs7SUF1QnhCLEs7Ozs7Ozs7Ozs7OzJCQUNHO0FBQ1AsT0FBSSxXQUFXLEVBQWY7QUFDQSxPQUFJLE9BQU8sS0FBSyxLQUFMLENBQVcsSUFBdEI7QUFDQSxRQUFLLE9BQUwsQ0FBYSxVQUFTLE9BQVQsRUFBaUI7QUFDN0IsUUFBSSxRQUFRLElBQVIsQ0FBYSxPQUFiLENBQXFCLEtBQUssS0FBTCxDQUFXLFVBQWhDLE1BQWdELENBQUMsQ0FBckQsRUFBd0Q7QUFDdkQ7QUFDQTtBQUNELGFBQVMsSUFBVCxDQUFjLDhCQUFDLE9BQUQsSUFBUyxLQUFLLFFBQVEsSUFBdEIsRUFBNEIsTUFBTSxPQUFsQyxHQUFkO0FBQ0EsSUFMWSxDQUtYLElBTFcsQ0FLTixJQUxNLENBQWI7QUFNQSxVQUNDO0FBQUE7SUFBQTtJQUFNO0FBQU4sSUFERDtBQUdBOzs7O0VBYmtCLGdCQUFNLFM7O0lBZ0JwQixPOzs7Ozs7Ozs7OzsyQkFDRztBQUNQLFVBQ0M7QUFBQTtJQUFBO0lBQ0M7QUFBQTtLQUFBO0tBQUksS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixJQUFwQjtLQUFBO0tBQTZCLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsS0FBN0M7S0FBQTtBQUFBO0FBREQsSUFERDtBQUtBOzs7O0VBUG9CLGdCQUFNLFM7Ozs7O0FDckU1Qjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUdBLG1CQUFTLE1BQVQsQ0FBZ0IsMkRBQWlCLGdCQUFqQixHQUFoQixFQUFnRCxTQUFTLGNBQVQsQ0FBd0IsaUJBQXhCLENBQWhEOzs7Ozs7OztBQ1hPLElBQU0sc0JBQU8sQ0FDbEIsRUFBQyxVQUFVLGdCQUFYLEVBQTZCLE9BQU8sUUFBcEMsRUFBOEMsU0FBUyxJQUF2RCxFQUE2RCxNQUFNLFVBQW5FLEVBRGtCLEVBRWxCLEVBQUMsVUFBVSxnQkFBWCxFQUE2QixPQUFPLE9BQXBDLEVBQTZDLFNBQVMsSUFBdEQsRUFBNEQsTUFBTSxVQUFsRSxFQUZrQixFQUdsQixFQUFDLFVBQVUsZ0JBQVgsRUFBNkIsT0FBTyxRQUFwQyxFQUE4QyxTQUFTLEtBQXZELEVBQThELE1BQU0sWUFBcEUsRUFIa0IsRUFJbEIsRUFBQyxVQUFVLGFBQVgsRUFBMEIsT0FBTyxRQUFqQyxFQUEyQyxTQUFTLElBQXBELEVBQTBELE1BQU0sWUFBaEUsRUFKa0IsRUFLbEIsRUFBQyxVQUFVLGFBQVgsRUFBMEIsT0FBTyxTQUFqQyxFQUE0QyxTQUFTLEtBQXJELEVBQTRELE1BQU0sVUFBbEUsRUFMa0IsRUFNbEIsRUFBQyxVQUFVLGFBQVgsRUFBMEIsT0FBTyxTQUFqQyxFQUE0QyxTQUFTLElBQXJELEVBQTJELE1BQU0sU0FBakUsRUFOa0IsQ0FBYiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKlxuKlx0U2VhcmNoYWJsZSBUYWJsZVxuKlx0QXV0aG9yOiBKZWFuLVBpZXJyZSBTaWVyZW5zXG4qXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiovXG4gXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuIFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoYWJsZVRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHQvLyBJbml0aWFsIHN0YXRlIG9mIHRoZSBjb21wb25lbnRcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtmaWx0ZXJUZXh0OiAnJ31cbiAgICB9XG4gICAgaGFuZGxlVXNlcklucHV0KGZpbHRlclRleHQpIHtcbiAgICBcdC8vIFdoZW4gdGhlcmUncyBhIGNoYW5nZSBpbiB0aGUgc3RhdGUsIHRoZSBjb21wb25lbnQgYW5kIGFsbCBpdHMgXG4gICAgXHQvLyBzdWItY29tcG9uZW50cyBnZXQgdXBkYXRlZC5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmlsdGVyVGV4dDogZmlsdGVyVGV4dH0pO1xuICAgIH1cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxTZWFyY2hCYXIgXG5cdFx0XHRcdFx0ZmlsdGVyVGV4dD17dGhpcy5zdGF0ZS5maWx0ZXJUZXh0fVxuICAgICAgICAgICAgICAgICAgICBvblVzZXJJbnB1dD17dGhpcy5oYW5kbGVVc2VySW5wdXQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAvPlxuXHRcdFx0XHQ8VGFibGUgXG5cdFx0XHRcdFx0ZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBcblx0XHRcdFx0XHRmaWx0ZXJUZXh0PXt0aGlzLnN0YXRlLmZpbHRlclRleHR9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG4gXG5jbGFzcyBTZWFyY2hCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRoYW5kbGVDaGFuZ2UoKSB7XG5cdFx0Ly8gcGFzc2luZyBmaWx0ZXIgZGF0YSB1cCBieSB1c2luZyBhIGNhbGxiYWNrXG4gICAgICAgIHRoaXMucHJvcHMub25Vc2VySW5wdXQoXG4gICAgICAgIFx0Ly8gcmVmIGlzIGxpa2UgdGhlIGlkXG4gICAgICAgICAgICB0aGlzLnJlZnMuZmlsdGVyVGV4dElucHV0LnZhbHVlXG4gICAgICAgICk7XG4gICAgfVxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gKFxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgIFx0dHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICBcdHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBvbmUga2V5d29yZC4uLlwiIFxuICAgICAgICAgICAgICAgIFx0cmVmPVwiZmlsdGVyVGV4dElucHV0XCJcbiAgICAgICAgICAgICAgICBcdHZhbHVlPSB7dGhpcy5wcm9wcy5maWx0ZXJUZXh0fVxuICAgICAgICAgICAgICAgIFx0b25DaGFuZ2U9IHt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfSBcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICApO1xuXHR9XG59XG4gXG5jbGFzcyBUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpe1xuXHRcdGxldCBzZWN0aW9ucyA9IFtdO1xuXHRcdGxldCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuXHRcdGRhdGEuZm9yRWFjaChmdW5jdGlvbihwcm9kdWN0KXtcblx0XHRcdGlmIChwcm9kdWN0Lm5hbWUuaW5kZXhPZih0aGlzLnByb3BzLmZpbHRlclRleHQpID09PSAtMSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRzZWN0aW9ucy5wdXNoKDxTZWN0aW9uIGtleT17cHJvZHVjdC5uYW1lfSBkYXRhPXtwcm9kdWN0fSAvPik7XG5cdFx0fS5iaW5kKHRoaXMpKVxuXHRcdHJldHVybihcblx0XHRcdDxkaXY+e3NlY3Rpb25zfTwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cbiBcbmNsYXNzIFNlY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8cD57dGhpcy5wcm9wcy5kYXRhLm5hbWV9ID0ge3RoaXMucHJvcHMuZGF0YS5wcmljZX0gPC9wPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSIsIi8qXG4qXHRBdXRob3I6IEplYW4tUGllcnJlIFNpZXJlbnNcbipcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFNlYXJjaGFibGVUYWJsZSBmcm9tICcuL1NlYXJjaGFibGVUYWJsZSc7XG5pbXBvcnQge2RhdGF9IGZyb20gJy4vZGF0YSc7XG5cbi8vIEZpbHRlcmFibGUgQ2hlYXRTaGVldCBDb21wb25lbnRcblJlYWN0RE9NLnJlbmRlcig8U2VhcmNoYWJsZVRhYmxlIGRhdGE9e2RhdGF9Lz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hhYmxlVGFibGUnKSk7IiwiZXhwb3J0IGNvbnN0IGRhdGEgPSBbXG4gIHtjYXRlZ29yeTogXCJTcG9ydGluZyBHb29kc1wiLCBwcmljZTogXCIkNDkuOTlcIiwgc3RvY2tlZDogdHJ1ZSwgbmFtZTogXCJGb290YmFsbFwifSxcbiAge2NhdGVnb3J5OiBcIlNwb3J0aW5nIEdvb2RzXCIsIHByaWNlOiBcIiQ5Ljk5XCIsIHN0b2NrZWQ6IHRydWUsIG5hbWU6IFwiQmFzZWJhbGxcIn0sXG4gIHtjYXRlZ29yeTogXCJTcG9ydGluZyBHb29kc1wiLCBwcmljZTogXCIkMjkuOTlcIiwgc3RvY2tlZDogZmFsc2UsIG5hbWU6IFwiQmFza2V0YmFsbFwifSxcbiAge2NhdGVnb3J5OiBcIkVsZWN0cm9uaWNzXCIsIHByaWNlOiBcIiQ5OS45OVwiLCBzdG9ja2VkOiB0cnVlLCBuYW1lOiBcImlQb2QgVG91Y2hcIn0sXG4gIHtjYXRlZ29yeTogXCJFbGVjdHJvbmljc1wiLCBwcmljZTogXCIkMzk5Ljk5XCIsIHN0b2NrZWQ6IGZhbHNlLCBuYW1lOiBcImlQaG9uZSA1XCJ9LFxuICB7Y2F0ZWdvcnk6IFwiRWxlY3Ryb25pY3NcIiwgcHJpY2U6IFwiJDE5OS45OVwiLCBzdG9ja2VkOiB0cnVlLCBuYW1lOiBcIk5leHVzIDdcIn1cbl07Il19
