// ==UserScript==
// @name        VersionOne - Floating TaskBoard Header
// @namespace   fedex.scotterwin
// @description Floating Taskboard Header
// @include     https://www13.v1host.com/FedEx/*
// @require     jquery.sticky.js
// @version     1
// ==/UserScript==

// DOM Ready
$(document).ready(function() {
   $(".main-card.story-card-container > .story-card:first-child").sticky({topSpacing: 40});
});
