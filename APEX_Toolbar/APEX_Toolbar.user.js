// ==UserScript==
// @name        APEX_Toolbar
// @namespace   fedex.scotterwin
// @include     https://performancemanager4.successfactors.com/acme*
// @version     1
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js
// ==/UserScript==

$(document).ready(function() {

   $("body").append($("<div id='floatingMenu'></div>").html($("td.contextualIcons a").clone()));

   $("#floatingMenu").prepend("<h1>Action Menu</h1>");
   $("#floatingMenu").append("<h2>Save often!</h2>");

   // allow scroll until it's about to scroll off page and then "affix it".

   var top = $('#floatingMenu').offset().top - parseFloat($('#floatingMenu').css('marginTop').replace(/auto/, 0));
   $(window).scroll(function (event) {
      // what the y position of the scroll is
      var y = $(this).scrollTop();
   
      // whether that's below the form
      if (y >= top) {
         // if so, ad the fixed class
         $('#floatingMenu').addClass('fixed');
      } else {
         // otherwise remove it
         $('#floatingMenu').removeClass('fixed');
      }
   });

   // this method makes it fixed in the same location on the page as it is
   // originally
	/*function moveFloatMenu() {
		var menuOffset = menuYloc.top + $(this).scrollTop() + "px";
		$('#floatingMenu').animate({top:menuOffset},{duration:100,queue:false});
	}
 
	menuYloc = $('#floatingMenu').offset();
 
	$(window).scroll(moveFloatMenu);
 
	moveFloatMenu(); */

});
