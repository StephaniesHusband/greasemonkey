// ==UserScript==
// @name        FloatingTaskBoardHeader
// @namespace   fedex.scotterwin
// @description Floating Taskboard Header
// @include     https://www13.v1host.com/FedEx/Default.aspx?menu=TaskBoardPage
// @version     1
// ==/UserScript==

function UpdateFloaters() {
   $(".persist-area").each(function() {
      var el = $(this),
          offset = el.offset(),
          scrollTop = $(window).scrollTop(),
          floatingHeader = $(".floatingHeader", this);

      if ((scrollTop > offset.top) && (scrollTop < offset.top + el.height())) {
         // show new floating header
         floatingHeader.css("visibility", "visible");
         // since there is a slide out div on the left, compute the absolute
         // position when we show the new floating header.
         floatingHeader.css("left", (floatingHeader.next().offset().left-2) + "px")
      } else {
         // hide new floating header--because we can see the original now
         floatingHeader.css("visibility", "hidden");
      };
   });

   $(".persist-subarea").each(function() {
      var el = $(this),
          offset = el.offset(),
          scrollTop = $(window).scrollTop()+$(".floatingHeader:visible").height(),
          floater = $(".floatingSubHeader", this);

      if ((scrollTop > offset.top) && (scrollTop < offset.top + el.height()-floater.height())) {
         // Show the floater
         floater.css("visibility", "visible");
         // Hide the original target card
         floater.next().css("visibility", "hidden");
      } else {
         // Hide the floater
         floater.css("visibility", "hidden");
         // Show the original target card
         floater.prev().css("visibility", "visible");
      };
   });
}

// DOM Ready
$(document).ready(function() {
   // clone the persist header of every persist area on the page
   var origTarget;
   var theClone;

   $("<style> .floatingHeader { z-index: 1; position: fixed; top: -2px; visibility: hidden; } .floatingSubHeader { visibility: hidden; }</style>").appendTo("head");

   $("table.taskboard").addClass("persist-area");
   $("table.taskboard tr.header").addClass("persist-header");

   $("td.main-card").addClass("persist-subarea");
   $("td.main-card div.story-card").addClass("persist-subheader");

   $(".persist-area").each(function() {
      // clone the persist header
      theClone = $(".persist-header", this);

      origTarget = theClone.clone();

      theClone
         .before(origTarget)
         .css("width", (origTarget.width()+3) + "px")
         .addClass("floatingHeader")
         .css("padding", 0)
         .children().width(function(i,val) {
            return origTarget.children().eq(i).width();
         });
   });

   $(".persist-subarea").each(function() {
      // clone the persist header
      theClone = $(".persist-subheader", this);

      origTarget = theClone.clone();

      theClone
         .before(origTarget)
         .css("width", origTarget.width())
         .css("position", "fixed")
         .css("top", $(".floatingHeader:visible").height() + "px")
         .addClass("floatingSubHeader");
   });

   $(window)
      .scroll(UpdateFloaters)
      .trigger("scroll");
}); 
