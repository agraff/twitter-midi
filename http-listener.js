var http = require('http');
var robot = require('robotjs');

var port=process.argv[2] || 8888;
var address=process.argv[3] || "127.0.0.1";

function typeKeys(text) {
	robot.typeString(text);
}

function typeKeysAfterDelay(text, delaySeconds) {
	console.log('typing "' + text + '" in ' + delaySeconds + ' seconds.');
	setTimeout(function() {
		typeKeys(text);
		console.log('typed "' + text + '".');
	}, delaySeconds * 1000);
}

function getDelay(delayString) {
	var defaultDelaySeconds = 3;
	return parseInt(delayString) || defaultDelaySeconds;
}

function handleUrl(url) {
	var messageMatch = url.match(/^\/message\/([^\/]*)\/?(.*)$/i);

	if (messageMatch) {
		var message = messageMatch[1];
		var delaySeconds = getDelay(messageMatch[2]);
		typeKeysAfterDelay(message, delaySeconds);
		return 'typing "' + message + '" in ' + delaySeconds + ' seconds.';
	} else {
		return "No message to type. Example request: http://" + address + ":" + port + "/message/hello_world/5";
	}
}




var server = http.createServer(function (request, response) {
  console.log("REQUEST RECEIVED");
  console.log("   url: " + request.method + " " + request.url);
  var responseBody = handleUrl(request.url);
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end(responseBody);
});

server.listen(port, address);

console.log("Server running at http://" + address + ":" + port +"/");