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