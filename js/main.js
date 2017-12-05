$(document).ready(function(){

  // non-mobile dropdown
  $("#nav .dropbtn").click(function(){
    $("#myDropdown").slideToggle();
  });

  // for mobile dropdown
  $("#nav-mobile .dropbtn").click(function(){
    // $("#nav-mobile li hidden").slideToggle();
  });

  // hamburger functionality
  $("#hamburger").click(function(){
    var nav = $('#nav-mobile');
      // if(nav.attr('class') === 'open') {
      //     nav.attr('class', '');
      // } else {
      //     nav.attr('class', 'open');
      // }
      $('#nav-mobile').slideToggle();
  });


  if( $(window).width() > 999 ){
    $("#nav-mobile").addClass('hide');
  } else {
    $("#nav-mobile").removeClass('hide');
  }
  
});