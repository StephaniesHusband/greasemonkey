// ==UserScript==
// @name        Filterable Commit Messages
// @namespace   fedex.scotterwin
// @include     http://itg.prod.fedex.com/sf/scm/do/viewRepository/projects.sqa_senseaware/scm.senseaware*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js
// @version     1
// ==/UserScript==

$(document).ready(function() {

   $("tr#filter td:nth-child(4)").html($('<div class="clearable"><input id="msgFilterBox" type="text" class="clearable" style="border-width:0;"><a href="#" id="clearlink"></a></div><a href="#" id="applyCommitMsgFilter">Apply</a>'));

   $("tr#filter").removeClass("OddRow");

   $('#clearlink').click(function() {
      $(this).prev().val('').focus();
      applyFilter();
   });

   $("#applyCommitMsgFilter").click(function() {
      applyFilter();
   });

   function applyFilter() {
      var filter = $("#msgFilterBox").val();

      if (filter=="") {
         $("#CommitList tr.OddRow,tr.EvenRow").show();
      } else {
         $("#CommitList tr.OddRow,tr.EvenRow").each(function() {
            if ($(this).find("td:contains('"+filter+"')").length) {
                  $(this).show(); //show the row 
            }
            else {
                  $(this).hide();
            }
         });
      }
   }
   
});
