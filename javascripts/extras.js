$(document).ready(function() {


$('#content').fadeIn(1000);




});

window.onbeforeunload = function() { 
	$("#content").fadeOut(300);
	setTimeout(function(){$('.loading').fadeIn(500);}, 300); };

function load_blog() 
{	
	$("#content").fadeOut(300);
	//$('.content').hide("slide", { direction: "right" }, 1000);
	setTimeout(function(){$('.loading').fadeIn(500);}, 300);
	
	
	newLocation = 'blog.html';
	setTimeout(function(){load_page(newLocation)}, 800);
	
	
}

function load_projects() 
{	
	$("#content").fadeOut(300);
	//$('.content').hide("slide", { direction: "right" }, 1000);
	setTimeout(function(){$('.loading').fadeIn(500);}, 300);
	
	
	newLocation = 'projects.html';
	setTimeout(function(){load_page(newLocation)}, 800);
	
	
}

function load_page(location)
{
	$('.loading').fadeOut(200);
	setTimeout( function(){$('#content').load(location, function () {
		$('#content').fadeIn(1000);
	})}, 200);
	//window.location = location;
	//$('.content').show("slide", { direction: "right" }, 1000);
}