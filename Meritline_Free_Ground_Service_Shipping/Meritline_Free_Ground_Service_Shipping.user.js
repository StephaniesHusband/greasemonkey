// ==UserScript==
// @name        Meritline - Free Ground Service Shipping
// @namespace   fedex.scotterwin
// @description Always check free ground service shipping option.
// @include     https://www.meritline.com/checkoutpayment.aspx
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js
// @version     1
// ==/UserScript==

$(function() {
   $("#ShippingMethodID21").click();
});
