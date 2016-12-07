// JavaScript

$(function() {


  // Toggles

  //$(".ou-sh-showhide").addClass("js-toggle");
  //$(".js-toggle").hide();
  $(".ou-sh-toggle").click(function() {
    $(this).toggleClass("ou-sh-toggle--closed");
    $(this).next().slideToggle("fast");
    return false;
  });
  
  // Toggle definition list
  
  $("dl.show-hide dt").addClass("plus");
  $("dl.show-hide dd").hide();
  $("dl.show-hide dt").click(function(){
	  $(this).toggleClass("plus minus");
	  $(this).next().slideToggle("fast");
  return false;
  })


});