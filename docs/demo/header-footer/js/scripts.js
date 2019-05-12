// JavaScript Document


// show/hide apply forms

$(function() {

	// SHOW/HIDE GLOBAL NAV
	$(".ou-global-nav-trigger").click(function(){
		$(".ou-global-nav").toggleClass("visible");
		$(".ou-search-thing__wrap.visible").removeClass("visible");
		$("body").toggleClass("ou-global-nav-open");
		return false;
	});

	// SHOW/HIDE SEARCH
	$(".ou-global-search-trigger").click(function(){
		$(".ou-search-thing__wrap").toggleClass("visible");
		$(".ou-global-nav.visible").removeClass("visible");
		$("body").toggleClass("ou-search-thing-open");
		$(".ou-global-search__input").focus();
		//$('a.ou-mobile-menu-toggle').toggleClass('icon-down icon-up')
		return false;
	});


});
