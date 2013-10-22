// ==UserScript==
// @name        VersionOne - Floating TaskBoard Header
// @namespace   fedex.scotterwin
// @description Floating Taskboard Header
// @include     https://www13.v1host.com/FedEx/*
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

function setupHeader(jNode) {

   var theClone = $(".persist-header", jNode),
       origTarget = theClone.clone();

   theClone
      .before(origTarget)
      .css("width", (origTarget.width()+3) + "px")
      .addClass("floatingHeader")
      .css("padding", 0)
      .children().width(function(i,val) {
         return origTarget.children().eq(i).width();
      });
}

function setupSubHeader(jNode) {

   var theClone = $(".persist-subheader", jNode),
       origTarget = theClone.clone();

   theClone
      .before(origTarget)
      .css("width", origTarget.width() + "px")
      .css("position", "fixed")
      .css("top", $(".floatingHeader:visible").height() + "px")
      .addClass("floatingSubHeader");
}

/*--- waitForKeyElements():  A handy, utility function that
    does what it says.
*/
function waitForKeyElements (
    selectorTxt,    /* Required: The jQuery selector string that
                        specifies the desired element(s).
                    */
    actionFunction, /* Required: The code to run when elements are
                        found. It is passed a jNode to the matched
                        element.
                    */
    bWaitOnce,      /* Optional: If false, will continue to scan for
                        new elements even after the first match is
                        found.
                    */
    iframeSelector  /* Optional: If set, identifies the iframe to
                        search.
                    */
)
{
    var targetNodes, btargetsFound;

    if (typeof iframeSelector == "undefined")
        targetNodes     = $(selectorTxt);
    else
        targetNodes     = $(iframeSelector).contents ()
                                           .find (selectorTxt);

    if (targetNodes  &&  targetNodes.length > 0) {
        /*--- Found target node(s).  Go through each and act if they
            are new.
        */
        targetNodes.each ( function () {
            var jThis        = $(this);
            var alreadyFound = jThis.data ('alreadyFound')  ||  false;

            if (!alreadyFound) {
                //--- Call the payload function.
                actionFunction (jThis);
                jThis.data ('alreadyFound', true);
            }
        } );
        btargetsFound   = true;
    }
    else {
        btargetsFound   = false;
    }

    //--- Get the timer-control variable for this selector.
    var controlObj      = waitForKeyElements.controlObj  ||  {};
    var controlKey      = selectorTxt.replace (/[^\w]/g, "_");
    var timeControl     = controlObj [controlKey];

    //--- Now set or clear the timer as appropriate.
    if (btargetsFound  &&  bWaitOnce  &&  timeControl) {
        //--- The only condition where we need to clear the timer.
        clearInterval (timeControl);
        delete controlObj [controlKey]
    }
    else {
        //--- Set a timer, if needed.
        if ( ! timeControl) {
            timeControl = setInterval ( function () {
                    waitForKeyElements (    selectorTxt,
                                            actionFunction,
                                            bWaitOnce,
                                            iframeSelector
                                        );
                },
                500
            );
            controlObj [controlKey] = timeControl;
        }
    }
    waitForKeyElements.controlObj   = controlObj;
}

// DOM Ready
$(document).ready(function() {
   $("<style> .floatingHeader { z-index: 1; position: fixed; top: -2px; visibility: hidden; } .floatingSubHeader { visibility: hidden; }</style>").appendTo("head");

   $("table.taskboard").addClass("persist-area");
   $("table.taskboard tr.header").addClass("persist-header");
   $("td.main-card, td.summary").addClass("persist-subarea");
   $("td.main-card div.story-card, td.summary dl.non-card").addClass("persist-subheader");

   waitForKeyElements(".persist-area", setupHeader);
   waitForKeyElements(".persist-subarea", setupSubHeader);

   $(window)
      .scroll(UpdateFloaters)
      .trigger("scroll");
}); 
