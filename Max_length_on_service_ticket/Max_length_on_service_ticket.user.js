// ==UserScript==
// @name        RT - Max length on service ticket
// @namespace   fedex.scotterwin
// @description set max length
// @include     https://sso.secure.fedex.com/techweb/srvpro.jsp
// @version     1
// ==/UserScript==

$(document).ready(function() {
   $("textarea[name='notes']").maxLength=255
   $("select[name='fxStationID']").selectedIndex = 52;
   $("input[name='equip_loc']").value = "3860 Forest Hill Irene Rd, Ste 107";
});
