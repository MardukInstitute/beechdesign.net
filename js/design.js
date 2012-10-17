// ******************************************************************
//  Design Content
// ******************************************************************



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



if($(document).getUrlParam("project") == 'canteen')
{
	$("nav h2").text(canteenContent.title);
	
	designContentHtml = '<ul>';
	
	for (var i=0;i<canteenContent.items.length;i++)
	{ 
		designContentHtml += '<li>' + canteenContent.items[i].image + '<h2>' + canteenContent.items[i].headline  + '</h2></li>'
	}
	
	$("#design").html(designContentHtml);
}


$("#design img").addClass('non_retina');
