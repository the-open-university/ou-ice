//
//  OU Student Theme Framework js
//

// BACK TO TOP LINK
(function($) {
    $(document).ready(function() {
        $(window).scroll(function() {
            // if you want to measure 1000px from the top, use --&gt; if(jQuery(window).scrollTop() &gt; 1000)
            // if you want to measure 1000px from the bottom, use  --&gt; if(jQuery(document).height() - jQuery(window).height() - jQuery(window).scrollTop() &lt; 1000)

            // check whether the scroll has reached 1000px from the top
            if ($(window).scrollTop() > 1000) {
                // show back to top
                $("#ou-site-footer .ou-to-top")
                    .stop()
                    .animate({ opacity: 1 });
            } else {
                // hide back to top
                $("#ou-site-footer .ou-to-top")
                    .stop()
                    .animate({ opacity: 0 });
            }
        });

        // SMOOTH SCROLLING
        /* smooth-scroll.js v1.3.1 */
        (function(e, t) {
            "use strict";
            var n = 0,
                r = 500,
                i = 15,
                s = document.getElementsByTagName("a"),
                o;
            for (var u = 0; u < s.length; u++) {
                o =
                    s[u].attributes.href === t
                        ? null
                        : s[u].attributes.href.nodeValue.toString();
                if (o !== null && o.length > 1 && o.indexOf("#") != -1) {
                    s[u].onclick = function() {
                        var n,
                            s = this.attributes.href.nodeValue.toString(),
                            o = s.substr(0, s.indexOf("#")),
                            u = s.substr(s.indexOf("#") + 1);
                        if ((n = document.getElementById(u))) {
                            var l = (r - (r % i)) / i,
                                c = f(),
                                h = (a(n) - c) / l;
                            if (
                                e.history &&
                                typeof e.history.pushState == "function"
                            )
                                e.history.pushState({}, t, o + "#" + u);
                            for (var p = 1; p <= l; p++) {
                                (function() {
                                    var t = h * p;
                                    setTimeout(function() {
                                        e.scrollTo(0, t + c);
                                    }, i * p);
                                })();
                            }
                            return false;
                        }
                    };
                }
            }
            var a = function(e) {
                var r = n * -1;
                while (e.offsetParent != t && e.offsetParent != null) {
                    r += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
                    e = e.offsetParent;
                }
                return r;
            };
            var f = function() {
                return e.pageYOffset !== t
                    ? e.pageYOffset
                    : document.documentElement.scrollTop !== t
                    ? document.documentElement.scrollTop
                    : document.body.scrollTop;
            };
        })(window);

        // SHOW/HIDE TRANSCRIPTS
        $(".ou-video__transcript").hide();
        $(
            '<p class="ou-video__toggle"><a href="#">Show transcript</a></p>'
        ).appendTo(".ou-video--transcript .ou-video__clip");
        $("p.ou-video__toggle a").click(function() {
            $(this).text(
                $(this).text() == "Show transcript"
                    ? "Hide transcript"
                    : "Show transcript"
            );
            $(this)
                .parent()
                .parent()
                .next()
                .toggle();
            return false;
            $(this).html(text);
        });

        // TOGGLE
        $(".ou-js-hidden").hide();
        $(".ou-js-toggle").addClass("ou-toggle--closed");
        $(".ou-js-toggle").click(function() {
            $(this)
                .next(".ou-js-hidden")
                .slideToggle();
            $(this).toggleClass("ou-toggle--open ou-toggle--closed");
            return false;
        });

        // SHOW/HIDE MOBILE MENU
        $(".ou-mobile-menu-toggle").click(function() {
            $("#ou-service-links").toggleClass("visible");
            $("body").toggleClass("ou-service-links-open");
            $("a.ou-mobile-menu-toggle").toggleClass("icon-down icon-up");
            return false;
        });

        // ACCORDION
        function openFirstPanel() {
            $(".ou-accordion > dt:first-child").addClass("active");
            $(".ou-accordion > dt:first-child")
                .next()
                .addClass("active");

            $(".ou-accordion.hide-all > dt:first-child").removeClass("active");
            $(".ou-accordion.hide-all > dt:first-child")
                .next()
                .removeClass("active");
        }

        //var allPanels = $('.ou-accordion > dd');
        //var allDts = $('.ou-accordion > dt');

        openFirstPanel();

        $(".ou-accordion > dt > a").click(function() {
            $this = $(this);
            $target = $this.parent().next();
            $dt = $this.parent();
            $container = $this.parent().parent();
            $allPans = $this.parent().siblings("dd");
            $allTitles = $this.parent().siblings("dt");

            if ($target.hasClass("active")) {
                $target.removeClass("active");
                $dt.removeClass("active");
            } else if ($container.hasClass("allow-reveal-all")) {
                $target.addClass("active");
                $dt.addClass("active");
            } else {
                $allTitles.removeClass("active");
                $allPans.removeClass("active");
                $target.addClass("active");
                $dt.addClass("active");
            }

            return false;
        });
    });
})(jQuery);
