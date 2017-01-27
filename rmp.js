

/* Configure the Twitter API */
var Twitter = require('twitter');

var twitter = new Twitter({
    consumer_key: 'TI0B71Ebmfz9wA81x9kQtnrda',
    consumer_secret: 'eCglpzfp3GWsfylq8TBhovAqgOE0qcBT5W8ATvigxCsH2EfMBB',
    access_token_key: '823903489847922688-EUTrtsDkv6BD2Wg7xALaSS0QMY7NqVh',
    access_token_secret: '9uxSqYQ0NoVcYEgzIREncwFiM23PEKIb43Vx6WHL7Ex23'
});



// Making a Twit object for connection to the API


// Search the stream for a kind of tweet


twitter.stream('statuses/filter', { track: '#retirezmoiphotoshop' },
    function(stream) {
    

  // ... when we get tweet data...
    stream.on('data', function(tweet) {

    // print out the text of the tweet that came in
    console.log(tweet.text);



    twitter.post('statuses/retweet', { id: tweet.id_str }, retweeted);



        function retweeted(err, data, response) {
            if (err) {
                console.log("Error: " + err.message);
            } else {
                console.log('Retweeted: ' + tweet.id);
      }
    }
  })
});
        
    
    