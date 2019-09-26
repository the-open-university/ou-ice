// Javascripts solely for the demo site

$(document).ready(function() {
    $(".code-example").each(function() {
        $(this)
            .prevAll("h2")
            .first()
            .append('<a class="code-example-trigger" href="#">Code</a>');
    });

    $(".code-example").each(function(example) {
        var $example = $(this);
        var $pre = $("<pre></pre>");
        $pre.text($example.html())
            .addClass("prettyprint prettyprint-toglable")
            .insertBefore($example);
    });

    $(".lang-html,.lang-js").each(function(key, value) {
        var $value = $(value);
        $value.text($value.html());
    });

    $("pre.prettyprint-toglable").hide();
    $(".code-example-trigger").click(function() {
        $(this)
            .parent()
            .nextAll("pre.prettyprint-toglable")
            .first()
            .slideToggle("fast");
        return false;
    });

    $(".js-nav-toggle").click(function() {
        $(this).toggleClass("is-active");
        $(".js-nav").toggleClass("is-active");
        return false;
    });

    // Add button to hide side menu

    $(
        '<button class="js-nav-toggle-desktop is-active"><span class="sr-only">Open menu</span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" class="open"><path fill="#0F4D87" fill-rule="nonzero" d="M1 2h13a1 1 0 1 0 0-2H1a1 1 0 1 0 0 2zm13 8H1a1 1 0 1 0 0 2h13a1 1 0 1 0 0-2zm0-5H1a1 1 0 1 0 0 2h13a1 1 0 1 0 0-2z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" class="close"><path fill="#0F4D87" fill-rule="nonzero" d="M.21 2.1l9.2 9.2a1 1 0 0 0 1.4-1.4L1.61.7a1 1 0 0 0-1.4 1.4zM9.41.7L.21 9.9a1 1 0 0 0 1.4 1.4l9.2-9.2A1 1 0 0 0 9.41.7z"></path></svg></button>'
    ).insertAfter(".ou-ice-header__nav");
    $(".js-nav-toggle-desktop").click(function() {
        $(this).toggleClass("is-active");
        $("body").toggleClass("ou-ice-nav-hidden");
        return false;
    });
});
