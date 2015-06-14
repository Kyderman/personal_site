$(document).ready(function() {
  
	checkURL(false, false, false);

	setInterval("checkURL(false, false, true)",250);	//check for a change in the URL every 250 ms to detect if the history buttons have been used

});

var lastHash = '';

function checkURL(hash, is_internal, from_history)
{
    if(!hash) {
    	 hash=window.location.hash;	
    }

    if(from_history == true) {

    	if(lastHash != hash) {
    		loadPage(hash, is_internal);	
    	}
    } else {
    	loadPage(hash, is_internal);	
    }

    lastHash = hash;
}

function loadPage(location, is_internal) {
	
	if(location == '#home'){
		location = '#homepage';
	}
	if(location == '') {
		loadNewContent('#homepage');
	} else {

		if(is_internal) 
		{
			$("#content").fadeOut(300);
			setTimeout(function(){$('.loading').fadeIn(450);}, 300);
			setTimeout(function(){
									$('.loading').fadeOut(200); 
									setTimeout(function(){
										loadNewContent(location);
									}, 250);
								}, 800);
			
		} else {
			loadNewContent(location);
		}
		
	}
}

function loadNewContent(location) {
	$('#content').load(location.substring(1) + '.html', function () 
	{
		$('#content').fadeIn(1000);
		$('a').click(function (e)
		{
      checkURL(this.hash, true, false);	
    });
	});
}



