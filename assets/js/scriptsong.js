
var clientId = '0e188aa06ff14b0a8bac4604dabcbed8';
var clientSecret = 'efd2188254884ba4978ddbbdadfc2cb4';

var userGenre = document.getElementById('genre')
var submitButton = document.getElementById('submitButton')
var songSuggestion = document.getElementById('songSuggest')
var songPic = document.getElementById('songImage')
var player = document.getElementById('spotifyPlayer');

// Function to encode client ID and client secret in Base64
function getEncodedCredentials(clientId, clientSecret) {
  var credentials = `${clientId}:${clientSecret}`;
  return btoa(credentials);
}


function getSongSuggestions(spotifyUrl) {
    // Get the access token
      fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${getEncodedCredentials(clientId, clientSecret)}`
        },
        body: 'grant_type=client_credentials'
      })
      .then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to obtain access token');
        }
      })
      .then(function (data) {
        var accessToken = data.access_token;
        var genre = userGenre.value
        var userSadRate = document.querySelector('input[name="my-aesthetic-windows-95-radio"]:checked');
        var valence = userSadRate.value
        var spotifyUrl = `https://api.spotify.com/v1/recommendations?market=ES&seed_genres=${genre.toLowerCase()}&target_valence=${valence}`;
        // Use the access token to make API requests
        fetch(spotifyUrl, {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        })
        .then(function (response) {
          if (response.ok) {
            console.log(response);
            response.json().then(function (data) {
              console.log(data);

              var r = Math.floor(Math.random() * data.tracks.length);
              songSuggestion.textContent = data.tracks[r].name + ' : ' + data.tracks[r].artists[0].name
              var songId = data.tracks[r].id;
              player.setAttribute('src', `https://open.spotify.com/embed/track/${songId}?utm_source=generator`);
              console.log(data.tracks[r].href)

              // Create an object for the song suggestion
              var songHistoryItem = {
                name: data.tracks[r].name + ' : ' + data.tracks[r].artists[0].name,
                url: data.tracks[r].album.images[0].url
              };

              var songHistory = JSON.parse(localStorage.getItem('songHistory')) || [];

              songHistory.push(songHistoryItem);

              localStorage.setItem('songHistory', JSON.stringify(songHistory));

            });
          } else {
            throw new Error('API request failed');
          }
        });
      })
      .catch(function (error) {
        console.error(error);
      });
}

submitButton.addEventListener('click' , getSongSuggestions)

