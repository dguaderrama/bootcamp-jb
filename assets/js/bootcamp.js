$(document).ready(function() {

  function sticky_relocate() {
    var w = $(window).scrollTop();
    var d = $('#sticky-anchor').offset().top;
    if (w > d) {
      $('#sticky').addClass('stick');
    } else {
      $('#sticky').removeClass('stick');
    }
  }

  $(function () {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
  });

  // create classes for headers to assign background images
  var url = $(location).attr('href').split("/");
  var pageClass = url[5];

  console.log(pageClass);

  $("#content-header").addClass(pageClass);

  // accordion navigation menu
  $("#sticky h4").click(function(){
    $("#sticky ul").slideUp();
    if(!$(this).next().is("visible"))
      {
        $(this).next().slideDown();
      }
  });


 /* $(function($) {
  function showMenu() {
    $(this).next().slideDown(500, "swing");
  }
  function hideMenu() {
    $("#sticky ul").slideUp(500, "swing");
  }

  $("#sticky h4").hoverIntent({
    over: showMenu,
    timeout: 500,
    selector: this,
    out: hideMenu
  });
 /* 
  $("#sticky h4 ul").hoverIntent({
    over: showMenu,
    timeout: 500,
    selector: this,
    out: hideMenu
  });
  })*/

 /* $("#sticky h4").hover(function() {

    $("#sticky ul").slideUp();
    if(!$(this).next().is("visible"))
      {
        $(this).next().slideDown();
      }
  });*/
});


