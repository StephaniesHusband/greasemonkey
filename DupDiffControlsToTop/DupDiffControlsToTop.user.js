// ==UserScript==
// @name        DupDiffControlsToTop
// @namespace   fedex.scotterwin
// @include     http://sym8b.prod.fedex.com/integration/viewvc/viewvc.cgi*
// @version     1
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js
// ==/UserScript==

$("table.auto:first tbody:first").append("<tr><td>"+ $("form#diff_select:last").clone().html() +"</td></tr>");
$("table.auto:first tbody:first > tr:not(:last-child)").hide();
