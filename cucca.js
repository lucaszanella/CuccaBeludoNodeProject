var fs = require('fs');
var Twit = require('twit')

var tokens = {};
var tokensFile = fs.readFileSync('tokens.txt', 'utf8');
var tokensList = tokensFile.replace(/"/g, '').replace(/ /g, '').split(/\r?\n/); //Fix blank line in the end

//List of accounts I own
var listOfAccountNames = [];//just for convenience, but for immutability I'll prefer to use the list of IDs below
var listOfAccountIds = []

listOfAccountIds.push("756710315048534016");//cuccabeludo's id


//Iterates through each token name and value and saves it to tokens dict
tokensList.forEach(function(token) {
    tokenName = token.split("=")[0]
    tokenValue = token.split("=")[1]
        //console.log(currentToken);
    tokens[tokenName] = tokenValue;
});

var T = new Twit({
    consumer_key: tokens["consumer_key"],
    consumer_secret: tokens["consumer_secret"],
    access_token: tokens["access_token"],
    access_token_secret: tokens["access_token_secret"],
    timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
})

var stream = T.stream('statuses/sample')

//
//  filter the twitter public stream by the word 'mango'.
//
var stream = T.stream('user')

stream.on('direct_message', function(direct_message) {
    //console.log('direct_message',direct_message);
    var text = direct_message["direct_message"]["text"];
    var username = direct_message["direct_message"]["sender"]["screen_name"];
    var senderId = direct_message["direct_message"]["sender"]["id_str"];
    //Prevents the bot from replying itself, since a DM send is recognized simply as a DM
    if (listOfAccountIds.indexOf(senderId)==-1) {
        var name = direct_message["direct_message"]["sender"]["name"];
        console.log(name + ": " + text + " - (" + username + ")")
        T.post('statuses/update', {
            status: text
        }, function(err, data, response) {
            //console.log(data)
            var id = data["id_str"];
            var tweetLink = "https://twitter.com/cuccabeludo/status/" + id;
            T.post('direct_messages/new', {
                screen_name: username,
                text: tweetLink
            }, function(err, data, response) {
                //console.log(data)
            })

        })
    }
})
