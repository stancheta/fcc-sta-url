var mongoURI = require('./mongoURI');

var randomSixtyTwo = function() {
  return Math.floor(Math.random() * 62);
}

var checkID = function(id) {

}

var validateURL = function(url) {
  var validateTest = /https?:\/\/\w+\.\w+/gi
  return validateTest.test(url);
};

var getCharacter = function(num) {
  if (num < 10) {
    return num.toString();
  } else if (num < 36) {
    return String.fromCharCode(num + 87);
  } else {
    return String.fromCharCode(num + 29);
  }
};

var getNewID = function() {
  var idArr = [];
  for (var i = 0; i < 4; i++) {
    idArr.push(getCharacter(randomSixtyTwo()));
  }
  return idArr.join('');
};

module.exports = {
  validateURL: validateURL,
  getCharacter: getCharacter,
  getNewID: getNewID,
  handleNewURL: function(url) {
    var result = {};
    var baseURL = 'https://sta-url.herokuapp.com/';
    var newID = getNewID();
    if (validateURL(url)) {
      result.original_url = url;
      result.short_url = baseURL + newID;
    } else {
      result.error = 'Wrong url format, make sure you have a valid protocol and real site.';
    }
    return result;
  },
  retreiveURL: function(id) {
    return 'https://google.com';
  }
};
