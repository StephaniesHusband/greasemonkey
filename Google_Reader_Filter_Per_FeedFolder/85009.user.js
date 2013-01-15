// ==UserScript==
// @name           Google Reader Filter Per Feed/Folder
// @namespace      http://pyroprints.com
// @include        http*://*.google.*/reader*
// ==/UserScript==

		/*
		toDo:
			mark filtered as read
			export/import JSON for filter
			online backup of JSON??
			new jQuery
		*/
		
		//uncomment and refresh once to reset all the filters
		//GM_deleteValue("filterJSON_stringified");
		
		// a function that loads jQuery and calls a callback function when jQuery has finished loading
		function addJQuery(callback) {
		  var script = document.createElement("script");
		  script.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js");
		  script.addEventListener('load', function() {
		    var script = document.createElement("script");
		    script.textContent = "(" + callback.toString() + ")();";
		    document.body.appendChild(script);
		  }, false);
		  document.body.appendChild(script);
		}
		
		// load jQuery and execute the main function
		addJQuery(content);

		
		String.prototype.trim = function() {return this.replace(/^\s+|\s+jQuery/g,"");}
    String.prototype.alphaOnly = function() {return this.replace(/[^A-Za-z]/g, "");}
    String.prototype.digitOnly = function() {return this.replace(/[^\d]/g, "")}
    
    createCSSClass(".qf", "display:inline; font-size:.8em; color:#C3D6F4; border:1px solid #C3D6F4; margin-left:5px; padding-top: 3px; cursor:pointer");
		createCSSClass(".word", "font-size:140%; color:#black !important; border:1px solid #E3E7F1; margin-right:5px; cursor:pointer");
		createCSSClass(".selectedWord", "background-color: yellow;");
		createCSSClass("td.export", "color: #AAA;");
				
		function createCSSClass(selector, style)
		{
		 // using information found at: http://www.quirksmode.org/dom/w3c_css.html
		 // doesn't work in older versions of Opera (< 9) due to lack of styleSheets support
		 if(!document.styleSheets) return;
		 if(document.getElementsByTagName("head").length == 0) return;
		 var stylesheet;
		 var mediaType;
		 if(document.styleSheets.length > 0)
		 {
		  for(i = 0; i<document.styleSheets.length; i++)
		  {
		   if(document.styleSheets[i].disabled) continue;
		   var media = document.styleSheets[i].media;
		   mediaType = typeof media;
		   // IE
		   if(mediaType == "string")
		   {
		    if(media == "" || media.indexOf("screen") != -1)
		    {
		     styleSheet = document.styleSheets[i];
		    }
		   }
		   else if(mediaType == "object")
		   {
		    if(media.mediaText == "" || media.mediaText.indexOf("screen") != -1)
		    {
		     styleSheet = document.styleSheets[i];
		    }
		   }
		   // stylesheet found, so break out of loop
		   if(typeof styleSheet != "undefined") break;
		  }
		 }
		 // if no style sheet is found
		 if(typeof styleSheet == "undefined")
		 {
		  // create a new style sheet
		  var styleSheetElement = document.createElement("style");
		  styleSheetElement.type = "text/css";
		  // add to <head>
		  document.getElementsByTagName("head")[0].appendChild(styleSheetElement);
		  // select it
		  for(i = 0; i<document.styleSheets.length; i++)
		  {
		   if(document.styleSheets[i].disabled) continue;
		   styleSheet = document.styleSheets[i];
		  }
		  // get media type
		  var media = styleSheet.media;
		  mediaType = typeof media;
		 }
		 // IE
		 if(mediaType == "string")
		 {
		  for(i = 0;i<styleSheet.rules.length;i++)
		  {
		   // if there is an existing rule set up, replace it
		   if(styleSheet.rules[i].selectorText.toLowerCase() == selector.toLowerCase())
		   {
		    styleSheet.rules[i].style.cssText = style;
		    return;
		   }
		  }
		  // or add a new rule
		  styleSheet.addRule(selector,style);
		 }
		 else if(mediaType == "object")
		 {
		  for(i = 0;i<styleSheet.cssRules.length;i++)
		  {
		   // if there is an existing rule set up, replace it
		   if(styleSheet.cssRules[i].selectorText.toLowerCase() == selector.toLowerCase())
		   {
		    styleSheet.cssRules[i].style.cssText = style;
		    return;
		   }
		  }
		  // or insert new rule
		  styleSheet.insertRule(selector + "{" + style + "}", styleSheet.cssRules.length);
		 }
		}
    
    function content()
		{
			
			jQuery.noConflict();
			if(typeof jQuery == "undefined")
				return;
			
			letsJQuery();
			
			// All your GM code must be inside this function
	    function letsJQuery() 
	    {
	    	//replace GM_set/getValue with local storage options; fixes the issues in FF4 and chrome;
				//courtesy of: http://devign.me/greasemonkey-gm_getvaluegm_setvalue-functions-for-google-chrome/
	    	//browser sniffing, ugh, i wish i didn't have to do this =c/
	    	var isFirefox = navigator.userAgent.indexOf("Firefox");	
	    	var isUnder4 = jQuery.browser.version.substr(0,3)=="1.9";

	    	var useLocal = !(isFirefox && isUnder4);
	    	if (useLocal) {
				
			    GM_getValue=function (key,def) {
			        return localStorage[key] || def;
			    };
			
			    GM_setValue=function (key,value) {
			        return localStorage[key]=value;
			    };
				}

	    	jQuery("#sub-tree-item-0-main ul > li").click(clearFilter);

				var filterJSON = GM_getValue("filterJSON_stringified");			
				var filterToggleStatus = GM_getValue("filterJSON_toggleStatus");			
				if(filterJSON==null)
				{
					filterJSON = new Object();
					gm_save("filterJSON_stringified",JSON.stringify(filterJSON));
				}
				else
					filterJSON = JSON.parse(filterJSON);

				if(filterToggleStatus==null)
				{
					filterToggleStatus = new Object();
					gm_save("filterJSON_toggleStatus",JSON.stringify(filterToggleStatus));
				}
				else
					filterToggleStatus = JSON.parse(filterToggleStatus);
					
				window.filterJSON=filterJSON;
				window.filterToggleStatus=filterToggleStatus;
					
		//alert(typeof jQuery(this));
		//		jQuery(window).data("filterJSON", filterJSON);
		//		jQuery(window).data("filterToggleStatus", filterToggleStatus);

				window.setInterval(checkFilter,250);
			}
						
			function clearFilter()
			{
				var $this = jQuery("#chrome-title").removeClass("filterApplied");
				jQuery("#id_allFilterDiv").remove();			
			}
			
			function resetFilter()
			{
				jQuery("#id_filterControl, #id_filterToggle").remove();
			}
			
			
			function checkFilter()
			{
				/*
				try
				{
					var $this = jQuery("#chrome-title");
					if(!$this.hasClass("filterApplied"))
						activateFilter();
				}catch(err){}
				*/
				
				var $this = jQuery("#chrome-title");
				if($this.hasClass("filterApplied"))
				{
					var buttonName=jQuery("#id_filterToggle").attr("name");
					if(getGroupName() != buttonName)
						clearFilter();	
				}
				else
					activateFilter();
					
			}
			/*
			function processSpace(e)
			{
					var $this = jQuery("#chrome-title");
					if($this.hasClass("filterApplied"))
					{
						if(getGroupName() == jQuery("#id_filterToggle").data("name"))
							window.setTimeout(processSpace,250);
						else
							clearFilter();	
					}
			}
			*/
			function activateFilter() //set up a filter for a specific feed or folder
			{
				try
				{
					resetFilter();
		
					if(jQuery("#no-entries-msg").length >= 1 || jQuery(".entry").length==0)
						return;
		    	
		    	var gName = getGroupName();
		    	var filterControls = getFilterControls();
					var vh = jQuery("#viewer-header-container").append(filterControls);	
		
					var toggleFilter = jQuery(getButton("id_filterToggle", "Toggle Filter", gName))
															.attr("name",gName)
															.click(toggleFilterFunc);
					
					jQuery("#viewer-top-controls").append(toggleFilter);
					
					runFiltering();
					
					//window.setTimeout(processSpace,250);
				}catch(err){}
			}
			
			function getButton(id, value,title)
			{
				return '<div id="'+id+'" title="'+title+'" class="goog-button goog-button-base unselectable goog-inline-block goog-button-float-left goog-button-tight" tabindex="0" role="wairole:button"><div class="goog-button-base-outer-box goog-inline-block"><div class="goog-button-base-inner-box goog-inline-block"><div class="goog-button-base-pos"><div class="goog-button-base-content"><div class="goog-button-body">'+value+'</div><div class="goog-menu-button-dropdown"></div></div></div></div></div></div>';
			}
			
			function toggleFilterFunc()
			{
				var filter = jQuery("#id_allFilterDiv").toggle();
				
				var filterToggleStatus = window.filterToggleStatus;//jQuery(window).data("filterToggleStatus");
				var groupName = getGroupName();
				filterToggleStatus[groupName] = filter.is(":visible");
				
				jQuery(".quickestFilterP").toggle(filterToggleStatus[groupName]);
				
				gm_save("filterJSON_toggleStatus", JSON.stringify(filterToggleStatus));
			}
			
			function supressFilterFunc()
			{
				if(jQuery(this).val()=='Temporarily Stop Filtering')
					jQuery(this).val("Resume Filtering");
				else	
					jQuery(this).val("Temporarily Stop Filtering");
				
				jQuery("#id_filterControl").toggleClass("supress");
				var entryList = jQuery("#entries");
				var uncheckedEntries = jQuery(".entry",entryList).removeClass("checked");
				jQuery(".quickFilterControl, .quickestFilterP").remove();
			}
			
			
			function runFiltering()
			{
				var gName=getGroupName();
				var filterName = jQuery("#id_filterControl").attr("groupName");
				
				if(filterName!=gName)//if the filter didn't load yet
					return;
				
				var entryList = jQuery("#entries");
				var uncheckedEntries = jQuery(".entry:not(.checked)",entryList);
				var filterStrings = new Array();
				
				if(uncheckedEntries.length>0)
					filterStrings = isNull(jQuery("#id_filterControl:not(.supress)").val(),"").split("\n");
				
				var showQuickestFilter = jQuery("#id_filterControl:visible").length>0;
				
				var selectWord = function(){jQuery(this).toggleClass("selectedWord"); return false;}
				
				uncheckedEntries.each(function(e){
	
						var $this = jQuery(this);
						
						var quickFilter = jQuery("<div class='quickFilterControl'>QF</div>").addClass("qf").click(quickFilterFunc);
						var quickestFilter = jQuery("<div class='quickFilterControl'>Q<sup>2</sup>F</div>").addClass("qf").click(quickestFilterFunc);
						
						var entryTitleLink = $this.find(".entry-title-link");
						var entryTitle = $this.find(".entry-title");
						var entryAuthor = $this.find(".entry-author");
						var entryBody = $this.find(".entry-body");
						
						var itemBody = "";
						if(entryBody.length>0)
							itemBody = $this.find(".item-body").text();
						else	
							itemBody = $this.find(".snippet").text();
							
						var entryTitleContent = "";
						if(entryTitle.length==0 || entryTitleLink.length==0)
							entryTitleContent = entryTitle.text();
						else	
							entryTitleContent = (entryTitleLink.clone()).find("*").remove().end().text();
						
						entryTitleContent = entryTitleContent
																			.replace(/\(/g," ")
																			.replace(/\)/g," ")
																			.replace(/\\/g," ")
																			.replace(/\//g," ")
																			.replace(/\-/g," ")
																			.replace(/\./g," ")
																			.replace(/\[/g," ")
																			.replace(/\]/g," ");
						
						if(entryTitleContent.length==0)
							return;
						//console.debug(entryTitleContent,$this);
						
						var OK = jQuery("<input type='button' value='Apply Quick Filter'>").click(addQuickestFilter);
						var q2Divs = jQuery("<p/>").addClass("quickestFilterP").dblclick(addQuickestFilter); 
						if(!showQuickestFilter)
							q2Divs.hide();
						
						var words = entryTitleContent.split(" ");
						for(var keyVar in words)
							if(words[keyVar].length>0)
								jQuery("<span/>").addClass("word").click(selectWord).append(words[keyVar]).appendTo(q2Divs);

						q2Divs.append("<br>Select words you want to filter by and then click ",OK);


						OK.data("words",q2Divs);
						q2Divs.data("words",q2Divs);
						entryBody.before(q2Divs);
							
						entryTitle
							.append(quickFilter.attr("entryTitleContent",entryTitleContent))
							.append(quickestFilter);
						
						quickestFilter.data("q2Divs",q2Divs);

						
						var found = false;
						for(var keyVar in filterStrings)
						{
							var thisString = filterStrings[keyVar];
							
							if(thisString.length==0)
								continue;
							
							var textToSearch = entryTitleContent;
							
							var isBody = thisString.indexOf("body(")==0 && thisString[thisString.length-1]==")";
							var isAuthor = thisString.indexOf("author(")==0 && thisString[thisString.length-1]==")";
							
							if(isBody)
							{
								thisString = thisString.substr(5,thisString.length-6);
								textToSearch = itemBody;
							}
							
							if(isAuthor)
							{
								thisString = thisString.substr(7,thisString.length-8);
								textToSearch = entryAuthor.text();
							}
						
							var isRegex = thisString[0]=="/" && (thisString[thisString.length-1]=="/"  || thisString[thisString.length-2]+thisString[thisString.length-1]=="/i");
							
							
							if(isRegex)
							{
								if(eval("textToSearch.search("+thisString+")") > -1)
								{
									found = true;
									break;		
								}
							}
							else
							{
								if(textToSearch.toLowerCase().indexOf(thisString.toLowerCase().trim()) > -1)
								{
									found = true;
									break;		
								}
							}
						}
						
						if(found)
							jQuery(this).hide();//.click()
						else
							jQuery(this).show();
						
						$this.addClass("checked");
					})
				
				if(uncheckedEntries.length>0)
					jQuery("#hiddenCounter").html( jQuery(".entry.checked:not(:visible)").length+"/"+jQuery(".entry.checked").length );
				window.setTimeout(runFiltering,250);
			}
			
			
			function quickFilterFunc()
			{
				var $this=jQuery(this);
				var content = $this.attr("entryTitleContent");
				
				var newFilter = prompt("Quick Filter Add",content);
				
				if(newFilter==null)
					return false;
				
				var filterControl = jQuery("#id_filterControl")
				filterControl.val(filterControl.val()+"\n"+newFilter).trigger("change");
					
				return false;
			}
			
			function quickestFilterFunc()
			{
				jQuery(this).data("q2Divs").toggle();
			}
			
			function addQuickestFilter()
			{
				var newFilter = "";
				var $this=jQuery(this);
				var words = $this.data("words");
				words.find(".selectedWord").each(function(){newFilter+=jQuery(this).text()+" ";});
				
				if(newFilter.length>0)
				{
					var filterControl = jQuery("#id_filterControl")
					filterControl.val(filterControl.val()+"\n"+newFilter).trigger("change");
				}	
				
				return false;
			}
			
			function getFilterControls()
			{
					jQuery("#chrome-title").addClass("filterApplied");
					var gName = getGroupName();
				
					var allControls = jQuery("<div id='id_allFilterDiv'></div>").hide();
					var c = jQuery("<textarea id='id_filterControl' rows=5 style='width:98%;background-color:#FFC;'></textarea>")
										.attr("groupName", gName)
										.change(saveData)
										.dblclick(saveData)
										.appendTo(allControls);
	
					var filterJSON = window.filterJSON;//jQuery(window).data("filterJSON");
					var filterToggleStatus = window.filterToggleStatus;//jQuery(window).data("filterToggleStatus");
					
					var savedValues = "";
					if(filterJSON)
						savedValues = filterJSON[gName];
					
					var toggled = isNull(filterToggleStatus[gName],false);
					
					var supressFilter = jQuery(getButton("id_temp_button", "Temporarily Stop Filtering (<span id='hiddenCounter'></span>)","Disable the current filter until you re-enabled it or switch feeds/folders.")).click(supressFilterFunc);
					
					var backupFunc = function(){
											var allItems = GM_getValue("filterJSON_stringified");
											//alert(allItems);
											
											var backupWindow = window.open();
											backupWindow.document.write(allItems);
											backupWindow.document.close();
										};
				
					var restoreFunc = function(){
											var allItems = prompt("Enter the JSON-formatted backup data, click OK, and then refresh. Caution: this will RESET all your data to this backup!");
											if(allItems!=null)
											{
												try
												{
													var parsedBackup = JSON.parse(allItems);
													var restoreStatus = "";
													
													for(var keyVar in parsedBackup)
													{
														var thisItem = parsedBackup[keyVar];
														if(thisItem!=null)
															restoreStatus += keyVar+": "+thisItem.split("\n").length+" items\n";
													}
												}
												catch(err)
												{
													alert("Improper data! Aborting restore!");
													return;
												}
												
												if(confirm("Does this look correct? Click OK to restore, cancel to abort.\n"+restoreStatus))
													GM_setValue("filterJSON_stringified",allItems);
											}
										};					
					
					var exportControl = jQuery("<u><span class='link'>Backup Filter JSON</span></u>").click(backupFunc);
					var importControl = jQuery("<u><span class='link'>Restore Filter JSON</span></u>").click(restoreFunc);
					//var importExportInput = jQuery("<div id='importExportInput'></div>").hide(); 

					var tip = jQuery("<span id='id_tip' style='color: #aaa;'></span>")
											.append("<p style='margin:0'>Tip: You can filter the body of the item by using <b>body(filter text)</b>, as well as only the author line by using <b>author(filter text)</b>. You can also use Regular Expressions if you use the <b>/regex filter/</b> format or <b>/case insensitive filter/i</b> format; this works with body()/author() as well. <a href='https://developer.mozilla.org/en/core_javascript_1.5_guide/regular_expressions' style='color:#aaa' target='_blank'>Learn More about Regular Expressions</a>");
											
					var options = jQuery("<table><tr><td valign='top' class='supressFilter'>"+
																					"<td valign='top' class='tip'>"+
																					 "<tr><td class='export' colspan='2'>"+
																					 "<tr><td class='exportTextarea' colspan='2'>"+
																					 "</table>");
					allControls.append(options);
					
					options.find(".supressFilter").append(supressFilter);
					options.find(".tip").append(tip);
					//TODO: finish backup code
					options.find(".export").append("Advanced users can also: ",exportControl," and ",importControl,". Use with extreme caution!");
					//options.find(".exportTextarea").append(importExportInput);

					if(savedValues)
						c.val(savedValues);
						
					allControls.toggle(toggled);
					
					return allControls;
			}
			
			function saveData()
			{
				debug("save data");
				var $this = jQuery(this);
				var val = $this.val();
				
				var filterJSON = window.filterJSON;//jQuery(window).data("filterJSON");
				
				var groupName1 = getGroupName();
				var groupName2 = $this.attr("groupName");
				
				if(groupName1!=groupName2)
				{
					debug("didn't match, clearing filters");
					clearFilter();
					return;
				}
				
				filterJSON[groupName2] = val;
				
				gm_save("filterJSON_stringified", JSON.stringify(filterJSON));
				
				var entryList = jQuery("#entries");
				var uncheckedEntries = jQuery(".entry",entryList).removeClass("checked");
				jQuery(".quickFilterControl, .quickestFilterP").remove();
			}
	
			function gm_save(key,val)
			{
				window.setTimeout(function() {GM_setValue(key,val);}, 10);	
			}
			
			function getGroupName()
			{
				var directLink = jQuery("#chrome-title a").clone().find("*").remove().end().text().trim();	
				var multiFolder = jQuery("#chrome-title").text().trim();	
				
				if(multiFolder.length>0)
					return multiFolder;
				else	
					return directLink;
			}
			
			function isNull(thisObject, defaultValue)
			{
				try
				{
					if(thisObject!=null)
						return thisObject;
				}catch(doesnExist){}
					
				return defaultValue;	
			}
			
			function debug(x)
			{
				//try{ console.debug(x); }catch(err){}
			}
		}