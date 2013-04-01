// ==UserScript==
// @name        Personal VersionOne Report
// @namespace   fedex.scotterwin
// @include     https://www13.v1host.com/FedEx/Default.aspx*
// @version     1
// ==/UserScript==

$(function() {
   $('div.MainMenu_Reports ul.navigation').append(
      $('<li>').addClass('item').css('font-weight', 'bold').append(
         $('<a>').attr('href', 'https://analytics13.v1host.com/FedEx/AdHoc/rdPage.aspx?rdReport=ahReport47#').append('Scott Erwin\'s Effort')
      )
   );
});
