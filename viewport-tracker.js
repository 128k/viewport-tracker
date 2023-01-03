window.addEventListener("resize", function() {
  // Get the viewport width and height
  var viewportWidth = window.innerWidth;
  var viewportHeight = window.innerHeight;

  // Update the div element with the viewport width and height
  document.getElementById("viewport-info").innerHTML = "Viewport size: " + viewportWidth + " x " + viewportHeight;
});

var seconds = 0;
setInterval(function() {
  seconds++;
  document.getElementById("viewport-timer").innerHTML = "Viewport size has been unchanged for " + seconds + " seconds.";
}, 1000);

var mobileQuery = matchMedia("(max-width: 600px)");
if (mobileQuery.matches) {
  // The viewport is 600 pixels wide or less (mobile view)
  document.body.style.backgroundColor = "red";
} else {
  // The viewport is wider than 600 pixels (desktop view)
  document.body.style.backgroundColor = "blue";
}
