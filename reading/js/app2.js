// Create a request variable and assign a new XMLHttpRequest object to it.
let request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://www.dropbox.com/oauth2/authorize?client_id=<APP_KEY>&response_type=code', true);

request.onload = function () {
  // Begin accessing JSON data here
  }


// Send request
request.send();
