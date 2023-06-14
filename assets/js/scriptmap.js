var submitButton = document.getElementById('submitButton')
var userFood = document.getElementById('foodType')
var foodSuggest = document.getElementById('foodSuggest')
var foodPic = document.getElementById('foodImage')


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
    currentLatitude = crd.latitude
    console.log(`Longitude: ${crd.longitude}`);
    currentLongitude = crd.longitude
    console.log(`More or less ${crd.accuracy} meters.`);

  }

    function getFoodSuggestions() {

      var googleAPIKey = 'AIzaSyATKPnuuTLSynb2Cq_YP-ZpPHpxUUyFRiQ'
     

      // Input variables
      const latitude = currentLatitude
      const longitude = currentLongitude;
      const keywords = userFood.value;

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
          var r = Math.floor(Math.random() * data.results.length);
          foodSuggest.textContent = data.results[r].name + ' Rating: ' + data.results[r].rating
          var suglatitude = data.results[r].geometry.location.lat
          var suglongitude = data.results[r].geometry.location.lng
          var markerCoordinates = `${suglatitude},${suglongitude}`;
          var markerLabel = data.results[r].name;

          const mappicapiUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${suglatitude},${suglongitude}&zoom=12&size=210x156&key=${googleAPIKey}&markers=label:${markerLabel}|${markerCoordinates}`;

            fetch(mappicapiUrl)
              .then(response => {
                if (response.ok) {
                  foodPic.setAttribute('src', response.url)
                  foodPic.removeAttribute('hidden')
                  return response.url
                  
                } 
                else {
                  throw new Error(`Request failed with status ${response.status}`);
                }
              })
               // Create an object for the song suggestion
              var mapHistoryItem = {
                name: data.results[r].name + ' Rating: ' + data.results[r].rating,
                url: mappicapiUrl
              };

              var mapHistory = JSON.parse(localStorage.getItem('mapHistory')) || [];

              mapHistory.push(mapHistoryItem);

              localStorage.setItem('mapHistory', JSON.stringify(mapHistory));
                
              
      })
      .catch(function(error) {
          console.log('Error:', error.message);
      });

    }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  
  navigator.geolocation.getCurrentPosition(success, error, options);

submitButton.addEventListener('click', getFoodSuggestions)

 
  


