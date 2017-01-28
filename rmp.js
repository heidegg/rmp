var Twitter = require('twitter'); // appelle API TWITTER

var twitter = new Twitter({  // clées personelles
    consumer_key: 'TI0B71Ebmfz9wA81x9kQtnrda',
    consumer_secret: 'eCglpzfp3GWsfylq8TBhovAqgOE0qcBT5W8ATvigxCsH2EfMBB',
    access_token_key: '823903489847922688-EUTrtsDkv6BD2Wg7xALaSS0QMY7NqVh',
    access_token_secret: '9uxSqYQ0NoVcYEgzIREncwFiM23PEKIb43Vx6WHL7Ex23'
});


twitter.stream('statuses/filter', { track: '#retirezmoiphotoshop' }, // stream ON avec trackeur
    function(stream) {
    

    stream.on('data', function(tweet) { // affiche dans la console

    console.log(tweet.text);

    twitter.post('statuses/retweet', { id: tweet.id_str }, retweeted); // retweeter un tweet



        function retweeted(err, data, response) {     // permet de ne pas RT un tweet déjà RT  
            if (err) {
                console.log("Error: " + err.message);
            } else {
                console.log('Retweeted: ' + tweet.id);
      }
    }
  })
}).listen(process.env.PORT || 5000);
        
    
    