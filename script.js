console.log("hello");
let glagoli = ["duschen", "duschen", "schlafen", "mieten", "pendeln"];

var clicks = 0;
var text = glagoli[clicks];

function onClick() {
  clicks += 1;
  text = glagoli[clicks];
  document.getElementById("words").innerHTML = text;
  document.getElementById("clicks").innerHTML = clicks;
  if (clicks >= 4) {
  	clicks = 0;
  }
};



  
