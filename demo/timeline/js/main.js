jQuery(document).ready(function($){

	// TIMELINE

	var timelineBlocks = $('.cd-timeline-block'),
		offset = 0.95;

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame) 
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
		});
	}


		
		// TOGGLE CHECKED
        $(".checkme").click(function(){
            $(this).toggleClass("checkme--checked");
            return false;
        });
		
		
		// TOGGLE CHECKED TIMELINE
        $(".checkme-timeline").click(function(){
            $(this).toggleClass("checkme--checked");
			  if ($(this).text() == "Done") 
			  { 
				 $(this).text("Tick when done"); 
			  } 
			  else 
			  { 
				 $(this).text("Done"); 
			  }; 
            return false;
        });
		

		
		// SMOOTH SCROLLING
		/* smooth-scroll.js v1.3.1 */
		(function(e,t){"use strict";var n=0,r=500,i=15,s=document.getElementsByTagName("a"),o;for(var u=0;u<s.length;u++){o=s[u].attributes.href===t?null:s[u].attributes.href.nodeValue.toString();if(o!==null&&o.length>1&&o.indexOf("#")!=-1){s[u].onclick=function(){var n,s=this.attributes.href.nodeValue.toString(),o=s.substr(0,s.indexOf("#")),u=s.substr(s.indexOf("#")+1);if(n=document.getElementById(u)){var l=(r-r%i)/i,c=f(),h=(a(n)-c)/l;if(e.history&&typeof e.history.pushState=="function")e.history.pushState({},t,o+"#"+u);for(var p=1;p<=l;p++){(function(){var t=h*p;setTimeout(function(){e.scrollTo(0,t+c)},i*p)})()}return false}}}}var a=function(e){var r=n*-1;while(e.offsetParent!=t&&e.offsetParent!=null){r+=e.offsetTop+(e.clientTop!=null?e.clientTop:0);e=e.offsetParent}return r};var f=function(){return e.pageYOffset!==t?e.pageYOffset:document.documentElement.scrollTop!==t?document.documentElement.scrollTop:document.body.scrollTop}})(window)


});