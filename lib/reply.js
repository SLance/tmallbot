let reply = function (content, resultType = 'RESULT') {
  let info = {};
  info.returnCode = 0;
  info.returnErrorSolution = '';
  info.returnMessage = '';
  info.returnValue = {
    reply: content || '',
    resultType: resultType,
    actions: [],
    properties: {},
    executeCode: 'SUCCESS',
    msgInfo: ''
  };
  return info;
};

module.exports = reply;
