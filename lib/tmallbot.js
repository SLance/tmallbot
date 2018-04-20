let Handler = require('./handler');

let reply = require('./reply');

let middleware = function (handle) {
  if (handle instanceof Handler) {
    return handle.middlewarify();
  } else {
    return new Handler(handle).middlewarify();
  }
}

module.exports = middleware;
