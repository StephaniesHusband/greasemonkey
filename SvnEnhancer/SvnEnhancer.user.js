// ==UserScript==
// @name        SvnEnhancer
// @namespace   scotterwin
// @include     http://sym8c.prod.fedex.com/integration/viewvc/viewvc.cgi*
// @version     1
// @grant       none
// ==/UserScript==

var el = document.querySelector('a ~ strong').closest('div');
el.style.backgroundColor = 'red';
el.scrollIntoView();