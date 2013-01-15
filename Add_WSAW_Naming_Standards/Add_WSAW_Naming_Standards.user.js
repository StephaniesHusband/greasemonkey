// ==UserScript==
// @name        Add WSAW Naming Standards
// @namespace   fedex.scotterwin
// @include     http://itg.prod.fedex.com/sf/docman/do/createDocument/*
// @version     1.1
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// ==/UserScript==

var STANDARDS = '<!--WSAW Standards-->'
+ '<td>'
+ '  <table class="standards">'
+ '    <tr><th colspan="2">WSAW Naming Standards</th></tr>'
+ '    <tr><td>Code Review:</td><td>WSAW&lt;RRRR&gt; ITG (&lt;Story #&gt;) &lt;Story Title&gt; - Code Review</td></tr>'
+ '    <tr><td>UTCR:</td><td>WSAW&lt;RRRR&gt; ITG (&lt;Story #&gt;) &lt;Story Title&gt; - Unit Test Results</td></tr>'
+ '    <tr><td>Code Review/UTCR:</td><td>WSAW&lt;RRRR&gt; ITG (&lt;Story #&gt;) &lt;Story Title&gt; - Code and Unit Test WPR</td></tr>'
+ '    <tr><td>&nbsp;</td><td>&nbsp;</td></tr>'
+ '    <tr><td>Example:</td><td>WSAW1380 ITG 654321 (789) Add Some Feature - Code and Unit Test WPR</td></tr>'
+ '  </table>'
+ '</td>';

$(document).ready(function() {
   $('div#main form#createDocument table.Container tbody tr td.PaddedTable table.PaddedTable tbody tr:nth-child(3)').append(STANDARDS);
});
