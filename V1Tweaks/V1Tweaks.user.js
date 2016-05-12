// ==UserScript==
// @name        V1Tweaks
// @namespace   scotterwin
// @include     https://www13.v1host.com/FedEx/Default.aspx?menu=TaskBoardPage*
// @version     1
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @grant       none
// ==/UserScript==

$(document).ready(function() {
   $("td.status:nth-child(2)").find(".task-card").filter(function(ndx, el) {
      var title = $(el).find(".asset-name-link").html().toLowerCase();

      return (title.indexOf("demo action item") > -1 ||
              /*title.indexOf("demo") > -1 || */
              title.indexOf("dai") > -1);
   })
   .addClass("demo-action-item");
});
