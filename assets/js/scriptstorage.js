var resultNum = 1;

function loadHistory() {
    // Load song history
    var songHistory = JSON.parse(localStorage.getItem('songHistory')) || [];
    var songHistoryContainer = document.getElementById('songHistoryContainer');

    // Create elements for each song history item
    songHistory.forEach(function (item) {
      var songName = item.name;
      var songUrl = item.url;

          //create a title and append it
          var resultTitle = document.createElement('h1');
          resultTitle.classList.add('aesthetic-font-modifier-gradient-arizona');
          resultTitle.textContent = "--------";
          songHistoryContainer.appendChild(resultTitle);

      //create the boxes around the item
      var titleBar = document.createElement('div');
      titleBar.classList.add('aesthetic-windows-95-modal-title-bar');
      var titleBarText = document.createElement('div');
      titleBarText.classList.add('aesthetic-windows-95-modal-title-bar-text');
      titleBarText.textContent = "song.txt";
      var songContent = document.createElement('div');
      songContent.classList.add('aesthetic-windows-95-modal-content');
  
      // Create text element for song name
      var songNameElement = document.createElement('p');
      songNameElement.textContent = songName;
  
      // Create iframe element for song URL
      var songImgElement = document.createElement('img');
      songImgElement.src = songUrl;

      //append everything in order
      songHistoryContainer.appendChild(titleBar);
      titleBar.appendChild(titleBarText);
      songHistoryContainer.appendChild(songContent);
      songContent.appendChild(songNameElement);
      songContent.appendChild(songImgElement);
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
          resultTitle.classList.add('aesthetic-font-modifier-gradient-arizona');
          resultTitle.textContent = "Result " + resultNum;
          newResultNum();
          mapHistoryContainer.appendChild(resultTitle);

      //create the boxes around the item
      var titleBar = document.createElement('div');
      titleBar.classList.add('aesthetic-windows-95-modal-title-bar');
      var titleBarText = document.createElement('div');
      titleBarText.classList.add('aesthetic-windows-95-modal-title-bar-text');
      titleBarText.textContent = "food.txt";
      var mapContent = document.createElement('div');
      mapContent.classList.add('aesthetic-windows-95-modal-content');
  
      // Create text element for map name
      var mapNameElement = document.createElement('p');
      mapNameElement.textContent = mapName;
      mapHistoryContainer.appendChild(mapNameElement);
  
      // Create img element for map URL
      var mapImgElement = document.createElement('img');
      mapImgElement.src = mapUrl;
      mapHistoryContainer.appendChild(mapImgElement);

            //append everything in order
            mapHistoryContainer.appendChild(titleBar);
            titleBar.appendChild(titleBarText);
            mapHistoryContainer.appendChild(mapContent);

            mapContent.appendChild(mapNameElement);
            mapContent.appendChild(mapImgElement);
    });
  }

  window.addEventListener('load', loadHistory);

  //function for the number to increase properly
  function newResultNum() {
    resultNum = resultNum + 1;
  }

  