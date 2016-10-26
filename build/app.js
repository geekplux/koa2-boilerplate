'use strict';

var _nimei = require('./nimei');

var _nimei2 = _interopRequireDefault(_nimei);

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const app = new _koa2.default();
// response
app.use((() => {
  var _ref = _asyncToGenerator(function* (ctx) {
    ctx.body = 'Hello Woddffrld';
    (0, _nimei2.default)('nimeddfd');
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());

app.listen(3000, () => console.log('server started 3000'));
//# sourceMappingURL=app.js.map