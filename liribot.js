const liri = require('./liri');

const liriCommand = process.argv[2];
const liriInquiry = process.argv[3];

//for (let i = 3; i < liriInquiry.length; i++){ liriInquiry += liriInquiry[i]; }

if (liriCommand === 'concert-this') {
    liri.getConcert(liriInquiry);
  }
  else if (liriCommand === 'spotify-this-song') {
    liri.getSongInfo(liriInquiry);
  }
  else if (liriCommand === 'movie-this') {
    liri.getMovieInfo(liriInquiry);
  }
  else if (liriCommand === 'do-what-it-says') {
    liri.doThis(liriInquiry);
  }
  else {
    artistResults = 'Enter a valid request!';
  }
