var Twitter = require('twitter');
randomIndex = -1
var twitter = new Twitter({
    consumer_key: 'SI1pV8Ka3KyTh70KEh4XU8jmI',
    consumer_secret: 'P1gAcb3gw5tTNsFdDRjohtx3fzrOrLkRCm25MIKk9hPY8c4Dgm',
    access_token_key: '794479748051304449-mb4DQIOT9ink7hOGvPowwXZAyfeTRUB',
    access_token_secret: 'ptDA9HRICdq7fDRRkE619U1lGtg07cdOfcT6HIpGRBsGm'
});
var ossphrases = [
" agrément",
" agrémenter",
" agresseur",
" agressif",
" agression",
" agressions",
" agressive",
" agressivement"
]


function satweet(){
   
   
    var random = (randomIndex + 1);
    randomIndex = random
   
    
    

    //build our reply string grabbing the string in that randomIndex we've calculated
    var reply = "Fuck" + ossphrases[randomIndex]
twitter.post('statuses/update', {status: reply},  function(error, tweet, response){
    if(error){
        console.log(error);
    }
    console.log(tweet);  // Tweet body.
    console.log(response);  // Raw response object.
});
    var dmc_setTimeout = setTimeout(satweet,900000);
}


satweet();