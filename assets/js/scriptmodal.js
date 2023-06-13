//testing random background script
var images = ['burger.jpg', 'frnchfry.jpg'];
document.body.style.backgroundImage = "url('assets/css/images/" + images[Math.floor(Math.random() * images.length)] + "')";
//random image script for loader
var spinners = ['spin-01.gif', 'spin-02.gif', "spin-03.gif", "spin-04.gif"];
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

//close modals
exit.onclick = function() {
    firstModal.style.display = "none";
  }
exit2.onclick = function() {
    secondModal.style.display = "none";
}
//open first modal
startBtn.onclick = function() {
    console.log("starting!");
    firstModal.style.display = "block";
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
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == firstModal) {
      firstModal.style.display = "none";
      secondModal.style.display = "none";
    }
}