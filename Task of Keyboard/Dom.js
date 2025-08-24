// var ele = document.getElementsByClassName("child");
// var ele = document.querySelector(".parent");
// var ele = document.getElementsByTagName("div");
// console.log(ele);

// document.body.onclick = function () {
//   console.log("click");
// };
// document.body.ondblclick = function () {
//   console.log("dblclick");
// };
// document.body.onmousemove = function () {
//   console.log("mousemove");
// };
// document.body.onmouseenter = function () {
//   console.log("mouseenter");
// };
// document.body.onmousedown = function () {
//   console.log("mousedown");
// };
// document.body.onmouseup = function () {
//   console.log("mouseup");
// };
// document.body.onmouseleave = function () {
//   console.log("mouseleave");
// };


// document.body.onkeydown = function () {
//   console.log("keydown");
// };
// document.body.onkeypress = function () {
//   console.log("keypress");
// };
// document.body.onkeyup = function () {
//   console.log("keyup");
// };


// var input = document.querySelector("input");
// if (input) {
//   input.onfocus = function () {
//     console.log("focus");
//   };
//   input.onblur = function () {
//     console.log("blur");
//   };
//   input.onchange = function () {
//     console.log("change");
//   };
// }




// // mouse events
// var parent = document.querySelector(".parent");
// var child = document.querySelector(".child");

// parent.addEventListener(
//   "click",
//   function () {
//     console.log("Parent");
//   },
//   false
// );

// child.addEventListener(
//   "click",
//   function () {
//     console.log("Child");
//   },
//   false
// );

// child.addEventListener(
//   "click",
//   function (e) {
//     console.log("Child");
//     e.stopPropagation();
//   },
//   false
// );



// var imgs = document.querySelectorAll("img");
// var layer = document.querySelector(".layer");
// var imgBox = document.querySelector(".img-box");
// console.log(imgs);

// for (let i = 0; i < imgs.length; i++) {
//   imgs[i].addEventListener("click", function () {
//     console.log(i);
//     layer.classList.remove("d-none");
//     var imgSrc = imgs[i].getAttribute("src");
//     imgBox.style.backgroundImage = `url(${imgSrc})`;
//   });
// }

// layer.addEventListener("click", function () {
//     layer.classList.add("d-none");
//   });





var imgs = document.querySelectorAll("img");
var layer = document.querySelector(".layer");
var imgBox = document.querySelector(".img-box");
var currentIndex = -1;

for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function () {
    currentIndex = i;
    layer.classList.remove("d-none");
    var imgSrc = imgs[i].getAttribute("src");
    imgBox.style.backgroundImage = `url(${imgSrc})`;
  });
}

layer.addEventListener("click", function () {
  layer.classList.add("d-none");
});

document.addEventListener("keydown", function (e) {
  if (layer.classList.contains("d-none")) return;
  if (e.key === "ArrowRight") {
    currentIndex++;
    if (currentIndex >= imgs.length) currentIndex = 0;
    var imgSrc = imgs[currentIndex].getAttribute("src");
    imgBox.style.backgroundImage = `url(${imgSrc})`;
  } else if (e.key === "ArrowLeft") {
    currentIndex--;
    if (currentIndex < 0) currentIndex = imgs.length - 1;
    var imgSrc = imgs[currentIndex].getAttribute("src");
    imgBox.style.backgroundImage = `url(${imgSrc})`;
  } else if (e.key === "Escape") {
    layer.classList.add("d-none");
  }
});

