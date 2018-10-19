const request = require('request');
const express = require('express');
const keys = require('./keys');
const Spotify = require('node-spotify-api');
require('dotenv').config();
const imdb = require('imdb');
const spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
  });



//function looks up artist performance venues
function getConcert(liriInquiry){

    request(`https://rest.bandsintown.com/artists/${liriInquiry}/events?app_id=codingbootcamp`, function(error, response, body){

        if(error){
            return (error);
        }

           let data = JSON.parse(body);//parses data to make it accessible
           
           for(let i = 0; i < data.length; i++){
           console.log('Venue name: ' + data[i].venue.name);
           console.log('City:       ' + data[i].venue.city);
           console.log('Country:    ' + data[i].venue.country + '\n');
           }

    });
}

//function searches Spotify for artist information
function getSongInfo(liriInquiry){
    spotify
    .search({ type: 'track', query: `${liriInquiry}`, limit: 5 })
    .then(function(response) {

      let data = JSON.stringify(response);
      data = JSON.parse(data);

      
      if(liriInquiry){
        for(let j = 0; j < data.tracks.items.length; j++){
            console.log('\nArtist:               ' + data.tracks.items[j].artists[0].name);
            console.log('Song title:           ' + data.tracks.items[j].name);
            console.log('Album:                ' + data.tracks.items[j].album.name);
                if(data.tracks.items[j].preview_url){console.log('Spotify preview link: ' + data.tracks.items[j].preview_url +'\n');}
                else if (data.tracks.items[j].preview_url = ''){ console.log('Spotify preview link: Preview link could not be found!');}
      }
    }
      else{ 
        spotify
        .search({ type: 'track', query: "What's My Age Again", limit: 1 })
        .then(function(response) {
    
          let data = JSON.stringify(response);
          data = JSON.parse(data);
    
          console.log('\nArtist:               ' + data.tracks.items[0].artists[0].name);
          console.log('Song title:           ' + data.tracks.items[0].name);
          console.log('Album:                ' + data.tracks.items[0].album.name);
          console.log('Spotify preview link: ' + data.tracks.items[0].preview_url +'\n');
    });
    }

    console.log('\n');
    })
    .catch(function(err) {
      console.log(err);
    });   
}


//functions looks up movie information
function getMovieInfo (liriInquiry){
    if(liriInquiry){
    const queryURL = `http://www.omdbapi.com/?t=${liriInquiry}&apikey=6b2c19b3&`;

    request( queryURL, function(err, response, body) {
        if(err)
         {
          console.log(err.stack);
         }
          let data = JSON.stringify(body);
          data = JSON.parse(body);

          console.log('\nMovie Title:            '+data.Title +'\nYear:                   '+data.Year+
          '\nIMDB Rating:            '+data.Ratings[0].Value+'\nRotten Tomatoes Rating: '+
          data.Ratings[1].Value+'\nCountry:                '+data.Country+'\nLanguage:               '+data.Language+
          '\nPlot:                   '+data.Plot+'\nActors:                 '+data.Actors+'\n\n');
          //console.log(data);
      });}
        else {
        request( "http://www.omdbapi.com/?t='Mr. Nobody'&apikey=6b2c19b3&", function(err, response, body) {
           
              let data = JSON.stringify(body);
              data = JSON.parse(body);
    
              console.log('\nMovie Title:            '+data.Title +'\nYear:                   '+data.Year+
              '\nIMDB Rating:            '+data.Ratings[0].Value+'\nRotten Tomatoes Rating: '+
              data.Ratings[1].Value+'\nCountry:                '+data.Country+'\nLanguage:               '+data.Language+
              '\nPlot:                   '+data.Plot+'\nActors:                 '+data.Actors+'\n\n');
              //console.log(data);
          });

      }

}



//function  reads file and executes text command
function doThis(){
    
 const fs = require('fs');
 fs.readFile('random.txt', 'utf8', function(error, data) {
  
  if (error) 
   {
     return console.log(error);
   }

   //getSongInfo(data);
   getMovieInfo(data);

});
}


module.exports = {
    getConcert:   getConcert,
    getSongInfo:  getSongInfo,
    getMovieInfo: getMovieInfo,
    doThis:       doThis 
};




