// ==UserScript==
// @name        EffortReportCurrentWeek
// @namespace   fedex.scotterwin
// @include     https://analytics13.v1host.com/FedEx/AdHoc/rdPage.aspx?rdReport=ahReport47*
// @run-at      document-end
// @require       https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js
// ==/UserScript==

function formatDate(d)
{
   var m = d.getMonth()+1,
       a = d.getDate(),
       y = d.getFullYear();

   return m + "/" + a + "/" + y;
}
$(document).ready(function() {
   var today = new Date(),
       weekStart = new Date(today.setDate(today.getDate() - today.getDay()+1)),
       weekEnd = new Date(today.setDate(today.getDate() - today.getDay()+5));

   $('#RP1_2A').val(formatDate(weekStart));
   $('#RP1_2B').val(formatDate(weekEnd));
});
