
//
// // Init
// var container = document.querySelector(".container")
// var inner = document.querySelectorAll(".cloud");
//
// // Mouse
// var mouse = {
//   _x: 0,
//   _y: 0,
//   x: 0,
//   y: 0,
//   updatePosition: function(event) {
//     var e = event || window.event;
//     this.x = e.clientX - this._x;
//     this.y = (e.clientY - this._y) * -1;
//   },
//   setOrigin: function(e) {
//     this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
//     this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
//   },
//   show: function() {
//     return "(" + this.x + ", " + this.y + ")";
//   }
// };
//
// // Track the mouse position relative to the center of the container.
// mouse.setOrigin(container);
//
// //-----------------------------------------
//
// var counter = 0;
// var updateRate = 10;
// var isTimeToUpdate = function() {
//   return counter++ % updateRate === 0;
// };
//
// //-----------------------------------------
//
// var onMouseEnterHandler = function(event) {
//   update(event);
// };
//
// var onMouseLeaveHandler = function() {
//   inner.forEach((c, i) => {
//     c.style = ''
//   })
// };
//
// var onMouseMoveHandler = function(event) {
//   if (isTimeToUpdate()) {
//     update(event);
//   }
// };
//
// //-----------------------------------------
//
// var update = function(event) {
//   mouse.updatePosition(event);
//   updateTransformStyle(
//     (mouse.y / inner[0].offsetHeight / 2).toFixed(2),
//     (mouse.x / inner[0].offsetWidth / 2).toFixed(2)
//   );
// };
//
// var updateTransformStyle = function(x, y) {
//   inner.forEach((c, i) => {
//     console.log (x, y)
//     c.style.margin = `${x * (i * 7)}px ${y * (i * 3)}px ${x * (i * 7)}px ${y * (i * 3)}px;`
//   })
// };

//-----------------------------------------

  let i = 0; let sizes = [3, 4, 5]; function getRandomInt(max) { return Math.floor(Math.random() * Math.floor(max)); } while (i < 50) { let size = sizes[getRandomInt(3)]; let top = getRandomInt(100); let left = getRandomInt(70); document.querySelector('.stars').innerHTML += ` <div style="height: ${size}px; width: ${size}px; top: ${top - 10}%; left: ${left + 15}%;"></div> `; i++; } 
