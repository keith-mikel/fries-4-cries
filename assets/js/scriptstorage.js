function loadHistory() {
    // Load song history
    var songHistory = JSON.parse(localStorage.getItem('songHistory')) || [];
    var songHistoryContainer = document.getElementById('songHistoryContainer');
  
    // Create elements for each song history item
    songHistory.forEach(function (item) {
      var songName = item.name;
      var songUrl = item.url;
  
      // Create text element for song name
      var songNameElement = document.createElement('p');
      songNameElement.textContent = songName;
      songHistoryContainer.appendChild(songNameElement);
  
      // Create iframe element for song URL
      var songImgElement = document.createElement('img');
      songImgElement.src = songUrl;
      songHistoryContainer.appendChild(songImgElement);
    });
  
    // Load map history
    var mapHistory = JSON.parse(localStorage.getItem('mapHistory')) || [];
    var mapHistoryContainer = document.getElementById('mapHistoryContainer');
  
    // Create elements for each map history item
    mapHistory.forEach(function (item) {
      var mapName = item.name;
      var mapUrl = item.url;
  
      // Create text element for map name
      var mapNameElement = document.createElement('p');
      mapNameElement.textContent = mapName;
      mapHistoryContainer.appendChild(mapNameElement);
  
      // Create img element for map URL
      var mapImgElement = document.createElement('img');
      mapImgElement.src = mapUrl;
      mapHistoryContainer.appendChild(mapImgElement);
    });
  }

  window.addEventListener('load', loadHistory);

  