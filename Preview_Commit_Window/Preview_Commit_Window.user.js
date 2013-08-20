// ==UserScript==
// @name        Preview Commit Window
// @namespace   fedex.scotterwin
// @include     http://itg.prod.fedex.com/sf/scm/do/viewRepository/projects.sqa_senseaware/scm.senseaware
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js
// @version     1
// ==/UserScript==

$(document).ready(function() {
   $('td > a[href*="cmmt"]').each(function() {
     $(this).after($("<div class='box'><iframe src='"+this.href+"#showCommitsOnly' width='1000px' height='300px'></iframe></div>"));
   });

   // Ideas
   // Put iframe in a floating div and place so that you can always see it
   // (won't go off screen)
   //
   // make into a hierarchical structure with +/- to expand/contract
   //
   // forget all this and use wget to get a list of all the files you've changed
   // and then feed that list into BC2
});
