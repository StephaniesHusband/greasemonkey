// ==UserScript==
// @name        Teamforge - Link Menus
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

// ===== MODIFY THESE TO MATCH RELEASE ============================================================================
var CUR_VERSION = "1700";                      // Release # for title of menu
var VER_BASE    = ".wsaw1700_1510_oct_2015";   // unique release path value
var REL_CAL_VER = "doc1090808";                // Release calendar document number
var CHGTRKVER   = "srch2421"                   // unique search value given to a "Saved" search
//=================================================================================================================

// ***** DO NOT MODIFY THESE **************************************************************************************
var SERVER      = "http://itg.prod.fedex.com/sf";
var TRK_ROOT    = SERVER + "/tracker/do/listArtifacts/projects.sqa_senseaware/tracker.changetracker";
var DOC_ROOT    = SERVER + "/docman/do/listDocuments/projects.sqa_senseaware/docman.root";
var VER_ROOT    = DOC_ROOT + VER_BASE;
var JOB_AID     = DOC_ROOT + ".templates";
var DEV_DIR     = DOC_ROOT + VER_BASE + ".development";
var BRS_DIR     = DOC_ROOT + VER_BASE + ".brs";
var REL_CAL     = VER_ROOT + ".release_documentation/" + REL_CAL_VER;
var CHG_TRK_DIR = TRK_ROOT + "?filterId=" + CHGTRKVER;
var SVN_COMMITS = SERVER + "/scm/do/viewRepository/projects.sqa_senseaware/scm.senseaware";
//*****************************************************************************************************************

var NAV_MENU = '<!--New Links-->'
+ '<nav id="scottLinks">'
+ '  <span>Quick Links:</span>'
+ '  <ul>'
+ '    <li>'
+ '      <div id="icon-wrapper"><img src="https://sa.senseaware.com/static/sasec/favicon.ico"></div><a id="wsaw-title" class="wsaw" href="'+VER_ROOT+'">SenseAware ('+CUR_VERSION+')</a>'
+ '      <ul class="fallback">'
+ '        <li><a class="wsaw" href="'+DOC_ROOT+'.definition.pre_read_brss">PreRead BRSs</a></li>'
+ '        <li><a class="wsaw" href="'+BRS_DIR+'">Current BRSs</a></li>'
+ '        <li><a class="wsaw" href="'+CHG_TRK_DIR+'">Change Trackers</a></li>'
+ '        <li><a class="wsaw" href="'+DEV_DIR+'">Code Review WPRs</a></li>'
+ '        <li><a class="wsaw" href="'+JOB_AID+'">Job Aids</a></li>'
+ '        <li><a class="wsaw" href="'+REL_CAL+'">Release Calendar</a></li>'
+ '        <li><a class="wsaw" href="'+SVN_COMMITS+'">SVN Commits</a></li>'
+ '      </ul>'
+ '    </li>'
+ '    <li>'
+ '      <a href="http://itg.prod.fedex.com/sf/docman/do/listDocuments/projects.sqa_senseaware/docman.root" id="dotComDevComm">DotCom Dev Comm</a>'
+ '      <ul class="fallback">'
+ '        <li><a href="http://itg.prod.fedex.com/sf/discussion/do/listTopics/projects.fedex_com_developmentcommunity/discussion.gui_development">GUI Dev Forum</a></li>'
+ '        <li><a href="http://itg.prod.fedex.com/sf/go/projects.fedex_com_developmentcommunity/docman.root.gui_strategy.design_patterns_and_practices">JavaScriptMVC Training</a></li>'
+ '        <li><a href="http://itg.prod.fedex.com/sf/docman/do/listDocuments/projects.fedex_com_developmentcommunity/docman.root">TeamForge Root</a></li>'
+ '        <li><a href="http://itg.prod.fedex.com/sf/wiki/do/viewPage/projects.eos_egis/wiki/EgisjsApi">eGIS Wiki</a></li>'
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
