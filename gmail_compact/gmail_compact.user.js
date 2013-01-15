// ==UserScript==
// @name          Gmail Compact
// @author        ap
// @namespace     gmailcompact
// @version       2011.11.08
// @description   This script will make Google Mail's new look more compact (make sure display density is set to compact)
// @include       http*://mail.google.*
// ==/UserScript==

if (typeof GM_addStyle === 'undefined') {
    var GM_addStyle = function(css) {
        var d = document;
        var s = d.createElement('style');
        s.textContent = css;
        d.getElementsByTagName('head')[0].appendChild(s);
    }
}

GM_addStyle(".GcwpPb-VArq{margin:6px 10px 0 16px!important}");
GM_addStyle(".W0F9rd{outline:none}");
GM_addStyle(".J-M{padding:6px 0!important}");
GM_addStyle(".tk3N6e-I-Kq{border:1px solid #4d90fe!important;z-index:2 !important}");
GM_addStyle(".tk3N6e-I{margin-right:8px!important;min-width:0!important;height:22px!important;line-height:22px!important}");
GM_addStyle(".tk3N6e-I-Js-IF{margin-right:0!important}");
GM_addStyle(".s8A0qe{padding:2px 16px 10px 1px!important}");
GM_addStyle(".z0 .tk3N6e-I{min-width:97px!important}");
GM_addStyle(".tk3N6e-I-JIbuQc{min-width:54px!important}");
GM_addStyle(".GcwpPb-uq0Mrf{padding-left:8px!important}");
GM_addStyle(".WWmJkf{top:1px!important}");
GM_addStyle(".DhtACd.tk3N6e-I{margin:0!important}");
GM_addStyle(".J-N-JT,.J-N-JW,.J-LC-JT,.J-LC-JW,.J-JK-JT,.J-JK-JW{background-color:#E0E0E0 !important;border-color:#E0E0E0 !important;border-style:solid !important}");
GM_addStyle(".VKRe2c .T8uMgc{margin-right:5px!important}");
GM_addStyle(".O7kW4{margin-right:5px!important}");
GM_addStyle(".oo{margin-right:5px!important}");
GM_addStyle(".NQ, .vD{background:#E0E0E0!important;color:#333!important}");
GM_addStyle(".vD .vG,.vD .vG a{color:#333!important}");
GM_addStyle(".TO.NQ .n0{color:#333!important}");
GM_addStyle(".s .oB{background-color:#E0E0E0!important}");
GM_addStyle(".nM{font-size:72%!important}");
GM_addStyle(".vB{font-size:72%!important}");
GM_addStyle(".GcwpPb-hsoKDf.nr{height:24px!important;padding:3px 0 3px 3px!important}");
GM_addStyle(".GcwpPb-hsoKDf.nr:focus{padding:3px 0 3px 3px!important}");
GM_addStyle(".beIiTd{padding:7px 5px!important}");
GM_addStyle(".U5 .Jd-Je{background-color:#E0E0E0!important;color:#222!important}");
GM_addStyle(".Je{background-color: #E0E0E0!important}");
GM_addStyle(".l2{margin-bottom:30px!important}");
GM_addStyle(".t6{min-width:245px!important}");
GM_addStyle(".tN{width:50px!important}");
GM_addStyle(".tM{height:48px!important;width:48px!important}");
GM_addStyle(".tR{height:48px!important;width:48px!important}");
GM_addStyle(".tO .tP{width:48px!important}");
GM_addStyle(".tO .tQ{width:48px!important}");
GM_addStyle("#:13z.tQ{width:48px!important}");
GM_addStyle(".tP{top:0!important}");
GM_addStyle(".tS{background-size:48px!important}");
GM_addStyle(".GcwpPb-Z8OBDd .b8 .vh{padding:3px 10px!important;top:2px!important}");
GM_addStyle(".GcwpPb-Z8OBDd .cc .vh{padding:3px 10px!important;top:2px!important}");
GM_addStyle(".GcwpPb-Z8OBDd .cd .vh{padding:3px 10px!important;top:2px!important}");
GM_addStyle(".xY{font-size:72% !important; height:18px!important}");
GM_addStyle(".zt td.Wa{padding-top:0!important}");
GM_addStyle(".TC,.xY{padding-top:1px!important}");
GM_addStyle(".GcwpPb-Z8OBDd{margin-bottom:2px!important}");
GM_addStyle(".VP5otc-pzeoBf,.VP5otc-YU0EGb-pzeoBf,.iI,.VP5otc-U4m8q,.iE{padding-bottom:4px!important}");
GM_addStyle(".tk3N6e-Jo{top:-1px!important}");

GM_addStyle(".mq{display:none!important}");
GM_addStyle(".iY .Bu{opacity:.95}");
GM_addStyle(".if{margin:3px 0 12px 8px!important}");
GM_addStyle(".hx{padding-left:4px!important}");
GM_addStyle(".hx .gE{min-height:36px}");
GM_addStyle(".ha{margin:6px 1px 5px 5px!important;padding:0!important}");
GM_addStyle(".X9rihb{padding:10px 8px 0 0!important}");
GM_addStyle(".hI,.ig,.iv,.hF{padding-top:8px!important}");
GM_addStyle(".hI,.ig,.hF{padding-bottom:8px!important}");
GM_addStyle(".k0OQve .m0aqBd{margin-top:-3px!important}");
GM_addStyle(".hx .h7 .Bk .G2 .HprMsc{padding-bottom:0!important}");
GM_addStyle(".Bs.nH.iY .Bu:nth-child(2) .nH{width:12px!important}");
GM_addStyle(".u5.FDerDe{display:none!important}");
GM_addStyle(".RiHMIe{margin:5px 0 0!important;padding-bottom:4px!important}");

GM_addStyle(".GcwpPb-MEmzyf.GcwpPb-bEO5kc{display:none!important}");