// ==UserScript==
// @name           Translations - Extra Links
// @namespace      fedex.scotterwin
// @include        https://vistaidiom.vistatec.ie/*
// @grant          none
// ==/UserScript==

function SiteDetail()
{
   this.url = "";
   this.name = "";
   this.id = "";
}

var token = getUrlParam("token");

var newLinks = new Array();

newLinks.push({
   url: "https://vistaidiom.vistatec.ie/ws/show_usefullink?&link=1305&token=" + token,
   name: "Group Monitor",
   id: "groupmonitor"
});

newLinks.push({
   url: "https://vistaidiom.vistatec.ie/ws/transport/projects?&token=" + token,
   name: "My Projects",
   id: "myprojects"
});

newLinks.push({
   url: "https://vistaidiom.vistatec.ie/ws/transport/projects?&token=" + token,
   name: "Download",
   id: "download"
});

newLinks.push({
   url: "https://vistaidiom.vistatec.ie/ws/transport/createproject?&token=" + token,
   name: "Create a Project",
   id: "createproject"
});

for (i=0; i<newLinks.length; i++)
{
   var td = document.createElement("td");
   var a = document.createElement("a");
   a.href = newLinks[i].url;
   a.innerHTML = newLinks[i].name;
   a.id = a.name = newLinks[i].id;
   a.className = "header_link";

   td.appendChild(a);

   var row = document.evaluate("/html/body/form/table/tbody/tr/td/table/tbody/tr/td/table/tbody/tr/td/table/tbody/tr", document.body, null, 9, null).singleNodeValue;
   row.insertBefore(td, row.firstChild);
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
