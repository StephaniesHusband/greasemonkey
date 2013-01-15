// ==UserScript==
// @name        Set Personal VersonOne Report Date Range
// @namespace   fedex.scotterwin
// @include     https://analytics13.v1host.com/FedEx/AdHoc/rdPage.aspx?rdReport=ahReport47&FirstTime=True&rdNoShowWait=True*
// @version     1
// ==/UserScript==
$(function() {
    var today = new Date();
    var weekStart = new Date(today.setDate(today.getDate() - today.getDay()+1));
    var weekEnd = new Date(today.setDate(today.getDate() - today.getDay()+5));

    $("#RP1_2A").val($.datepicker.formatDate("m/d/yy", weekStart));
    $("#RP1_2B").val($.datepicker.formatDate("m/d/yy", weekEnd));
});
