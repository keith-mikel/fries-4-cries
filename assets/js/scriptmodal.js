var firstModal = document.getElementById("first-modal");
var secondModal = document.getElementById("second-modal");
var startBtn = document.getElementById("start-btn");
var exit = document.getElementById("exit");
var submitBtn = document.getElementById("submitButton");

//close modals
exit.onclick = function() {
    firstModal.style.display = "none";
  }
//open first modal
startBtn.onclick = function() {
    console.log("starting!");
    firstModal.style.display = "block";
  }
  //then open second modal
submitBtn.onclick = function() {
    console.log("results!");
    firstModal.style.display = "none";
    secondModal.style.display = "block";
  }
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == firstModal) {
      firstModal.style.display = "none";
      secondModal.style.display = "none";
    }
}