// ==UserScript==
// @name        FloatingTaskBoardHeader
// @namespace   fedex.scotterwin
// @description Floating Taskboard Header
// @include     https://www13.v1host.com/FedEx/Default.aspx?menu=TaskBoardPage
// @version     1
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js
// ==/UserScript==

function UpdateFloaters() {
   $(".persist-area").each(function() {
      var el = $(this),
          offset = el.offset(),
          scrollTop = $(window).scrollTop(),
          floatingHeader = $(".floatingHeader", this);

      if ((scrollTop > offset.top) && (scrollTop < offset.top + el.height())) {
         floatingHeader.css("visibility", "visible");
      } else {
         floatingHeader.css( "visibility", "hidden");
      };
   });

   $(".persist-subarea").each(function() {
      var el = $(this),
          offset = el.offset(),
          scrollTop = $(window).scrollTop()+$(".floatingHeader[visibility!=hidden]").height(),
          floater = $(".floatingSubHeader", this);

      if ((scrollTop > offset.top) && (scrollTop < offset.top + el.height()-floater.height())) {
         floater.css("visibility", "visible");
         floater.next().css("visibility", "hidden");
      } else {
         floater.css("visibility", "hidden");
         floater.prev().css("visibility", "visible");
      };
   });
}

// DOM Ready
$(document).ready(function() {
   // clone the persist header of every persist area on the page
   var origTarget;
   var theClone;

   $("<style> .floatingHeader { z-index: 1; position: fixed; top: 0; visibility: hidden; } .floatingSubHeader { visibility: hidden; } </style>").appendTo("head");

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
         .css("width", origTarget.width())
         .addClass("floatingHeader")
         .css("padding", 0)
         .css("left", 18)
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
         .css("top", $(".floatingHeader[visibility!=hidden]").height() + "px")
         .addClass("floatingSubHeader");
   });

   $(window)
      .scroll(UpdateFloaters)
      .trigger("scroll");
}); 
