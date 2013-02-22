// ==UserScript==
// @name        EmpNumNames
// @namespace   fedex.scotterwin
// @include     http://svn1.prod.fedex.com:7080/integration/viewvc/viewvc.cgi/trunk/saflex/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @version     1
// ==/UserScript==

$(document).ready(function() {
   $('em:contains("381805")').attr({
      alt: 'Reneé Redmond',
      title: 'Reneé Redmond'});

   $('em:contains("263952")').attr({
      alt: 'Scott Erwin',
      title: 'Scott Erwin'});

   $('em:contains("763341")').attr({
      alt: 'Michael Heier',
      title: 'Michael Heier'});

   $('em:contains("854055")').attr({
      alt: 'Satish',
      title: 'Satish'});

   $('em:contains("780963")').attr({
      alt: 'Lindsey Sanders',
      title: 'Lindsey Sanders'});
});
