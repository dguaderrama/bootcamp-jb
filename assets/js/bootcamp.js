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


var url = $(location).attr('href').split("/");
var pageClass = url[5];
console.log(pageClass);

$("#content-header").addClass(pageClass);

});
