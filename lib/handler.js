let reply = require('./reply');

class Handler {
  constructor(handle) {
    this.handle = handle;
  }

  setHandler(handle) {
    this.handle = handle;
  }

  getHandler() {
    return this.handle || function (info, req, res, next) {
      next();
    };
  }

  middlewarify() {
    let that = this;
    return function (req, res, next) {
      res.reply = function(content, resultType) {
        if (arguments.length === 1 && typeof content !== 'string') {
          res.send(content);
        } else {
          res.send(reply(content, resultType));
        }
      };
      let method = req.method;
      if (method === 'GET') {
        res.status(200).send();
      } else if (method === 'POST') {
        that.handle(req, res, next);
      } else {
        res.status(501).send('Not Implemented');
      }
    }
  }
}

module.exports = Handler;
