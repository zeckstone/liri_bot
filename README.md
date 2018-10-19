**LIRI BOT**

**Introduction**
Welcome! This is a node js program, termed LIRI BOT, it is designed to respond to user inputs with detailed information. The end user can search for upcoming concert venues and locations for their favorite artists, provide a song name to get more details about it (e.g. artist, album name, etc.), enter a movie name (returns date of movie, actors, year, etc.), and reads a local document to render results based on its text.


*Usage Instructions*

*Concert Search*
Run the application by typing *node liribot.js concert-this "[artist name]"* into the terminal and pressing ENTER to execute. Be sure to put artist name in quotation marks (e.g. "John Legend"). This should return upcoming concert venue name, city and country.

*Song Search*
Run the application by typing *node liribot.js spotify-this-song "[song name]"* into the terminal, press ENTER to execute. This should render results showing the artist name, song title, album name, and a Spotify preview link.

*Movie Search*
Start application by typing *node liribot.js movie-this "[movie name]"* into terminal, then hit ENTER to execute. Results include movie year, title, actors, country, language, plot and ratings.

*Text Commands*
Run application by typing "node liribot.js do-what-it-says." This reads a local file and renders results based on the document's text. The data from the file is passed into any of the above functions to produce the results. 

