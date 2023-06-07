
var clientId = '0e188aa06ff14b0a8bac4604dabcbed8';
var clientSecret = 'efd2188254884ba4978ddbbdadfc2cb4';


// Function to encode client ID and client secret in Base64
function getEncodedCredentials(clientId, clientSecret) {
  var credentials = `${clientId}:${clientSecret}`;
  return btoa(credentials);
}

var spotifyUrl = 'https://api.spotify.com/v1/recommendations?market=ES&seed_genres=country&target_valence=.1';

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
      });
    } else {
      throw new Error('API request failed');
    }
  });
})
.catch(function (error) {
  console.error(error);
});

