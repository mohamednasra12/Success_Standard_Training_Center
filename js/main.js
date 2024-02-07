// Add active class to the current button (highlight it)
document.querySelectorAll(".nav-link").forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
});

// hover
let hid = document.getElementById("hid");
let hidna = document.getElementById("hid-na");
let hidnas = document.getElementById("hid-nas");
let hidens = document.getElementById("hidens");
let hideng = document.getElementById("hideng");
function bigImg() {
  hid.style.display = "block";
}
function normalImg() {
  hid.style.display = "none";
}
function bigImgna() {
  hidna.style.display = "block";
}
function normalImgna() {
  hidna.style.display = "none";
}
function bigImgnas() {
  hidnas.style.display = "block";
}
function normalImgnas() {
  hidnas.style.display = "none";
}
let hiden = document.getElementById("hiden");
function bigImg1() {
  hiden.style.display = "block";
}
function normalImg1() {
  hiden.style.display = "none";
}
function bigI() {
  hidens.style.display = "block";
}
function normalI() {
  hidens.style.display = "none";
}
function bi() {
  hideng.style.display = "block";
}
function nor() {
  hideng.style.display = "none";
}

// document.addEventListener("DOMContentLoaded", function () {
//   // Initialize AOS
//   AOS.init();
// });

$(document).ready(function () {
  var pragraph = $("#pragraph");
  var showtext = $("#showtext");
  var more = $("#more");

  // Copy the content to showtext
  showtext.html(pragraph.html());

  // Hide the full content initially
  showtext.hide();

  more.click(function (event) {
    event.preventDefault();

    // Toggle between showing and hiding the full content
    showtext.toggle();
  });
});

// let page = document.querySelector(".nas");
// let imge = ["../photo/c1.png", "../photo/c2.png.png", "../photo/c3.png"];

// setInterval(() => {
//   let rundom = Math.floor(Math.random() * imge.length);
//   page.style.backgroundImage = 'url("../img/' + imge[rundom] + '")';
// }, 1000);
