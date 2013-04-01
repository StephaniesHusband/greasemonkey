// ==UserScript==
// @name        AutoCheckSenseAwareRepo
// @namespace   fedex.scotterwin
// @include     http://itg.prod.fedex.com/sf/*/projects.sqa_senseaware/scm
// @version     1
// ==/UserScript==

$(function() {
   $('input:radio[name="_listItem"]').attr('checked', true);
   toggleButtons($('input:radio[name="_listItem"]')[0]);
});
