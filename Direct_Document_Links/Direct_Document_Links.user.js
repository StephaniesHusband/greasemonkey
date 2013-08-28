// ==UserScript==
// @name        Direct Document Links
// @namespace   fedex.scotterwin
// @include     http://itg.prod.fedex.com/sf/docman/do/listDocuments/projects.sqa_senseaware/docman.root*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js
// @version     1
// ==/UserScript==

$(document).ready(function() {

   $('#documentList a[href*="nav=1"]').each(function() {

      var docNum = $(this).attr("href").match(/doc\d{6}/)[0];

      $(this).attr("href", document.documentURI.replace("listDocuments","downloadDocument")+"/"+docNum);

   });

});
