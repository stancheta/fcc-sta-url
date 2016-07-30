var mongoURI = require('./mongoURI');

var randomSixtyTwo = function() {
  return Math.floor(Math.random() * 62);
}

var checkID = function(id) {

}

module.exports = {
  validateURL: function(url) {
    var validateTest = /https?:\/\/\w+\.\w+/gi
    return validateTest.test(url);
  },
  getCharacter: function(num) {

  },
  getNewID: function() {

  },
  handleNewURL: function(url) {
    var result = {}
    if (validateURL(url)) {

    } else {
      result.error = 'Wrong url format, make sure you have a valid protocol and real site.';
      return result;
    }
  },
  retreiveURL: function(id) {

  }
};
