// ==UserScript==
// @name        DupDiffControlsToTop
// @namespace   fedex.scotterwin
// @include     http://sym8b.prod.fedex.com/integration/viewvc/viewvc.cgi*
// @version     1
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js
// ==/UserScript==

var theClone = $("form#diff_select").clone().attr('id','deep_select2');

$("table.auto:first tbody:first").append("<tr><td>"+ theClone.attr('id','deep_select2') + "</td></tr>");
$("table.auto:first tbody:first > tr:not(:last-child)").hide();
