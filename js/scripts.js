// 
//  OU Student Theme Framework js
//

// BACK TO TOP LINK
;(function($) {

    $(document).ready(function(){

        $(window).scroll(function(){
            // if you want to measure 1000px from the top, use --&gt; if(jQuery(window).scrollTop() &gt; 1000)
            // if you want to measure 1000px from the bottom, use  --&gt; if(jQuery(document).height() - jQuery(window).height() - jQuery(window).scrollTop() &lt; 1000)

            // check whether the scroll has reached 1000px from the top
            if($(window).scrollTop() > 1000){
                // show back to top
                $('#ou-site-footer .ou-to-top').stop().animate({opacity: 1});
            } else {
                // hide back to top
                $('#ou-site-footer .ou-to-top').stop().animate({opacity: 0});
            }
        });

        // SMOOTH SCROLLING
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 500);

                    //return false;
                }
            }
        });

        // SHOW/HIDE TRANSCRIPTS
        $(".ou-video__transcript").hide();
        $('<p class="ou-video__toggle"><a href="#">Show transcript</a></p>').appendTo(".ou-video--transcript .ou-video__clip");
        $('p.ou-video__toggle a').click(function(){
            $(this).text($(this).text()=='Show transcript'?'Hide transcript':'Show transcript');
            $(this).parent().parent().next().toggle();return false;
            $(this).html(text)
        })


        // SHOW/HIDE MOBILE MENU
        $(".ou-mobile-menu-toggle").click(function(){
            $("#ou-service-links").toggleClass("visible");
            $('body').toggleClass('ou-service-links-open');
            $('a.ou-mobile-menu-toggle').toggleClass('icon-down icon-up')
            return false;
        });


        // ACCORDION
        function openFirstPanel(){
           $('.ou-accordion > dt:first-child').addClass('active');
           $('.ou-accordion > dt:first-child').next().addClass('active');

           $('.ou-accordion.hide-all > dt:first-child').removeClass('active');
           $('.ou-accordion.hide-all > dt:first-child').next().removeClass('active');
        }

        //var allPanels = $('.ou-accordion > dd');
        //var allDts = $('.ou-accordion > dt');

        openFirstPanel();

        $('.ou-accordion > dt > a').click(function() {
            $this = $(this);
            $target =  $this.parent().next();
            $dt = $this.parent();
            $container = $this.parent().parent();
            $allPans = $this.parent().siblings('dd');
            $allTitles = $this.parent().siblings('dt');

            if($target.hasClass('active')) {
                $target.removeClass('active');
                $dt.removeClass('active');
            } else if($container.hasClass('allow-reveal-all')) {
                $target.addClass('active');
                $dt.addClass('active');
            } else {
              $allTitles.removeClass('active');
              $allPans.removeClass('active');
              $target.addClass('active');
              $dt.addClass('active');
            }

            return false;
        });

    });

})(jQuery);
