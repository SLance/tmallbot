# tmallbot
天猫精灵Node库

[![Travis](https://travis-ci.org/SLance/tmallbot.svg?branch=master)](https://travis-ci.org/SLance/tmallbot)

## Installation

```sh
$ npm i tmallbot
```

## Use with Connect/Express

```js
let tmallbot = require('tmallbot');

let config = {};

app.use(express.query());
app.use('/tmallbot', tmallbot(config, function (req, res, next) {
  var data = req.body;
  if (data.utterance === '你好!') {
    res.reply('你也好');
  } else if (data.utterance === '我想听音乐') {
    res.reply('你想听谁的音乐？', 'ASK_INF');
  } else {
    res.reply({
      "returnCode": 0,
      "returnErrorSolution": "",
      "returnMessage": "",
      "returnValue": {
        "reply": "Hello World!!!",
        "resultType": "RESULT",
        "actions": [],
        "properties": {},
        "executeCode": "SUCCESS",
        "msgInfo": ""
      }
    });
  }
}));
```
