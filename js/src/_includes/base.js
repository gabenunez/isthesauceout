var RickHead = SVG.get('#head');
var efNoSign = SVG.get("#ef-no");

// Checks if the browser is Safari
var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

RickHead.click(function() {
    if (is_safari) {

        // Safari: Just hide and show for because it doesn't
        // seem to support svgjs too well.
        this.hide();
        efNoSign.show();

    } else {

        // All Other Browsers: scale, then show the sign.
        this.animate(500).scale(0, 0).after(function() {
            efNoSign.show();
            
        });
    }
});
