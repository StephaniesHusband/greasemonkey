// ==UserScript==
// @name        Teamforge - Monitor button at top
// @namespace   fedex.scotterwin
// @include     http://itg.prod.fedex.com/sf/docman/do/listDocuments*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js
// @version     1
// ==/UserScript==


$(document).ready(function() {
   $("table#documentList tr.ContainerHeader td div:first").append($("#_SfButton_monitor").clone());
});
