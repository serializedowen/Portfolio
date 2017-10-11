var answers = [
    "~$ Yuan Wang",
    "~$ <a href='mailto:wangyuan0915@gmail.com?Subject=Hello%20Yuan'>wangyuan0915@gmail.com</a>",
    "~$ <a href='http://web.cs.toronto.edu'>University of Toronto</a>",
    "~$ June 2017",
    "~$ Java, Python, Javascript",
    "~$ Sanofi Pasteur as Web & Data Developer Intern",
    "~$ Coding, Tennis, Soccer, Hiking",
    "~$ Junior Software & Web Developer Positions<span class='blinking-cursor'>|</span>"
];


var $lines = $('.prompt p');
$lines.hide();
var lineContents = new Array();

function terminal() {
    var skip = 0;
    typeLine = function(idx) {
        idx == null && (idx = 0);
        var element = $lines.eq(idx);
        var content = lineContents[idx];
        if(typeof content == "undefined") {
            $('.skip').hide();
            //console.log("haha!");
            // callback();
            return;
        }
        var charIdx = 0;

        var typeChar = function() {
            var rand = Math.round(Math.random() * 150) + 25;

            setTimeout(function() {
                var char = content[charIdx++];
                element.append(char);
                if(typeof char !== "undefined")
                    typeChar();
                else {
                    element.append('<br/><span class="output">' + answers[idx] + '</span>');
                    element.removeClass('activeTerminal');
                    typeLine(++idx);
                }
            }, skip ? 0 : rand);
        }
        // content = content + '"';
        element.append('> ').addClass('activeTerminal');
        typeChar();
    }

    $lines.each(function(i) {
        lineContents[i] = $(this).text();
        $(this).text('').show();
    });

    typeLine();
}

function checkVisible( elm, eval ) {
    eval = eval || "object visible";
    var viewportHeight = $(window).height(), // Viewport Height
        scrolltop = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();

    if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
    if (eval == "above") return ((y < (viewportHeight + scrolltop)));
}


$(window).on('scroll.myscroll1',function() {
    if (checkVisible($('#window'))) {
        terminal();
        $(window).off('scroll.myscroll1');
    } else {
        // do nothing
    }
});


$(window).on('scroll.myscroll2',function() {
    if (checkVisible($('#last_progress'))) {
        $('.progress').progress(
            {
                showActivity: false
            });
        $(window).off('scroll.myscroll2');
    } else {
        // do nothing
    }
});







