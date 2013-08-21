// ==UserScript==
// @name        Preview Commit Window
// @namespace   fedex.scotterwin
// @include     http://itg.prod.fedex.com/sf/scm/do/viewRepository/projects.sqa_senseaware/scm.senseaware
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js
// @version     1
// ==/UserScript==

$(document).ready(function() {

   $('td > a[href*="cmmt"]').each(function() {
      $(this).parent().parent()
         .after($("<tr style='display:none;' id='row"+$(this).html()+"'><td>&nbsp;</td><td colspan='4'>commits here</td></tr>"));

      $(this).click(function() {
         var cmtNum = this.innerHTML;

         if ($("#row"+cmtNum).is(":visible") || $("#row"+cmtNum).html().is(":empty"))
            $("#row"+cmtNum).slideToggle();
         else if (
            getCommits(this.href, cmtNum);
 
         return false; // prevent default
      });
   });

   function getCommits(cmtUrl, cmtNum) {
      $.get(cmtUrl, function(data) {
         $("#row"+cmtNum+" td:nth-child(2)")
            .html($(data)
            .find("#ScmFiles")
            .css('paddingBottom','8px'));

         $("#row"+cmtNum).slideToggle();
      });
   }
});
