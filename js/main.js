clickableProjects = ['canteen'];

$(".rslides").each(
	function(index)
	{
		nameOfProject = $(this).attr('id');
		nameOfProject = nameOfProject.substr(0, nameOfProject.length - 6);
		
		for (var i=0;i<clickableProjects.length;i++)
		{
			if(nameOfProject == clickableProjects[i]){
				$(this).css("cursor", "pointer");
			}
		}
	}
);

// ******************************************************************
//  Slide setup functions
// ******************************************************************

function loadSlides(){
	$(function () {
		var titleString =  String($(this).attr('title'));
		var ids = [];
		var recent = [		"mms_1-slide",
							"corona-slide",
							"canteen-slide",
							"dulux-slide",
							"mercedes-slide",
							"deakin-slide",
							"smart-slide",
							"anz-slide",
							"bmw-slide"		];
		
		var older = [		"carlton-slide",
							"yellow-slide"	];
		
		if(titleString == "Michael Beech – Interactive Graphic Designer – Melbourne Australia"){
			ids = recent;
		}else if(titleString == "Michael Beech – Interactive Graphic Designer – Melbourne Australia – Older Projects"){
			ids = older;
		}else{
	
		}
	
		jQuery.each(ids, function() {
	      $("#" + this).responsiveSlides({
			    auto: false,
			    pager: false,
			    nav: true,
			    speed: 500,
			    namespace: "slides-preview"
			});
		});
   });
}

window.onload = loadSlides;


// ******************************************************************
//  Scrolling functions
// ******************************************************************


$("nav ul li a").click(
	function(){
	
		$('html,body').animate({ scrollTop: $("#portfolio").find($(this).attr("href")).offset().top -20 }, 300, 'easeInOutSine');
		window.location.hash = $(this).attr("href");
		return false;
	}
);

$(".toTop").click(
	function(){
	
		$('html,body').animate({ scrollTop: 0 }, 300, 'easeInOutSine');
		window.location.hash = '';
		return false;
	}
);

$(".rslides").click(
	function(){
		nameOfProject = $(this).attr('id');
		nameOfProject = nameOfProject.substr(0, nameOfProject.length - 6);
		
		for (var i=0;i<clickableProjects.length;i++)
		{
			if(nameOfProject == clickableProjects[i]){
				window.open('design.html?project=' + clickableProjects[i], "_self");
			}
		}

	}
);

$(".colophonToggle").click(
	function(){

		if($("#colophon").is(':hidden')){
			$("#colophon").slideDown(300, 'easeInOutSine');
			scrollBottom();
		}else{
			$("#colophon").hide();
		}
	}
);

function scrollBottom(){
	$("html, body").animate({ scrollTop: $(document).height() }, 300,'easeInOutSine');
	return false;
}


// ******************************************************************
//  Email Handler
// ******************************************************************

var domainName 		= "beechdesign.net";
var contactAddress  = "contact";

$(".contact").click(
	function(){

		window.open("mailto:" + contactAddress + "@" + domainName,"_self");
		return false;
	}
);


// ******************************************************************
//  Set Date
// ******************************************************************

var d = new Date(); 
year = d.getFullYear();
$('footer small').append(" " + year);


// ******************************************************************
//  Design Content
// ******************************************************************


if($("#design").length > 0)
{
	canteenContent = new Object();
	canteenContent.title = "Canteen Bandanna Art Designs";
	
	itemContent1 = new Object();
	itemContent1.image = '<img src="img/canteen-full-01.png" alt="canteen-full-01" width="720" height="900" />';
	itemContent1.headline = "Canteen BandannaArt &ndash; iPad app design";
	
	itemContent2 = new Object();
	itemContent2.image = '<img src="img/canteen-full-02.png" alt="canteen-full-02" width="381" height="780" />';
	itemContent2.headline = "Canteen BandannaArt &ndash; iPhone app design";
	 
	itemContent3 = new Object();
	itemContent3.image = '<img src="img/canteen-full-03.png" alt="canteen-full-03" width="1026" height="834" />';
	itemContent3.headline = "Canteen BandannaArt &ndash; Website homepage design";
	
	
	canteenContent.items = [itemContent1, itemContent2, itemContent3];
/*
	param = $(document).getUrlParam("project");

	if(param == "canteen")
	{
*/
		$("nav h2").text(canteenContent.title);
		
		designContentHtml = '<ul>';
		
		for (var j=0;j<canteenContent.items.length;j++)
		{ 
			designContentHtml += '<li>' + canteenContent.items[j].image + '<h2>' + canteenContent.items[j].headline  + '</h2></li>';
		}
		
		$("#design").html(designContentHtml);
/* 	} */
	
	
	$("#design img").addClass('non_retina');
}