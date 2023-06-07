var currentLatitude;
var currentLongitude;

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  
  function success(pos) {
    const crd = pos.coords;
  
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);

    currentLatitude = crd.latitude
    currentLongitude = crd.longitude

    var googleAPIKey = 'AIzaSyATKPnuuTLSynb2Cq_YP-ZpPHpxUUyFRiQ'

    // Input variables
    const latitude = currentLatitude
    const longitude = currentLongitude;
    const keywords = 'ice cream';

    // Construct the API request URL
    const apiKey = googleAPIKey;
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=5000&keyword=${encodeURIComponent(keywords)}&key=${apiKey}`;

    // Make the API request using Fetch
    fetch(proxyUrl + url)
    .then(function(response) {
        if (response.ok) {
        return response.json();
        } else {
        throw new Error('Network response was not ok.');
        }
    })
    .then(function(data) {
        console.log(data);
        // Process the retrieved data as needed
    })
    .catch(function(error) {
        console.log('Error:', error.message);
    });

  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);
