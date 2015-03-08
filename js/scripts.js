// 
//	OU Student Theme Framework js
//

// RESPONSIVE TABS



	
	
// BACK TO TOP LINK

jQuery(document).ready(function(){

jQuery(window).scroll(function(){

// if you want to measure 1000px from the top, use --&gt; if(jQuery(window).scrollTop() &gt; 1000)
// if you want to measure 1000px from the bottom, use  --&gt; if(jQuery(document).height() - jQuery(window).height() - jQuery(window).scrollTop() &lt; 1000)

// check whether the scroll has reached 1000px from the top     
	if(jQuery(window).scrollTop() > 1000){

// show back to top
      jQuery('#ou-site-footer .ou-to-top').stop().animate({opacity: 1});
    }

	else{

// hide back to top
      jQuery('#ou-site-footer .ou-to-top').stop().animate({opacity: 0});
    }
  });

});

// SMOOTH SCROLLING

$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 500);
	        return false;
	      }
	    }
	  });
});


// SHOW/HIDE TRANSCRIPTS


$(document).ready(function(){
	$(".ou-transcript").hide();
	$('<p class="ou-toggle"><a href="#" class="ou-toggle">Show transcript</a></p>').appendTo("div.ou-clip");
	$('a.ou-toggle').click(function(){
		$(this).text($(this).text()=='Show transcript'?'Hide transcript':'Show transcript');
		$(this).parent().parent().next().toggle();return false;
		$(this).html(text)
	})
});


// SHOW/HIDE MOBILE MENU

$(document).ready(function(){
	$(".ou-mobile-menu-toggle").click(function(){
	$("#ou-service-links").toggleClass("visible");
	$('body').toggleClass('ou-service-links-open');
	$('a.ou-mobile-menu-toggle').toggleClass('icon-down icon-up')
		return false;
	})
});


// ACCORDION

$(document).ready(function(){

function openFirstPanel(){
	$('.ou-accordion > dt:first-child').addClass('active');
	$('.ou-accordion > dt:first-child').next().addClass('active');
	
	$('.ou-accordion.hide-all > dt:first-child').removeClass('active');
	$('.ou-accordion.hide-all > dt:first-child').next().removeClass('active');
}

(function($) {
    
  var allPanels = $('.ou-accordion > dd');
  var allDts = $('.ou-accordion > dt');
  
  openFirstPanel();
    
  $('.ou-accordion > dt > a').click(function() {
      $this = $(this);
      $target =  $this.parent().next();
      $dt = $this.parent();
	  $container = $this.parent().parent();
	  	  
      if($target.hasClass('active')){
	  		  
        $target.removeClass('active'); 
        		
		$dt.removeClass('active');
      }
	  
	  else if($container.hasClass('allow-reveal-all')){
		  
        $target.addClass('active');
        $dt.addClass('active');
		
	  }
	  
	  else{
		allDts.removeClass('active');
        allPanels.removeClass('active');
        $target.addClass('active');
        $dt.addClass('active');
      }
      
    return false;
  });

})(jQuery);

});
