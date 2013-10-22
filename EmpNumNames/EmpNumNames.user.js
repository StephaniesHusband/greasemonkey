// ==UserScript==
// @name        SVN - EmpNumNames
// @namespace   fedex.scotterwin
// @include     http://svn1.prod.fedex.com:7080/integration/viewvc/viewvc.cgi/trunk/saflex/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @version     1
// ==/UserScript==

$(document).ready(function() {
   // Add a title tool tip to the employee numbers so that we'll know who they are.
   $('em:contains("381805")').attr('title', 'Emp# 381805').text('Reneé Redmond');
   $('em:contains("263952")').attr('title', 'Emp# 263952').text('Scott Erwin');
   $('em:contains("763341")').attr('title', 'Emp# 763341').text('Michael Heier');
   $('em:contains("854055")').attr('title', 'Emp# 854055').text('Satish');
   $('em:contains("780963")').attr('title', 'Emp# 780963').text('Lindsey Sanders');
   $('em:contains("446551")').attr('title', 'Emp# 446551').text('Dan Ost');

   // Move the diff form to the top of the form so that you don't have to scroll
   // all the way to the bottom.
   $('div.contentArea').prepend($('form#diff_select'));
});
