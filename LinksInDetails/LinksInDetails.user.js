// ==UserScript==
// @name        Google Calendar - LinksInDetails
// @namespace   fedex.scotterwin
// @include     https://www.google.com/calendar/*
// @version     1
// ==/UserScript==

if (!String.linkify) {
   String.prototype.linkify = function() {

      // http://, https://, ftp://
      var urlPattern = /\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim;

      // www. sans http:// or https://
      var pseudoUrlPattern = /(^|[^\/])(www\.[\S]+(\b|$))/gim;

      // Email addresses
      var emailAddressPattern = /\w+@[a-zA-Z_]+?(?:\.[a-zA-Z]{2,6})+/gim;

      return this
            .replace(urlPattern, '<a href="$&">$&</a>')
            .replace(pseudoUrlPattern, '$1<a href="http://$2">$2</a>')
            .replace(emailAddressPattern, '<a href="mailto:$&">$&</a>');
   };
}

//--- Change this next line to find the correct element; sample shown.
var bc = document.getElementById("bubbleContent:f");
bc.addEventListener("DOMNodeInserted", function(ev) {
   var td = bc.querySelector("td");

   td.querySelector("a.eb-map-link").remove();
   
   td.innerHTML = td.innerHTML.linkify();
});
