


// ======= ======= ======= UTILITY SCRIPTS ======= ======= =======
// ======= ======= ======= UTILITY SCRIPTS ======= ======= =======
// ======= ======= ======= UTILITY SCRIPTS ======= ======= =======


// listener to check for window load complete
window.addEventListener("load", eventWindowLoaded, false);

// check window load status
function eventWindowLoaded () {
  console.log("eventWindowLoaded"); 
  init();
}

// utility functions
function ExtractNumber(value) {
  console.log("ExtractNumber"); 
    var n = parseInt(value);
    return n == null || isNaN(n) ? 0 : n;
}

// this is simply a shortcut for the eyes and fingers
function getElementID(id) {
  console.log("getElementID");
    return document.getElementById(id);
}

// set up console debugger
var Debugger = function () { };
Debugger.log = function (message) {
   try {
      console.log(message);
   } catch (exception) {
      return;
   }
}


