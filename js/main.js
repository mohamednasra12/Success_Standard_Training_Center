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
let hid1 = document.getElementById("hid-1");
let hidnas1 = document.getElementById("hid-nas-1");
let hidjj = document.getElementById("hid-jj");
let hidnakk = document.getElementById("hid-na-kk");
let hidnasoo = document.getElementById("hid-nas-oo");
let hidna1 = document.getElementById("hid-na-1");
let gohid = document.getElementById("go-hid");
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
function bigImgv() {
  hid1.style.display = "block";
}
function normalImgv() {
  hid1.style.display = "none";
}
function bigImgf() {
  hidna1.style.display = "block";
}
function normalImgf() {
  hidna1.style.display = "none";
}
function bigImgg() {
  hidnas1.style.display = "block";
}
function normalImgg() {
  hidnas1.style.display = "none";
}
function bigImgz() {
  hidjj.style.display = "block";
}
function normalImgz() {
  hidjj.style.display = "none";
}
function bigImgnac() {
  hidnakk.style.display = "block";
}
function normalImgnac() {
  hidnakk.style.display = "none";
}
function bigImgnasv() {
  hidnasoo.style.display = "block";
}
function normalImgnasv() {
  hidnasoo.style.display = "none";
}
function big() {
  gohid.style.display = "block";
}
function norma() {
  gohid.style.display = "none";
}
// hover
// part word
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
// part word

$(document).on("click", "#open", function () {
  $(".accordion-collapse").toggleClass("show");
  $("#open").toggleClass("active");
  if ($("#open").hasClass("active")) {
    $("#open").text("إغلاق كل المعايير");
  } else {
    $("#open").text("فتح كل المعايير");
  }
});

function gridView() {
  var container = document.getElementById("container");
  container.classList.remove("listmode");
  container.classList.add("grid");
}

function listView() {
  var container = document.getElementById("container");
  container.classList.remove("grid");
  container.classList.add("listmode");
}
$(document).ready(function () {
  var topNav = $(".top_nav");
  var navBar = $(".nav-bar");

  $(window).scroll(function () {
    // Check if the page has been scrolled
    if ($(this).scrollTop() > 0) {
      // Hide top_nav and make nav-bar fixed
      topNav.hide();
      navBar.addClass("fixed-navbar");
    } else {
      // Show top_nav and remove fixed style from nav-bar
      topNav.show();
      navBar.removeClass("fixed-navbar");
    }
  });
});

function myFunction() {
  var x = document.getElementById("myInputs");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function myFunctions() {
  var x = document.getElementById("myInputa");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function myFunctiona() {
  var x = document.getElementById("myInputd");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function triggerFileInput() {
  // Trigger click on the hidden file input
  document.getElementById('fileInput').click();
}

function displaySelectedPhoto(input) {
  // Assuming you want to display the selected photo immediately
  // You can replace this with your actual logic for handling the selected file
  if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
          document.getElementById('uploadedPhoto').src = e.target.result;
      };

      reader.readAsDataURL(input.files[0]);
  }
}

function deletePhoto() {
  // Assuming you have some code to delete the uploaded photo
  // You can replace this with your actual logic
  document.getElementById('uploadedPhoto').src = ''; // Clears the image source
  // Optionally, you can reset the file input as well
  document.getElementById('fileInput').value = '';
  
}