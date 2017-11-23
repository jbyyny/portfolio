var nav = document.getElementById('nav');
var hamburger = document.getElementById('hamburger');

function toggleNav() {
    if (nav.className === 'open') {
        nav.className = '';
    } else {
        nav.className = 'open';
    }
}

var bodyElements = document.getElementsByClassName('body');
for(var i=0; i<bodyElements.length; ++i) {
    bodyElements[i].addEventListener('click', function (e) {
        if (nav.className === 'open') {
            toggleNav();
        }
    });
};

hamburger.addEventListener('click', function () {
    toggleNav();
});

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("projects-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}