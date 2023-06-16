//testing random background script
var images = ['bg-01.jpg', 'bg-02.jpg', 'bg-03.jpg', 'bg-04.jpg', 'bg-05.jpg'];
document.body.style.backgroundImage = "url('assets/css/images/" + images[Math.floor(Math.random() * images.length)] + "')";
//random image script for loader
var spinners = ['spin-01.gif', 'spin-02.gif', "spin-03.gif", "spin-04.gif", "spin-05.gif"];
function randomizeSpinner () {
    var spinImg = document.getElementById("spinner");
    var randomSpin = "assets/css/images/" + spinners[Math.floor(Math.random() * spinners.length)]
    spinImg.src = randomSpin;
}

var firstModal = document.getElementById("first-modal");
var secondModal = document.getElementById("second-modal");
var loadingModal = document.getElementById("loading-modal");
var startBtn = document.getElementById("start-btn");
var exit = document.getElementById("exit");
var exit2 = document.getElementById("exit2");
var submitBtn = document.getElementById("submitButton");
var infoContainer = document.getElementById("info-container");

var modalIsOn = false;

//close modals
exit.onclick = function() {
    firstModal.style.display = "none";
    modalIsOn = false;
    decideShow ()
  }
exit2.onclick = function() {
    secondModal.style.display = "none";
    modalIsOn = false;
    decideShow ()
}
//open first modal
startBtn.onclick = function() {
    console.log("starting!");
    modalIsOn = true;
    firstModal.style.display = "block";
    decideShow ();
  }
  //display loading modal for a couple seconds
  submitBtn.onclick = function() {

    firstModal.style.display = "none";
    loadingModal.style.display = "block";
    show();
    
      }
  function show() {
    loadingModal.style.display="block";
    randomizeSpinner();
    setTimeout("hide()", 3000);  // 3 seconds
  }

  function hide() {
    loadingModal.style.display="none";

    console.log("results!");
    loadingModal.style.display = "none";
    secondModal.style.display = "block";
  }
function decideShow () {
//hide the info box when modals are displayed
if (modalIsOn == true) {
  infoContainer.style.display = "none";
}
//bring it back when they arent displayed
else {
  infoContainer.style.display = "flex";
}
}
