// ==UserScript==
// @name        TeamForge Links
// @namespace   fedex.scotterwin
// @description Helpful TeamForge Links
// @include     http://itg.prod.fedex.com/sf/*
// @include     https://itg.prod.fedex.com/sf/*
// @version     v2.1
//
// Copyright (c) 2013 Scott Erwin
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
// INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
// PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
// HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF 
// CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE 
// OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
//
// ==/UserScript==

var NAV_MENU = '<!--New Links-->'
+ '<nav id="scottLinks">'
+ '  <span>Quick Links:</span>'
+ '  <ul>'
+ '    <li>'
+ '      <a class="wsaw" href="http://itg.prod.fedex.com/sf/docman/do/listDocuments/projects.sqa_senseaware/docman.root.wsaw1380_ol1302_feb_2012_dl">SenseAware (1380)</a>'
+ '      <ul class="fallback">'
+ '        <li><a class="wsaw" href="http://itg.prod.fedex.com/sf/docman/do/listDocuments/projects.sqa_senseaware/docman.root.definition.pre_read_brss">PreRead BRSs</a></li>'
+ '        <li><a class="wsaw" href="http://itg.prod.fedex.com/sf/docman/do/listDocuments/projects.sqa_senseaware/docman.root.wsaw1380_ol1302_feb_2012_dl.backlog_stories">Current BRSs</a></li>'
+ '        <li><a class="wsaw" href="http://itg.prod.fedex.com/sf/docman/do/listDocuments/projects.sqa_senseaware/docman.root.wsaw1380_ol1302_feb_2012_dl.development">Code Review WPRs</a></li>'
+ '        <li><a class="wsaw" href="http://itg.prod.fedex.com/sf/go/doc711686?nav=1">UTC Document</a></li>'
+ '        <li><a class="wsaw" href="http://itg.prod.fedex.com/sf/docman/do/listDocuments/projects.sqa_senseaware/docman.root.templates">Job Aids</a></li>'
+ '        <li><a class="wsaw" href="http://itg.prod.fedex.com/sf/go/doc573380?nav=1">Application Content Inventory</a></li>'
+ '        <li><a class="wsaw" href="http://itg.prod.fedex.com/sf/go/doc714562?nav=1">Release Calendar</a></li>'
+ '      </ul>'
+ '    </li>'
+ '    <li>'
+ '      <a href="http://itg.prod.fedex.com/sf/docman/do/listDocuments/projects.sqa_senseaware/docman.root" id="dotComDevComm">DotCom Dev Comm</a>'
+ '      <ul class="fallback">'
+ '        <li><a href="http://itg.prod.fedex.com/sf/discussion/do/listTopics/projects.fedex_com_developmentcommunity/discussion.gui_development">GUI Dev Forum</a></li>'
+ '        <li><a href="http://itg.prod.fedex.com/sf/go/projects.fedex_com_developmentcommunity/docman.root.gui_strategy.design_patterns_and_practices">JavaScriptMVC Training</a></li>'
+ '      </ul>'
+ '    </li>'
+ '  </ul>'
+ '</nav>';

$(document).ready(function() {
   $("tr.sitelogo").append($("<div class='wrapper'/>").html(NAV_MENU));

   $('nav li ul').hide().removeClass('fallback');
   $('nav li').hover(
      function () {
         $('ul', this).stop().slideDown(100);
      },
      function () {
         $('ul', this).stop().slideUp(100);
      }
   );
});
