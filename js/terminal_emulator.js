var answers = [
    "Yuan Wang",
    "> University of Toronto",
    "> June 2017",
    "> Java, Python, Javascript",
    "> Sanofi Pasteur",
    "> Coding, Tennis, Soccer, Hiking",
    "> Junior Software & Web Developer Positions<span class='blinking-cursor'>_</span>"
];


var $lines = $('.prompt p');
$lines.hide();
var lineContents = new Array();

var terminal = function() {

    var skip = 0;
    typeLine = function(idx) {
        idx == null && (idx = 0);
        var element = $lines.eq(idx);
        var content = lineContents[idx];
        if(typeof content == "undefined") {
            $('.skip').hide();
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
        element.append('~$ ').addClass('activeTerminal');
        typeChar();
    }

    $lines.each(function(i) {
        lineContents[i] = $(this).text();
        $(this).text('').show();
    });

    typeLine()
}

terminal();

// $.when(terminal()).then($('.prompt').append('<span class="blinking-cursor">_</span>'));