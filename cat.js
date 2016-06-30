(function (window, document, undefined) {
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
    var text;
    
    clicks = document.getElementById('clicks');
    catImages = document.querySelectorAll('img');
    catImages.forEach( function(cat, index) {
    	
    	nameEl = cat.parentNode.getElementsByClassName('name')[0];
    	nameEl.innerHTML = cats[index].name;

        cat.addEventListener('click', function(event){
            text = event.target.parentNode.getElementsByClassName("clicks")[0];
            text.innerHTML = text.innerHTML * 1 + 1;
        }, false);
    	// statements
    });

})(window, document);