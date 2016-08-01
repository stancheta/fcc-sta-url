var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var mongoURL = process.env.STA_URL_DB;

var randomSixtyTwo = function() {
  return Math.floor(Math.random() * 62);
}

var insertURL = function(id, url) {
  console.log(mongoURL);
  MongoClient.connect(mongoURL, function (err, db) {
    if (err) {
      console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
      console.log('Connection established');
      db.collection('url').update({'short_id': id}, {'short_id': id, 'url': url}, {'upsert':true});
      db.close();
    }
  });
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
  insertURL: insertURL,
  handleNewURL: function(url) {
    var result = {};
    var baseURL = 'https://sta-url.herokuapp.com/';
    var newID = getNewID();
    if (validateURL(url)) {
      insertURL(newID, url);
      result.original_url = url;
      result.short_url = baseURL + newID;
    } else {
      result.error = 'Wrong url format, make sure you have a valid protocol and real site.';
    }
    return result;
  },
  retreiveURL: function(id, callback) {

    if (id.length > 4) {
      callback(new Error('invalid id'));
    }
    MongoClient.connect(mongoURL, function (err, db) {
      if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
      } else {
        console.log('Connection established');
        db.collection('url').findOne({'short_id': id}, function(err, item) {
          if (err) {
            console.log(err);
            callback(new Error('invalid id'));
          }
          if (result) {
            callback(0, item.url);
          } else {
            callback(new Error('id not found'));
          }
        })
        db.close();
      }
    });
  }
};
