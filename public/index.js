
var handleNewURL = (function () {
  var queryBtn = document.getElementById('query-btn');
  var queryInput = document.getElementById('query');
  var queryReturn = document.getElementById('query-return');
  var ENTERKEY = 13;

  function request(url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = JSON.parse(request.responseText);
        callback(0, data);
      } else {
        // We reached our target server, but it returned an error
        console.log('there was a server-side error');
        callback(new Error('There was a server-side error'));
      }
    };
    request.onerror = function() {
      // There was a connection error of some sort
      console.log('there was a connection error');
      callback(new Error('There was a connection error'));
    };
    request.send();
  }

  function handleInput() {
    var input = queryInput.value;
    if (input.length > 0) {
      request('/new/' + input, function(err, data) {
        if (err || data.error) {
          queryReturn.textContent = err.error || data.error;
        } else {
          queryReturn.textContent = 'Your "shortened" url is ' + data.short_url;
          queryInput.value = '';
        }
      })
    }
  }

  function setEvents() {
    queryBtn.addEventListener('click', handleInput, false);
    queryInput.addEventListener('keyup', function(e) {
      if (e.keyCode === ENTERKEY) {
        handleInput();
      }
    })
  }

  return {
    setEvents: setEvents
  };
})();

handleNewURL.setEvents();
