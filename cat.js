
var cats = [
    {
	    name: 'Fluffy',
	    image: 'cat.js',
	    clicks: 0
    },
    {
	    name: 'Snarf',
	    image: 'cat2.js',
	    clicks: 0
    }
    ];
(function (window, document, undefined) {
	
    var text;
    
    clicks = document.getElementById('clicks');
    catImages = document.querySelectorAll('img');
    catImages.forEach( function(cat, index) {
    	
    	nameEl = cat.parentNode.getElementsByClassName('name')[0];
    	nameEl.innerHTML = cats[index].name;

        cat.addEventListener('click', function(event){
            text = event.target.parentNode.getElementsByClassName("clicks")[0];
            cats[index].clicks++;
            text.innerHTML = cats[index].clicks;
        }, false);
    	// statements
    });

})(window, document);