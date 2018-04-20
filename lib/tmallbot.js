let Handler = require('./handler');

let reply = require('./reply');

let middleware = function (config, handle) {
  if (handle instanceof Handler) {
    return handle.middlewarify();
  } else {
    return new Handler(config, handle).middlewarify();
  }
}

module.exports = middleware;
