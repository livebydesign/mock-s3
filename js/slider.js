// JavaScript Document
$(document).ready(function() {
  $('#slide1_controls').on('click', 'li', function(){
    $("#slide1_images").css("transform","translateX("+$(this).index() * -900+"px)");
    $("#slide1_controls li").removeClass("active");
    $(this).addClass("active");
  });
});
