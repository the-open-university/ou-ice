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
  



});