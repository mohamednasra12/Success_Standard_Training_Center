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
  document.getElementById("fileInput").click();
}

function displaySelectedPhoto(input) {
  // Assuming you want to display the selected photo immediately
  // You can replace this with your actual logic for handling the selected file
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      document.getElementById("uploadedPhoto").src = e.target.result;
      document.getElementById("uploadedPhotof").src = e.target.result;
      document.getElementById("change").src = e.target.result;
    };

    reader.readAsDataURL(input.files[0]);
  }
}

function deletePhoto() {
  // Assuming you have some code to delete the uploaded photo
  // You can replace this with your actual logic
  document.getElementById("uploadedPhoto").src = ""; // Clears the image source
  document.getElementById("uploadedPhotof").src = ""; // Clears the image source
  document.getElementById("change").src = ""; // Clears the image source
  // Optionally, you can reset the file input as well
  document.getElementById("fileInput").value = "";
}

function triggerFileInput() {
  // Trigger click on the hidden file input
  document.getElementById("fileInput").click();
}

function toggleEmojiList() {
  var emojiList = document.getElementById("emojiList");

  // Toggle the visibility of the emoji list
  if (emojiList.style.display === "none" || emojiList.style.display === "") {
    emojiList.style.display = "block";
  } else {
    emojiList.style.display = "none";
  }
}

// Close the emoji list if the user clicks outside of it
document.addEventListener("click", function (event) {
  var emojiList = document.getElementById("emojiList");
  var emojiIcon = document.querySelector(".fa-face-grin-beam");

  if (
    event.target !== emojiIcon &&
    !emojiIcon.contains(event.target) &&
    !emojiList.contains(event.target)
  ) {
    emojiList.style.display = "none";
  }
});

// Function to handle sending the message (you can customize this according to your needs)
function sendMessage() {
  var messageInput = document.getElementById("messageInput").value;

  // Assuming you want to handle sending the message here
  // You can replace this with your actual logic
  alert("Message sent: " + messageInput);

  // Optionally, you can clear the message input and hide the send icon
  document.getElementById("messageInput").value = "";
  document.getElementById("sendIcon").style.display = "none";
}

// Toggle between the upload and send icons when the message input is focused
document.getElementById("messageInput").addEventListener("focus", function () {
  document.getElementById("uploadIcon").style.display = "none";
  document.getElementById("sendIcon").style.display = "block";
});

// Toggle back to the upload icon when the message input loses focus
document.getElementById("messageInput").addEventListener("blur", function () {
  document.getElementById("uploadIcon").style.display = "block";
  document.getElementById("sendIcon").style.display = "none";
});

function saveAndUpdateInner() {
  // Get the value from the input with id "names"
  var inputValue = document.getElementById("names").value;

  // Update the content of the paragraph with id "inner"
  document.getElementById("inner").innerText = inputValue;
  document.getElementById("inner1").innerText = inputValue;
  document.getElementById("inner2").innerText = inputValue;

  // Clear the input field
  document.getElementById("names").value = "";
}
function saveAndUpdateInner1() {
  // Get the value from the input with id "names"
  var inputValue = document.getElementById("phons").value;

  // Update the content of the paragraph with id "inner"
  document.getElementById("pra").innerText = inputValue;

  // Clear the input field
  document.getElementById("phons").value = "";
}
function saveAndUpdateInner2() {
  // Get the value from the input with id "names"
  var inputValue = document.getElementById("email").value;

  // Update the content of the paragraph with id "inner"
  document.getElementById("prag").innerText = inputValue;
  document.getElementById("prag1").innerText = inputValue;

  // Clear the input field
  document.getElementById("email").value = "";
}



