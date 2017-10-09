var answers = [
    "~$ Yuan Wang",
    "~$ <a href='mailto:wangyuan0915@gmail.com?Subject=Hello%20Yuan'>wangyuan0915@gmail.com</a>",
    "~$ <a href='http://web.cs.toronto.edu'>University of Toronto</a>",
    "~$ June 2017",
    "~$ Java, Python, Javascript",
    "~$ Sanofi Pasteur as Web & Data Developer Intern",
    "~$ Coding, Tennis, Soccer, Hiking",
    "~$ Junior Software & Web Developer Positions<span class='blinking-cursor'>_</span>"
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


// function cons() {
//     $('#resumeButton').removeClass('hidetemp');
//     $('#resumeButton').transition('fade in');
// }


// terminal(
//     function () {
//         cons();
//     });
terminal();



// terminal.then(function () {
//     console.log("hello");
// });