window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
// var start = null;
// var ele = document.getElementById("test");
// var progress = 0;

// function step(timestamp) {
//   progress += 1;
//   ele.style.width = progress + "%";
//   ele.innerHTML = progress + "%";

//   if (progress < 100) {
//     start = requestAnimationFrame(step);
//   }
// }

// requestAnimationFrame(step);
// document.getElementById("run").addEventListener("click", function () {

//   ele.style.width = "1px";
//   progress = 0;
//   cancelAnimationFrame(start);
//   requestAnimationFrame(step);
// }, false);



var elem = document.getElementById("anim");

var startTime = undefined;

function render(time) {
  if (time === undefined)
    time = Date.now();
  if (startTime === undefined)
    startTime = time;

  elem.style.left = ((time - startTime) / 10 % 500) + "px";
}

elem.onclick = function () {
  console.log('onclick');
  (function animloop() {
    render();
    requestAnimationFrame(animloop);
  })();
};



