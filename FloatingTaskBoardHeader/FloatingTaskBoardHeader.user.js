// ==UserScript==
// @name        FloatingTaskBoardHeader
// @namespace   fedex.scotterwin
// @description Floating Taskboard Header
// @include     https://www13.v1host.com/FedEx/Default.aspx?menu=TaskBoardPage
// @version     1
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js
// ==/UserScript==

function UpdateTableHeaders() {
   $(".persist-area").each(function() {
      var el = $(this),
      offset = el.offset(),
      scrollTop = $(window).scrollTop(),
      floatingHeader = $(".floatingHeader", this)

      if ((scrollTop > offset.top) && (scrollTop < offset.top + el.height())) {
         floatingHeader.css({
            "visibility": "visible"
         });
      } else {
         floatingHeader.css({
            "visibility": "hidden"
         });
      };
   });
}

// DOM Ready
$(document).ready(function() {
   $("<style> .floatingHeader { position: fixed; top: 0; visibility: hidden; } </style>").appendTo("head");

   $("table.taskboard").addClass("persist-area");

   $("table.taskboard tr.header").addClass("persist-header");

   // clone the persist header of every persist area on the page
   var origTarget;
   var clonedHeaderRow;
   $(".persist-area").each(function() {
      // clone the persist header
      clonedHeaderRow = $(".persist-header", this);

      origTarget = clonedHeaderRow.clone();

      clonedHeaderRow
         .before(origTarget)
         .css("width", clonedHeaderRow.width())
         .css("padding", 0)
         .css("left", 18)
         .addClass("floatingHeader");

      clonedHeaderRow.children().width(function(i,val) {
         return origTarget.children().eq(i).width();
      });
   });
   $(window)
   .scroll(UpdateTableHeaders)
   .trigger("scroll");
}); 
