var http = require('http');
var robot = require('robotjs');

var port=process.argv[2] || 8888;
var address=process.argv[3] || "127.0.0.1";

function handleUrl(url) {
	var messageMatch = url.match(/^\/message\/(.*)$/i);
	if (messageMatch) {
		var message = messageMatch[1];
		setTimeout(function() {robot.typeString(message);}, 3000);
		return 'message: "' + message + '"';
	} else {
		return "No message received.";
	}
}

var server = http.createServer(function (request, response) {
  console.log("REQUEST RECEIVED");
  console.log("   url: " + request.method + " " + request.url);
  var responseBody = handleUrl(request.url);
  request.on("data", function(chunk) {
    console.log("   body: " + chunk);
  });

  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end(responseBody);
});

server.listen(port, address);

console.log("Server running at http://" + address + ":" + port +"/");