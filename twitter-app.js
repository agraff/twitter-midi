//Callback functions
var error = function (err, response, body) {
    console.log('--- ERROR ---');
    console.log(err);
    console.log('-------------');
};

var success = function (data) {
    console.log('==== DATA ====');
    console.log(data);
    console.log('==============');
};


var Twitter = require('twitter-node-client').Twitter;

var config = {
    "consumerKey": process.env.TWITTER_CONSUMER_KEY,
    "consumerSecret": process.env.TWITTER_CONSUMER_SECRET,
    "accessToken": process.env.TWITTER_ACCESS_TOKEN_KEY,
    "accessTokenSecret": process.env.TWITTER_ACCESS_TOKEN_SECRET,
    "callBackUrl": "http://www.example.com"
};

var twitter = new Twitter(config);

twitter.getTweet({ id: '1111111111'}, error, success);