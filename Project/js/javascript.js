$('.navigate').smoothScroll();

$(document).ready(function()
	{
		console.log("Dom is ready");
		var button = $('#button');
        var line = $('#navbar')

$(window).on("scroll",function(e){
	console.log($(this).scrollTop());
	if($(this).scrollTop() > 540)
		{
			console.log("Move circle 1st");
		button.css({
		'background': '#E23744',
		'color': 'white',
	    });
	    line.css({
	    	'box-shadow': '0px 0px 8px 0px  #A9A9A9',
	    })
        }
    else{
    	button.css({
        'background': 'white',
		'color': '#E23744',
    	});
    	line.css({
	    	'box-shadow': '0px 0px 0px 0px  #A9A9A9',
	    })
    }
});
});