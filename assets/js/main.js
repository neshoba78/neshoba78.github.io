function toggleDIV() {
  /* console.log(arguments);
  console.log("this is the DOM element " + arguments[0]); */
  var x = document.getElementById(arguments[0]);
  var style = window.getComputedStyle(x);
  /* console.log("The style is " + style.display); */
  if (style.display === "none") {
    x.style.display = "flex";
    /* console.log("Show " + x);
    console.log("Scroll Y is " + window.scrollY);
    console.log("Bounding Rect Top is " + x.getBoundingClientRect().top); */
    var yTop = window.scrollY + x.getBoundingClientRect().top;
    var xLeft = window.scrollX + x.getBoundingClientRect().left;

    var xMedia = window.matchMedia("(min-width:900px)");
    /* console.log(arguments[0] + " is at " + yPos); */
    if ((arguments[0] !== "global-welcome") && xMedia.matches) {
        if (yTop > 700 || yTop < 0) {
          x.style.top = 10;
        }
        if (xLeft > 900 || xLeft < 100) {
          x.style.left = 125;
        }
    }
  } else {
    x.style.display = "none";
    /* console.log("Hide " + x); */
  }
}

function navHTML() {
  console.log(arguments[0]);
  var x = arguments[0];
  var myDiv = document.getElementById('load-articles');
  $( myDiv ).load(x);
  myDiv.scrollTop = 0;
}

function directLink() {
  var x = arguments[0];

  var w = document.getElementById('global-footer');
  var y = document.getElementById('global-welcome');
  var z = document.getElementById('content-articles');
  w.style.display = "none";
  y.style.display = "none";
  z.style.display = "flex";

  navHTML(x);
}
