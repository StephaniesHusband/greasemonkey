// ==UserScript==
// @name        HideWaveRows
// @description Hide all wave related rows from forecast on WindFinder.com
// @include     http://www.windfinder.com/weatherforecast/memphis_shelby_farms
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js
// ==/UserScript==

//--- This may need tuning based on information not provided!
$("tr td:contains('Wave')").each(function() {
   $(this).parent().css("display","none");
});

$("th[colspan=24]").css("font-weight","bold");
