var resultNum = 1;

function loadHistory() {
  // Load song history
  var songHistory = JSON.parse(localStorage.getItem('songHistory')) || [];
  var songHistoryContainer = document.getElementById('songHistoryContainer');

  // Create elements for each song history item
  songHistory.forEach(function (item, index) {
    var songName = item.name;
    var songUrl = item.url;

        //create a title and append it
          var resultTitle = document.createElement('h1');
          resultTitle.classList.add('aesthetic-font-modifier-outline-black');
          resultTitle.textContent = "--------";
          songHistoryContainer.appendChild(resultTitle);


    // Create the boxes around the item
    var songContainer = document.createElement('div');
    songContainer.classList.add('aesthetic-windows-95-modal');
    var songContent = document.createElement('div');
    songContent.classList.add('aesthetic-windows-95-modal-content');

    // Create text element for song name
    var songNameElement = document.createElement('p');
    songNameElement.textContent = songName;

    // Create img element for song URL
    var songImgElement = document.createElement('img');
    songImgElement.src = songUrl;

    // Append everything in order
    songContainer.appendChild(songContent);
    songContent.appendChild(songNameElement);
    songContent.appendChild(songImgElement);
    songHistoryContainer.appendChild(songContainer);
  });

  // Load map history
  var mapHistory = JSON.parse(localStorage.getItem('mapHistory')) || [];
  var mapHistoryContainer = document.getElementById('mapHistoryContainer');

  // Create elements for each map history item
  mapHistory.forEach(function (item) {
    var mapName = item.name;
    var mapUrl = item.url;

        
        //create a title and append it
          var resultTitle = document.createElement('h1');
          resultTitle.classList.add('aesthetic-font-modifier-outline-black');
          resultTitle.textContent = "Result " + resultNum;
          newResultNum();
          mapHistoryContainer.appendChild(resultTitle);

    // Create the boxes around the item
    var mapContainer = document.createElement('div');
    mapContainer.classList.add('aesthetic-windows-95-modal');
    var mapContent = document.createElement('div');
    mapContent.classList.add('aesthetic-windows-95-modal-content');

    // Create text element for map name
    var mapNameElement = document.createElement('p');
    mapNameElement.textContent = mapName;

    // Create img element for map URL
    var mapImgElement = document.createElement('img');
    mapImgElement.src = mapUrl;

    // Append everything in order
    mapContainer.appendChild(mapContent);
    mapContent.appendChild(mapNameElement);
    mapContent.appendChild(mapImgElement);
    mapHistoryContainer.appendChild(mapContainer);
  });
}

window.addEventListener('load', loadHistory);

// Function for the number to increase properly
function newResultNum() {
  resultNum = resultNum + 1;
}