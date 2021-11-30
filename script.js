console.log("hello");
const glagoli = ["duschen", "schlafen", "mieten", "pendeln"];

var clicks = 0;
var text = glagoli[clicks];

function onClick() {
  clicks += 1;
  text = glagoli[clicks];
  document.getElementById("words").innerHTML = text;
  document.getElementById("clicks").innerHTML = clicks;
  if (clicks >= 3) {
  	clicks = 0;
  }
};



  
