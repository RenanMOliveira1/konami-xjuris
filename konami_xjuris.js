(function ($) {
    if (!$) {
        throw new "jQuery required !";
    }

    if (typeof cheet === 'undefined') {
        // gets: https://github.com/namuol/cheet.js
        $.getScript('https://cdn.rawgit.com/namuol/cheet.js/master/cheet.min.js', cheetLoaded);
    } else {
        cheetLoaded();
    }

    function randomize() {
        var functions = arguments;
        var i = Math.round(Math.random() * (functions.length-1));
        return { run: function () { functions[i](); } }
    }

    function cheetLoaded() {
        cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {           
            randomize(waltz,biru).run();
        });
    }

    /**
     * functions to run as easter egg's
     */
    function waltz() {
        var div = $('<div>');
        div.css({'float': 'right', 'top': '0px', 'z-index': 9999999, 'position': 'absolute' });
        div.html('<img src="http://constructionphilippines.com/wp-content/uploads/2014/06/Monark-Caterpillar-construction-equipment-slide-03.jpg" />');
        div.appendTo($('body'));
	
	setTimeout(function () {
            div.remove();
        }, 3500);
    }

    function biru() {
        // biru
        var div = $('<div>');
        div.css({'float': 'left', 'top': '0px', 'z-index': 9999999, 'position': 'absolute' });
        div.html('<img src="http://radixeng.net/wp-content/uploads/2016/03/Leidson-Germano-Radix-e-Matheus-Sexto-da-CSN-720x380.jpg" />');
        div.appendTo($('body'));
	
	setTimeout(function () {
            div.remove();
        }, 3500);
        
    }
})(jQuery);
