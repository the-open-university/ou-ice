// JavaScript Document

$(document).ready(function() {
						   
	// Show/hide JS elements
	$('.js-safe').show();
	$('.noscript').hide();
		
    // Summaries
	//$('.summary').hide();
    //$('a.toggle-summary').click(function() {
	//	$('.summary').slideToggle('fast');
    //    return false;	
    //});
	
	// Sentence Pairs: Hide existing results if choice is modified
	$('.sentencepairs input[type=radio]').change(function() {
	  $('.sentence-feedback').hide();
	});
		
	// Timetable object
	var timetable = {
		countHighlighted: "",
		isMouseDown: false,
		isHighlighted: false,
		percentFree: 0,
		tmp: "",
		arrayHighlighted: [],
		
		init: function() {
			timetable.countHighlighted = $('#time td.highlighted').length;
			timetable.percentFree = (timetable.countHighlighted) * 0.5952380952380952;
			
			$('.time-hours').html(timetable.countHighlighted);
			$(".time-busy").animate({ width: timetable.percentFree + "%" }, 400);
			
			timetable.arrayHighlighted = new Array();
			
			$.each($('#time td.highlighted'), function (index, value) {
				timetable.arrayHighlighted.push(value.id);
			});	
			
			$('#time-data').val(timetable.arrayHighlighted);
			
			// hide guidance
			$('.timetable_feedback').hide();
		}
	}
	
	// Timetable listeners
	$("#time td")
		.mousedown(function () {
		  timetable.isMouseDown = true;
		  $(this).toggleClass("highlighted");
		  timetable.isHighlighted = $(this).hasClass("highlighted");
		  return false; // prevent text selection
		})
		.mouseover(function () {
		  if (timetable.isMouseDown) {
			$(this).toggleClass("highlighted", timetable.isHighlighted);
		  }
		  
		  timetable.tmp = $(this).html();
		  $(this).html($(this).attr("data-time"));
		})
		.mouseout(function() {
		  $(this).html(timetable.tmp);		   
		})
		.bind("selectstart", function () {
		  return false;
	});
		
	$(document)
		.mouseup(function () {
		  if (timetable.isMouseDown) {
			timetable.init();
		  }
		  timetable.isMouseDown = false;
	});
		
	$('#timetable_alt select').change(function() {
		$('.timetable_feedback').hide();							   
	});
		
	$('#check').click(function() {		
		var count;
		
		if ($('#timetable_alt').length) {
			count = 0;
			$.each($('#timetable_alt select'), function(k,v) {
				if (v.value > 0) { count = count + +v.value; }	
			});
		}
		else {
			count = timetable.countHighlighted;	
		}
				
		if (count < 6) {
		   $('#less-6-hours').show();			
		}		
		if ((count >= 6) && (count <= 9)) {
		   $('#between-6-9-hours').show();			
		}		
		if ((count >= 10) && (count <= 15)) {
		   $('#between-10-15-hours').show();
		}
		if ((count >= 16)) {
		   $('#more-16-hours').show();	
		}
		
		$("html, body").animate({ scrollTop: $('#check').offset().top }, 1000);
		
		return false;
     
    });
		
	// Timetable initialise
	timetable.init();
		
	
	// Links object
	var links = {
		
		make_submit: function() {
			// Turn the navigation links into save and redirect buttons
			
			$.each($('.ou-full-nav a'), function(index,value) {		
				$(this).click(function() { 
					$('#save-redirect').val(encodeURIComponent(value.href));
					$('#save-action-nav').val('1');
					$('#form-openings').submit();
					return false;
				});
				
			});
		}
		
	}
	
	// Links initialise
	links.make_submit();
	
});