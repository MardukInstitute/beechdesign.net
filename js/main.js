function loadSlides(){
$(function () {
	var titleString =  String($(this).attr('title'));
	var ids = [];
	var recent = [		"mms-slide-1",
						"corona-slide",
						"dulux-slide",
						"carlton-slide",
						"mercedes-slide",
						"deakin-slide",
						"smart-slide",
						"anz-slide",
						"bmw-slide"		];
	
	var older = [		"yellow-slide"	];
	
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


var domainName 		= "beechdesign.net";
var contactAddress  = "contact";

$(".contact").click(
	function(){

		window.open("mailto:" + contactAddress + "@" + domainName,"_self");
		return false;
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

window.onload = loadSlides;

var d = new Date(); 
year = d.getFullYear();
$('footer small').append(" " + year);