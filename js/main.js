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
				window.open('design.html?project=' + clickableProjects[i]);
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