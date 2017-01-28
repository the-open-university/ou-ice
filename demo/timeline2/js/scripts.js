jQuery(document).ready(function($){
	
	// CUSTOMISE TIMELINE
	
	$(".hidden").hide();
	
	$(".tl-toggle-questions").click(function(){
		$(this).toggleClass("ou-button--primary"); 
		$(".hidden").slideToggle("fast");
		
		  if ($(this).text() == "Cancel") 
		  { 
			 $(this).text("Continue"); 
		  } 
		  else 
		  { 
			 $(this).text("Cancel"); 
		  }; 
		return false;
	});

	$(".tl-toggle-questions2").click(function(){
		$(".hidden").slideToggle("fast");
		return false;
	});


	// TIMELINE

	var timelineBlocks = $('.tl-block'),
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
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.tl-block__icon, .tl-block__content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.tl-block__icon').hasClass('is-hidden') ) && $(this).find('.tl-block__icon, .tl-block__content').removeClass('is-hidden').addClass('bounce-in');
		});
	}
	
	// added for customise.html so top of timeline is visible
	$(".faded-out .tl-block__icon").removeClass("is-hidden");
	$(".faded-out .tl-block__content").removeClass("is-hidden");

		
		
		// TOGGLE CHECKED TIMELINE
        $(".tl-block__button").click(function(){
			$(this).parent().parent().toggleClass("tl-block__content--done");
			$(this).parent().parent().siblings(".tl-block__icon").toggleClass("tl-block__icon--done");
            $(this).toggleClass("tl-block__button--done");
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


		// PANEL FILTERS
        $(".tl-panel__button").click(function(){
            $(this).toggleClass("tl-panel__button--active");
            return false;
        });

		
		

		
		// SMOOTH SCROLLING
		/* smooth-scroll.js v1.3.1 */
		(function(e,t){"use strict";var n=0,r=500,i=15,s=document.getElementsByTagName("a"),o;for(var u=0;u<s.length;u++){o=s[u].attributes.href===t?null:s[u].attributes.href.nodeValue.toString();if(o!==null&&o.length>1&&o.indexOf("#")!=-1){s[u].onclick=function(){var n,s=this.attributes.href.nodeValue.toString(),o=s.substr(0,s.indexOf("#")),u=s.substr(s.indexOf("#")+1);if(n=document.getElementById(u)){var l=(r-r%i)/i,c=f(),h=(a(n)-c)/l;if(e.history&&typeof e.history.pushState=="function")e.history.pushState({},t,o+"#"+u);for(var p=1;p<=l;p++){(function(){var t=h*p;setTimeout(function(){e.scrollTo(0,t+c)},i*p)})()}return false}}}}var a=function(e){var r=n*-1;while(e.offsetParent!=t&&e.offsetParent!=null){r+=e.offsetTop+(e.clientTop!=null?e.clientTop:0);e=e.offsetParent}return r};var f=function(){return e.pageYOffset!==t?e.pageYOffset:document.documentElement.scrollTop!==t?document.documentElement.scrollTop:document.body.scrollTop}})(window)


});