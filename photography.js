/*window.onscroll = function() {myFunction()};

var menufix = document.getElementById("menufix");
var sticky = menufix.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    menufix.classList.add("sticky")
  } else {
    menufix.classList.remove("sticky");
  }
}*/

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}  
 

