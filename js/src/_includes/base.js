var RickHead = SVG.get('#head');
var efNoSign = SVG.get("#ef-no");

// Checks if the browser is Safari
var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

function isTheSauceOut() {
    document.getElementsByClassName('find-out')[0].style.visibility = 'hidden';
    if (is_safari) {

        // Safari: Just hide and show for because it doesn't
        // seem to support svgjs too well.
        RickHead.hide();
        efNoSign.show();

    } else {

        // All Other Browsers: scale, then show the sign.
        RickHead.animate(500).scale(0, 0).after(function() {
            efNoSign.show();
        });

    }
}

RickHead.click(isTheSauceOut);

document.body.onkeydown = function (e) {
    if (e.keyCode == 32) {
        isTheSauceOut();
    }
}
