'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JsonReader = function () {
	function JsonReader() {
		_classCallCheck(this, JsonReader);
	}

	_createClass(JsonReader, null, [{
		key: 'getJsonFromUrlAsync',
		value: function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
				var result;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.prev = 0;
								_context.next = 3;
								return $.ajax({
									url: url,
									dataType: 'json',
									async: true
								});

							case 3:
								result = _context.sent;
								return _context.abrupt('return', result);

							case 7:
								_context.prev = 7;
								_context.t0 = _context['catch'](0);

								console.error(_context.t0);

							case 10:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this, [[0, 7]]);
			}));

			function getJsonFromUrlAsync(_x) {
				return _ref.apply(this, arguments);
			}

			return getJsonFromUrlAsync;
		}()
	}]);

	return JsonReader;
}();

exports.default = JsonReader;