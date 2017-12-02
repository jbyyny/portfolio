$(document).ready(function(){

  // non-mobile dropdown
  $("#nav .dropbtn").click(function(){
    $("#myDropdown").slideToggle();
  });

  // for mobile dropdown
  $("#nav-mobile .dropbtn").click(function(){
    $("#nav-mobile li hidden").slideToggle();
  });

  // hamburger functionality
  $("#hamburger").click(function(){
    var nav = $('#nav-mobile');
      if(nav.attr('class') === 'open') {
          nav.attr('class', '');
      } else {
          nav.attr('class', 'open');
      }
  });

  // var nav = document.getElementById('nav');
  // var hamburger = document.getElementById('hamburger');


  // var bodyElements = document.getElementsByClassName('body');
  // for(var i=0; i<bodyElements.length; ++i) {
  //     bodyElements[i].addEventListener('click', function (e) {
  //         if (nav.className === 'open') {
  //             toggleNav();
  //         }
  //     });
  // };


  /* When the user clicks on the button, 
  toggle between hiding and showing the dropdown content */
  // function myFunction(event) {
  //   if(event){event.preventDefault();}
  //   document.getElementById("myDropdown").classList.toggle("show");
  // }

  // Close the dropdown if the user clicks outside of it
  // window.onclick = function(event) {
  //   if (!event.target.matches('.dropbtn')) {

  //     var dropdowns = document.getElementsByClassName("projects-content");
  //     var i;
  //     for (i = 0; i < dropdowns.length; i++) {
  //       var openDropdown = dropdowns[i];
  //       if (openDropdown.classList.contains('show')) {
  //         openDropdown.classList.remove('show');
  //       }
  //     }
  //   }
  // }

});