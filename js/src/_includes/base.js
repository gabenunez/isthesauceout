var RickHead = SVG.get('#head');
var efNoSign = SVG.get("#ef-no");

RickHead.click(function() { 
    this.animate(500).scale(0).after(function() {
        efNoSign.show();
    });
});
