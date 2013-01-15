// ==UserScript==
// @name           Seed Meeting ID
// @namespace      fedex.scotterwin
// @include        https://meeting.web.fedex.com/*
// ==/UserScript==

/**
 * Get URL parameters
 * @param the name of the parameter from the URL to retrieve
 * @return the requested parameter value if exists else an empty string
 */

doStep1();

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

function doStep1()
{
   var id = getUrlParam("id");

   if (id)
   {
      var i = document.evaluate('//*[@id="wcMeetingID"]', document.body, null, 9, null).singleNodeValue;
      i.value = id;

      location.assign("javascript:AttendMtg();void(0)");
   }

   doStep2();
}

function doStep2()
{
   //var fn = document.evaluate('//*[@id="FirstName"]', document.body, null, 9, null).singleNodeValue;
   var un = document.evaluate('//*[@id="UserName"]', document.body, null, 9, null).singleNodeValue;
   var pw = document.evaluate('//*[@id="UserPwd"]', document.body, null, 9, null).singleNodeValue;

   //fn.value = "Scott Erwin";
   un.value = "263952";
   pw.value = getUrlParam("p");

   location.assign("javascript:document.LoginForm.submit();void(0)");
}

function getUrlParam(name)
{
    var regexS;
    var regexl;
    var results;
 
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    regexS = "[\\?&]"+name+"=([^&#]*)";
    regex = new RegExp(regexS);
    results = regex.exec (window.location.href);
            //note: don't write space after command exec
 
    if ( results == null ) {
        return "";
    } else {
        return results[1];
    }
}
