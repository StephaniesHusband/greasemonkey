// ==UserScript==
// @name        Teamforge - Direct Document Links
// @namespace   fedex.scotterwin
// @include     http://itg.prod.fedex.com/sf/docman/do/listDocuments/projects.sqa_senseaware/docman.root*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js

// @version     1
// ==/UserScript==

$(function() {

   // reverse the links for document access...
   $('#documentList a[href*="nav=1"]').each(function() {

      var iconLink = $(this).prev().attr('href');
      var linkLink = $(this).attr('href');

      $(this).prev().attr('href', linkLink).attr('title', 'Click for document details screen');
      $(this).attr('href', iconLink);

      $(this).after("<img class='directIcon' alt='This is now a direct link' title='This is now a direct link' src='http://ddcontent.comrz.com/AcuCustom/Sitename/Icon/Logo/2009AffinoMLMainNonStar12B.png'>");

   });
});
