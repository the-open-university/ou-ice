// Digital Analytix (Comscore) tracking code
// May 2011 - Steve Bannister (c) Open University
// Last amended 28 October 2011 (SB)
//
// LIVE IMPLEMENTATION MUST BE MINIFIED


var ou_ca_pub = ["www", "www3", "www2", "www8", "css2", "css3", "msds", "search", "students", "stem", "fass", "wels", "business-school", "law-school"];
var ou_ca_med = ["openlearn", "labspace", "podcast"];
var ou_ca_vle = ["learn", "learn0", "learn1", "learn2", "learn3", "learn4"];
var ou_ca_int = ["intranet", "intranet6", "intranet-gw", "share", "intranet7", "intranet8"];
// ACCT tracking
var ou_ca_test = ["msds-acct", "www3-acct", "css2-acct", "csintra1", "learnacct", "learn2acct", "learn3acct", "learn4acct", "www-acct", "www8-acct", "www2-acct", "exa-acct", "www-pf-acct"];
ou_ca_test = ou_ca_test.concat(["stem-acct", "fass-acct", "wels-acct", "business-school-acct", "law-school-acct"]);
// TEST tracking
ou_ca_test = ou_ca_test.concat(["gaffer", "cms-test", "cms-app-test", "cms-app-trng", "exa-test", "search-test", "csr-pizza14-tst"]);
// DEV tracking
ou_ca_test = ou_ca_test.concat(["stem-dev", "fass-dev", "wels-dev", "business-school-dev", "law-school-dev", "localhost-dev"]);

var ou_tracked_domains = ["//openlearn", "//labspace", "//search", "//fass", "//wels", "//stem", "//business-school", "//law-school", "//localhost-dev"];

var ou_pm_page = ["1a/o1aprospchoice.asp"];
var ou_pm_var = ["catcode"];
var ou_tracked = 0;
var ou_sitename, ou_pagename = "", ou_nsbaseurl = "";
var ou_firsttime_only = 0;		// Temp, to stop event tracking from using new-world tracking

function ou_sitestat()
{
	// Don't execute if body class of ou-noauto-track present
	if (document.body)
	{
		if (document.body.className.indexOf("ou-noauto-track") >= 0) return;
	}

	ou_sitestat_manual("");
}

function ou_sitestat_manual(pg)
{
	// Ensure tracking is only run once
	if (ou_tracked != 0) return;
	ou_tracked = 1;

	// Get page URL (lowercase) into 'l'
	var l = location.protocol + '//' + location.host + location.pathname;
	//l="http://www.open.edu/itunes/";
	//alert(l);
	l=l.toLowerCase();

	// Get content area, and quit if we're not on a server we wish to track
	var ca = ou_getcontentarea(l);
    if (ca == 0) return;

	// Work out the sitename
	ou_sitename = "";
	if (ca == "intranet" || ca == "test-ou")
		ou_sitename = ca;
	else
		ou_sitename = ca + ou_getsitename();

	// Find first slash, separating domain from path
	var i=l.indexOf("/", 8);
	if (i < 0)
	{	// Should always be a slash there, but in this case there isn't so add one...
		l += "/";
		i=l.indexOf("/", 8);
	}

	if (pg == "")
	{
		// Clean up the path
		pg = ou_cleanpath(i, l);

		// Add appropriate suffix
		if (pg.length > 1)
		{
			i = pg.lastIndexOf('/');
			if (i == pg.length-1)
				pg += "page";
			else
			{
				j = pg.lastIndexOf('.');
				if (j > i) pg = pg.substr(0,j);
				pg += ".page";
			}
		}

		while (pg.indexOf("/") >= 0) pg = pg.replace("/", ".");
		while (pg.indexOf("..") >= 0) pg = pg.replace("..", ".");
		if (pg.indexOf(".index.page") >= 0) pg = pg.replace(".index.page", ".page");

		if (pg.charAt(0)=='.') pg = pg.substr(1);

		if (pg.length == 0) pg = "home.page";
	}

	ou_pagename = pg;

	pg = ou_usertype(pg);
	pg = ou_spclparams(pg, l);
	pg = ou_sitestat_retrieve_experiments(pg);

	ou_tracked_domains.forEach(function(item) {
		if (l.indexOf(item) > 0) {
			pg = l.substring(l.indexOf('//')+2, l.indexOf('.')+1) + pg;
		}
	});
	ou_sitestat_submit(pg);

	if (typeof window.ns_p != 'undefined') ns_pixelUrl=ns_p.src;
}

function ou_sitestat_retrieve_experiments(pg) {

    //  Events for all experiments and all trackers
    if (typeof window['optimizely'] != 'undefined') {

        var activeExperiments = window['optimizely'].activeExperiments;
        var experimentArray = [];
        var variationArray = [];
        activeLength = activeExperiments.length;

        if (activeLength && activeLength > 0) {
            var index, experiments = window['optimizely'].data.experiments,
                variationIdsMap = window['optimizely'].variationIdsMap,
                variationNamesMap = window['optimizely'].variationNamesMap;

            for (index = 0; index < activeLength; index++) {

                // Pull information for each active Experiment running on the page
                var experiment, experimentId, variation;
                experimentId = activeExperiments[index];

                experiment = activeExperiments[index] + "|" + experiments[experimentId].name;
                variation = variationIdsMap[experimentId] + "|" + variationNamesMap[experimentId];

                // Dump it in an array so we can easily add it to a url
                experimentArray.push(experiment);
                variationArray.push (variation);
            }
        }

        // If we found one or more experiments add it to the url
        if (experimentArray.length > 0) {
            pg += "&ou_exp_id=" + encodeURIComponent(experimentArray.join(","));
        }

        // If we found one or more variations add it to the url
        if (variationArray.length > 0) {
            pg += "&ou_var_id=" + encodeURIComponent(variationArray.join(","));
        }
    }

    return pg;
}

function ou_sitestat_submit(pg)
{
	if (ou_sitename == undefined) return;
	if (ou_firsttime_only == 1) return;

	ou_nsbaseurl = "http" + (document.location.href.charAt(4)=='s'?'s://sb':'://b') + ".scorecardresearch.com/";
	udm_(ou_nsbaseurl + "b?c1=2&c2=14872310&name=" + pg + "&ns_site=" + ou_sitename);
	ou_firsttime_only = 1;
}

function ou_cleanpath(i, l)
{
	var pg = "";
	var b = 0;
	var c;

	for( ; i < l.length ; i++)
	{
		c = l.charAt(i);
		if (c == '(')
		{
			b = 1;
			continue;
		}
		if (b == 1)
		{
			if (c == ')') b = 0;
			continue;
		}
		if (c == '?' || c == '#') break;		// Stop processing here
		if (c == '/' || c == '\\') c = '/';
		if (c == '_') c = '-';
		if ((c >= 'a' && c <= 'z') || (c >= '0' && c <= '9') || c == '-' || c == '.' || c == '/') pg += c;
	}

	return pg;
}

function ou_getcontentarea(l)
{
	// Special case for test openlearn
	if (l.indexOf("www-acct.open.edu/openlearn") >= 0) return "test-ou";

	// Special case for openlearn, check for /openlearn before checking hostname
	if (l.indexOf(".open.ac.uk/openlearn/") > 0 || l.indexOf("open.edu/openlearn/") > 0) return "openmedia";

	// Special case for openlearnworks, check for /openlearnworks before checking hostname
	if (l.indexOf(".open.edu/openlearnworks") > 0) return "openmedia";

	// Special case for itunes, check for /itunes before checking hostname
	if (l.indexOf(".open.edu/itunes") > 0) return "openmedia";

	// Special case for open.edu
	if (l.indexOf("open.edu") > 0) return "public";

    // Special case for globaldirect/isw/openuniversity.edu
	if (l.indexOf(".openuniversity.edu") > 0) return "global";

	// Special case for marketing
	if (l.indexOf("www.open-university.co.uk") >= 0) return "marketing-ext";

	// Special cases for marketing test
	if (l.indexOf("www-dev.open-university.co.uk") >= 0 || l.indexOf("www-acct.open-university.co.uk") >= 0) return "test-ou";

	// Check we're in the .open.ac.uk domain
	if (l.indexOf(".open.ac.uk") < 0) return 0;

	// Extract hostname into 'd'
	var i = l.indexOf("//");
	if (i < 0) return 0;
	i += 2;
	var j = l.indexOf(".", i);
	if (j < 0) return 0;
	var d = l.substr(i,j-i);

	// Check for 'public' content area
	for (i=0 ; i < ou_ca_pub.length ; i++)
	{
		if (ou_ca_pub[i] == d) return "public";
	}

	// Check for 'openmedia' content area
	for (i=0 ; i < ou_ca_med.length ; i++)
	{
		if (ou_ca_med[i] == d) return "openmedia";
	}

	// Check for 'vle' content area
	for (i=0 ; i < ou_ca_vle.length ; i++)
	{
		if (ou_ca_vle[i] == d) return "vle";
	}

	// Check for 'intranet' content area
	for (i=0 ; i < ou_ca_int.length ; i++)
	{
		if (ou_ca_int[i] == d) return "intranet";
	}

	// Check for 'test-ou' content area
	for (i=0 ; i < ou_ca_test.length ; i++)
	{
		if (ou_ca_test[i] == d) return "test-ou";
	}

	return 0;
}

function ou_getsitename()
{
	// Is this user signed-in?
	var c = document.cookie + ";";
	var s = c.indexOf("SAMS2session=");

	// If not, we need to check on IP
	if (s < 0)
	{
		if (typeof(ouclientip) != "undefined")
			return ou_getsitename_ip(ouclientip);		// IP has been set by server, so use that
		else
			return ou_getsitename_ajax();	// Find IP using AJAX
	}

	// User is signed-in, extract the SAMS2session cookie value
	var e = c.indexOf(";", s);
	var t = c.substr(s, e-s);

	// Is user staff or tutor?
	if (t.indexOf("samsStaffID") > 0 || t.indexOf("samsTutorID") > 0) return "-int";

	// They're external then...
	return "-ext";
}

function ou_getsitename_ip(ip)
{
	// Netscaler, shouldn't get this, but just in case assume external...
	if (ip == "137.108.140.184") return "-ext";

	// OU
	if (ip.indexOf("137.108.") == 0) return "-int";

	// OU
	if (ip.indexOf("194.66.") == 0)
	{
		var n = parseInt(ip.substr(7));
		if ((n >= 128 && n <= 140) || n == 142 || n == 143 || n == 149) return "-int";
	}

	// BBC (OU)
	if (ip == "132.185.144.120" || ip == "132.185.144.122" || ip == "132.185.240.120") return "-int";

	return "-ext";
}

function ou_getsitename_ajax()
{
	// Initialise our HTTP request object
	var hr = null;
	try
	{
		if (window.XMLHttpRequest)
			hr = new XMLHttpRequest();
		else
		{
			if (window.ActiveXObject)
			{
				try
				{
					hr = new ActiveXObject("Msxml2.XMLHTTP");
				}
				catch(e)
				{
					hr = new ActiveXObject("Microsoft.XMLHTTP");
				}
			}
		}
	}
	catch(e) {}

	// This browser doesn't support AJAX, assume it's external
	if (hr == null) return "-ext";

	// Send request synchronously
	try
	{
		hr.open("GET", "/includes/ip.shtm", true, null, null);
		hr.send();
	}
	catch(e)
	{
		return "-ext";
	}

	// At this point we're now waiting for the server to get back to us

	// Check if response was null, and if so assume external
	if (hr.responseText == null) return "-ext";

	// Response should be in format ||*nnn.nnn.nnn.nnn*|*nnn.nnn.nnn.nnn*||
	// First IP address is direct address, but often this will be Netscaler address
	// Second IP address is X_FORWARDED_FOR, set by Netscaler (which is the one to use if both exist)

	// Validate response...
	var x = hr.responseText.indexOf("||*");
	var y = hr.responseText.indexOf("*|*");
	var z = hr.responseText.indexOf("*||");
	if (x != 0 || y < 0 || z < y) return "-ext";	// error, assume external

	// Extract and validate second IP address
	var ip = hr.responseText.substr(y+3, z-y-3);
	if (ou_validate_ip(ip) == true) return ou_getsitename_ip(ip);

	// Extract and validate first IP address
	ip = hr.responseText.substr(3, y-3);
	if (ou_validate_ip(ip) == true) return ou_getsitename_ip(ip);

	// No valid IP, just assume external then
	return "-ext";
}

function ou_validate_ip(ip)
{
	if (ip.length < 7 || ip.length > 15) return false;
	x = ip.indexOf(".");
	if (x < 1 || x > 3) return false;
	y = ip.indexOf(".", x+1);
	if (y-x < 2 || y-x > 4) return false;
	x = ip.indexOf(".", y+1);
	if (x-y < 2 || x-y > 4) return false;
	return true;
}

function ou_spclparams(pg, url)
{
	var i, p;

	for (p=0 ; p < ou_pm_page.length ; p++)
	{
		if (url.indexOf(ou_pm_page[p]) > 0)
		{
			i = url.indexOf(ou_pm_var[p] + "=");
			if (i > 0)
			{
				p = url.substr(i+ou_pm_var[p].length+1);
				i = p.indexOf('&');
				if (i > 0) p = p.substr(0, i);
				p = ou_cleanpath(0, p);
				i = pg.lastIndexOf('.');
				return pg.substr(0, i+1) + p + pg.substr(i);
			}
		}
	}

	return pg;
}

function ou_usertype(pg)
{
	// Get value of SAMS2session cookie
	var ck2 = document.cookie + ";";
	var i = ck2.indexOf("SAMS2session=");
	if (i < 0) return pg;
	i += 13;
	var ck = ck2.substr(i, ck2.indexOf(";", i)-i) + "&";

	// Find user values...
	var types = "";

	var x = ou_getusertype(ck, "samsStudentPI=");
	if (x != null)
	{
		var prospect = 0;
		// We need to further check if the user is a prospect by checking OUPERSIST
		i = ck2.indexOf("OUPERSIST=");
		if (i >= 0)
		{
			i += 10;
			var ouper = ck2.substr(i, ck2.indexOf(";", i)-i) + "&";
			i = ouper.indexOf("CustomerState=");
			if (i > 0)
			{
				i += 14;
				ouper = ouper.substr(i, ouper.indexOf("&", i)-i);
				if (ouper == "Prospect")
				{
					pg += "&ou_prospect_id=" + x;
					types = "prospect-formal";
					prospect = 1;
				}
				if (ouper == "Informal Prospect")
				{
					pg += "&ou_prospect_id=" + x;
					types = "prospect-informal";
					prospect = 1;
				}
			}
		}

		if (prospect == 0)
		{
			pg += "&ou_student_id=" + x;
			types = "student";
		}
	}

	x = ou_getusertype(ck, "samsStaffID=");
	if (x != null)
	{
		pg += "&ou_staff_id=" + x;
		if (types.length > 0) types += ",";
		types += "staff";
	}

	x = ou_getusertype(ck, "samsTutorID=");
	if (x != null)
	{
		pg += "&ou_tutor_id=" + x;
		if (types.length > 0) types += ",";
		types += "tutor";
	}

	x = ou_getusertype(ck, "samsSelfRegID=");
	if (x != null)
	{
		pg += "&ou_selfreg_id=" + x;
		if (types.length > 0) types += ",";
		types += "self-registered";
	}

	x = ou_getusertype(ck, "samsCorporateID=");
	if (x != null)
	{
		pg += "&ou_corporate_id=" + x;
		if (types.length > 0) types += ",";
		types += "corporate";
	}

	x = ou_getusertype(ck, "samsVisitorID=");
	if (x != null)
	{
		pg += "&ou_special_access_id=" + x;
		if (types.length > 0) types += ",";
		types += "special-access";
	}

	if (types.length == 0)
	{
		pg += "&ou_unknown_id=1";
		types = "unknown";
	}

	pg += "&ou_visitor_types=" + types;

	return pg;
}

function ou_getusertype(ck, t)
{
	var x1 = ck.indexOf(t);
	if (x1 <= 0) return null;
	x1 += t.length;
	return ck.substr(x1, ck.indexOf("&", x1) - x1);
}

function ouClickEvent(obj, lb)
{
    // If we got here before tracking was implemented, set up tracking
    if (ou_tracked == 0)
        ou_sitestat();

    // Check whether we are allowed to track here.
	if (ou_nsbaseurl == "" || ou_pagename == "") return;

	var url=ou_nsbaseurl + "p?c1=22&c2=14872310&name=" + ou_pagename + ".click";

	url += "&" + lb;

	if (lb.indexOf("ns_site=") < 0) url += "&ns_site=" + ou_sitename;

	ns_pixelUrl = undefined;

	ns_onclick(obj, '', url, 'hidden');
}

// Begin comScore Inline Tag 1.1111.15
function udm_(a){
var b="comScore=",c=document,d=c.cookie,e="",f="indexOf",g="substring",h="length",i=2048,j,k="&ns_",l="&",m,n,o,p,q=window,r=q.encodeURIComponent||escape;
if(d[f](b)+1)for(o=0,n=d.split(";"),p=n[h];o<p;o++)m=n[o][f](b),m+1&&(e=l+unescape(n[o][g](m+b[h])));
a+=k+"_t="+ +(new Date)+k+"c="+(c.characterSet||c.defaultCharset||"")+"&c8="+r(c.title)+e+"&c7="+r(c.URL)+"&c9="+r(c.referrer),a[h]>i&&a[f](l)>0&&(j=a[g](0,i-8).lastIndexOf(l),a=(a[g](0,j)+k+"cut="+r(a[g](j+1)))[g](0,i)),c.images?(m=new Image,q.ns_p||(ns_p=m),m.src=a):c.write("<","p","><",'img src="',a,'" height="1" width="1" alt="*"',"><","/p",">");
}
// End comScore Inline Tag 1.1111.15

// Begin comScore OnClick v1.1.1 code (c) 2004-2009 Copyright Nedstat B.V. All rights reserved
function ns_onclick(i,b,c,h,j){
var e="";
if(typeof ns_pixelUrl=="string"){e=ns_pixelUrl.substring(0,ns_pixelUrl.indexOf("?")+1)}
e+=c;
e+="&ns_type="+h+ "&ns_action=view";
e+="&ns__t="+(new Date()).getTime();
if(!b){b=i.href}
var d=document.referrer;
if(d.lastIndexOf("/")==d.length-1){d=d.substring(d.lastIndexOf("/"),0)}
if(d.length>0){e+="&amp;ns_referrer="+escape(d)}j=j||"";
var f=(i&&i.target&&i.target!="")?(i.target.substring(0,1)=="_")?i.target.substring(1):i.target:"self";
var g=new Image();
if(f&&b){if(window[f]){window.ns_softclick_timer=function(k,a){return function(){if(window.ns_softclick_timeout){window.clearTimeout(window.ns_softclick_timeout)}g.onload=g.onerror=function(){return};
window[((window[k])?k:"self")].location.href=a}}(f,b);
ns_softclick_timeout=window.setTimeout("ns_softclick_timer()",5000);
g.onload=g.onerror=window.ns_softclick_timer} else{window.open(b,f,j)}}g.src=e;
return false}
// End comScore OnClick v1.1.1 code








var ouinitdone=false;
var ousrchclk=0;

function ou_init()
{
	// Some legacy sites will call this function twice. Make sure we bail if we have already run
	if (ouinitdone) return;
	ouinitdone=true;

	// Make sure there is a sign in area to work on
	if (navigator.appName == "Netscape" && parseFloat(navigator.appVersion) < 5) return;


	// Replace the copyright year with the current year.
	var today = new Date();
	if (document.getElementById("ou-copyright-year") != null)
	    document.getElementById("ou-copyright-year").innerHTML = today.getFullYear();

    // Add the current FCA message
	loadFooterTextAsync();

	// Listen out for requests to toggle the mobile menu
	addCompatibleListener(document.getElementById("ou-mobile-menu-toggle"), "click", toggleMobileMenu);

	// Make sure there is a sign in area to work on before we start on the cookies
	if (document.getElementById("ou-signin1") == null) return;

	// Listen out for requests to toggle the student footer elements
	addStudentFooterListeners();

    // listen for keypresses incase the search form cant be added to the DOM
	hookSearchBox();

	// Force the page to consider the current screen size
	onResizeEvent();

	cookies = document.cookie + ";";

	// Replace the sign in link
	samsSessionCookie = cookies.indexOf("SAMS2session=");
	if (samsSessionCookie < 0)
	{
		ele = document.getElementById("ou-signin2");
		ele.href=ele.href + "?nsh=2&URL=" + document.location.href;
		ou_setElementVisiblityByID("ou-identity", false);
		//if (ele_jlp) ele_jlp.style.marginBottom="1em";
		return;
	}
	// Remove the sams info from the rest of the cookie data
	samsSessionCookie += 13;
	i = cookies.indexOf(";", samsSessionCookie);
	samsCookieData = cookies.substr(samsSessionCookie, i-samsSessionCookie) + "&";

	// Change the sign in link to sign out.
	ou_setElementVisiblityByID("ou-signin1", false);
	ou_setElementVisiblityByID("ou-signout", true);



	// Display the users name
	nameCookie = cookies.indexOf("HS7BDF=");
	if (nameCookie >= 0)
	{
		nameCookie += 7;
		i = cookies.indexOf(";", nameCookie);
		Username = cookies.substr(nameCookie, i-nameCookie);
		i = Username.indexOf("\\");
		if (i >= 0) Username = Usernamesubstr(0,i);

		eleUserName = ou_GetElementsByClassName('ou-identity-name');
		for (var i = 0; i < eleUserName.length; ++i) {
			var item = eleUserName[i];
			item.innerHTML =  Username;
		}




		// Show the users PI if they are a student
		var userID = ou_getusertype(samsCookieData, "samsStudentPI=");
		if (userID != null) {
			eleUserID = document.getElementById("ou-identity-id");
			if (eleUserID) {
				// userID contains the ID plus the rest of the cookie, so truncate it to get just the ID
				eleUserID.innerHTML = "(" + userID + ")";
			}
		}
		else
		{
			ou_setElementVisiblityByID("ou-identity-id", false);
		}

	}

	// Use the DAx tracking to determine our user type
	userType = GetKeyValue(ou_usertype(""), "ou_visitor_types");

	// If DAx determined a prospect, use it
	if (userType.indexOf("prospect-formal") != -1 || userType.indexOf("prospect-informal") != -1) {
		ou_setElementVisiblityByID('ou-myaccount', true);
	}
	// Otherwise figure out what else to display
	else if (ou_usertype_check("samsStudentPI")) {
		ou_setElementVisiblityByID("ou-studenthome", true);
	} else if (ou_usertype_check("samsStaffID") || ou_usertype_check("samsTutorID")) {
		ou_setElementVisiblityByID("ou-studenthome", true);
		ou_setElementVisiblityByID("ou-intranethome", true);
		ou_setElementVisiblityByID("ou-tutorhome", true);
	}

}

function ou_add_portallink(ele_ul, t, u)
{
	ele_li = document.createElement("li");
	ele_a = document.createElement("a");
	ele_a.appendChild(document.createTextNode(t));
	ele_a.setAttribute("href", u);
	ele_li.appendChild(ele_a);
	ele_ul.appendChild(ele_li);
}

function ou_srchclk()
{
	if (ousrchclk == 0)
	{
		document.getElementById("ousrch").value="";
		ousrchclk=1;
	}
}

function ou_mobile()
{
	ou_killcookie("OUFULLSIZE");
	ou_setcookie("OUMOBILE","1");
	location.reload(true);
}

function ou_desktop()
{
	ou_killcookie("OUMOBILE");
	ou_setcookie("OUFULLSIZE","M");
	location.reload(true);
}

function ou_killcookie(n)
{
	document.cookie=n+"=;path=/;domain=.open.ac.uk;expires=Sun, 13 Dec 2009 12:01:01 GMT";
}

function ou_setcookie(n,v)
{
	document.cookie=n+"="+v+";path=/;domain=.open.ac.uk;expires=Thu, 31 Dec 2099 23:59:59 GMT";
}

function ou_usertype_check(inType)
{
	if (samsCookieData.indexOf(inType + "=") > 0)
		return true;

	return false;
}

// determines if a given id has a class
function ou_checkClass(ele, theClass) {
	if (ele != null)
	{
			var reg = new RegExp('(\\s|^)' + theClass + '(\\s|$)');
			var res = reg.test(ele.className);

			return res;
	}

	return false;
}

// Adds or removes a class from a node with the given elementID
function ou_setClass(ele, theClass, insert) {

	if (ele == null)
		return;

	if (insert == true) {
		ele.className += ele.className ? ' ' + theClass : theClass;
	}
	else {
		var reg = new RegExp('(\\s|^)' + theClass + '(\\s|$)');
		ele.className = ele.className.replace(reg, '');
	}
}

// Switches a given elements visibility
function ou_setElementVisiblityByID(elementID, visible) {
	ou_setClass(document.getElementById(elementID), 'ou-header-remove', !visible);
}


/* To support browsers older than IE 9 */
function ou_GetElementsByClassName(ClassName) {
	if (!document.getElementsByClassName) {
		var allT=document.getElementsByTagName('*'), allCN=[], i=0, a;
		while(a=allT[i++]) {
			a.className== ClassName ? allCN[allCN.length]=a : null;
		}
		return allCN;
	}
	else {
		return document.getElementsByClassName(ClassName);
	}
}

/* Get the data from a key/value pair string */
function GetKeyValue(SearchString, KeyName){
    var KeyValues = SearchString.split('&');
    for(var i = 0; i < KeyValues.length; i++){
        var KeyValuePair = KeyValues[i].split('=');
        if(KeyValuePair[0] == KeyName){
            return KeyValuePair[1];
        }
    }
}

function getEnv() {
    var a = document.createElement('a');
    a.href = window.location;

    if (a.hostname.indexOf('acct') != -1) {
        return 'acct';
    } else if (a.hostname.indexOf('dev') != -1) {
        return 'dev';
    } else if (a.hostname.indexOf('test') != -1 ||
		a.hostname.indexOf('-tst') != -1 ||
		a.hostname.indexOf('localhost') != -1) {
        return 'test';
    } else {
        return 'live';
    }
    return 'live';
}


function isLive() {
	return (getEnv() == 'live');
}

function changeLinks(){

	var env = getEnv();
	if (env != 'live'){
		var linkids = ['ou-logo','ou-ia-nav', 'ou-service-links', 'ou-org-footer'];
		var attr = 'href';
		var linkidsLength = linkids.length;
		for (var i=0; i<linkidsLength; i++) {
			var section = document.getElementById(linkids[i]);
			if (section) {
				var elems = section.getElementsByTagName('a');
				for (var j = 0; j < elems.length; j++){
					if (elems[j].getAttribute(attr).indexOf('.open.')) {
					    elems[j].setAttribute(attr, elems[j].getAttribute(attr).replace('.open.', '-' + env + '.open.'));
					}
				}
			}
		}
	}
}

function getOptimizelyID() {

    switch (getEnv()) {
        case 'dev':
            return '3592090286';
            break;
        case 'test':
            return '3588490685';
            break;
        case 'acct':
            return '3611720316';
            break;
        case 'live':
            return '221317523';
            break;
    }
}

function addStudentFooterListeners() {
	eleCollapsible = ou_GetElementsByClassName('ou-collapsible-footer');
	for (var i = 0; i < eleCollapsible.length; ++i) {
		var item = eleCollapsible[i];
		addCompatibleListener(item, "click", toggleFooterMenu);
		addCompatibleListener(item, "keypress", activateFooterMenu);
	}

	addCompatibleListener(window, "resize", onResizeEvent);
}

function addCompatibleListener(eleToggle, event, targetFunction) {
	eleToggle.addEventListener ? eleToggle.addEventListener(event, targetFunction) : eleToggle.attachEvent(event,targetFunction);
}

function toggleMobileMenu() {
	var className = "ou-toggle";

	// Hide the content
	ele = document.getElementById("ou-header-nav");
	ou_setClass(ele, className, !ou_checkClass(ele, className));

	// Switch the toggle icon
	ele = document.getElementById("ou-mobile-menu-toggle");
	ou_setClass(ele, className, !ou_checkClass(ele, className));

}

function toggleFooterMenu(e) {

	// Switch the toggle icon
	ele = this.children[1];
	state = !ou_checkClass(ele, "ou-toggle");
	ou_setClass(ele, "ou-toggle", state);
	this.setAttribute('aria-selected', state);
	this.setAttribute('aria-expanded', state);

	// Toggle the content
	ele = this.nextElementSibling;
	state = !ou_checkClass(ele, "ou-mobile-menu-toggle");
	ou_setClass(ele, "ou-mobile-menu-toggle", state);
	ele.setAttribute('aria-hidden', state);
}

function activateFooterMenu(e) {

		var keyCode = e.keyCode || e.which;
		if (keyCode == '13' || keyCode == '32') {
			this.click();
		}
}

function onResizeEvent() {

	eleCollapsible = ou_GetElementsByClassName('ou-collapsible-footer');

	var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

	var desiredIndex = (width > 767) ? -1 : 0;

	if (eleCollapsible[0] != null && eleCollapsible[0].tabIndex != desiredIndex) {
		for (var i = 0; i < eleCollapsible.length; ++i) {
			eleCollapsible[i].tabIndex = desiredIndex;
			if (desiredIndex == -1) {
				eleCollapsible[i].removeAttribute("aria-expanded");
				eleCollapsible[i].removeAttribute("aria-selected");
			}
			else {
				state = ou_checkClass(eleCollapsible[i], "ou-toggle");
				eleCollapsible[i].setAttribute("aria-expanded", state);
				eleCollapsible[i].setAttribute("aria-selected", state);
			}
		}
	}

}


function searchEnter(event) {
	if (event.which == 13 || event.keyCode == 13) {
            ou_search();
            return false;
        }
        return true;
}

function loadFooterTextAsync() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/ouheaders/ou-royal-fca-statement.txt', true);
    xhr.onreadystatechange = function () {
        if (this.readyState !== 4) return;
        if (this.status !== 200) return; // or whatever error handling you want

		// Translate the text if necessary, then display it
		var translateObject = { originalText:this.responseText, translatedText:this.responseText, warning:false };
		if (document.body.className.indexOf("cymraeg") >= 0) {
			ouTranslateText(translateObject);
		}
		// Either we need to display this tranlation, or ouTranslateText flagged that we need to display a warning
		document.getElementById('ou-footer-statement').innerHTML = translateObject.translatedText;
    };
    xhr.send();
}

// A way to post without a form being available (*cough*kentico*cough*)
function submitSearch(elementID) {

	var href = "";
	switch (elementID) {
		case "ou-header-search-international":
			href = 'http://www.openuniversity.edu/international/search/search/results?q=';
			break;
		case "ou-header-search-openlearn":
			href = 'http://search.open.ac.uk/openlearn/search/results?q='
			break;
		default:
			href = 'http://search.open.ac.uk/public/search/results?q='
			break;
	}
    var headerSearchVal = document.getElementById(elementID);
    if (href && headerSearchVal.value) {
        window.location.href =  href + headerSearchVal.value;
    }

    return false;

}

function hookSearchBox() {
    // Hook the key press events if we dont have a search form
    var oFormTest = document.getElementById("ou-search");
    if (oFormTest == null) {

		eleSearchBoxes = ou_GetElementsByClassName('ou-header-search');
		for (var i = 0; i < eleSearchBoxes.length; ++i) {
			var item = eleSearchBoxes[i];
			item.onkeypress = function (e) {
				if (!e) e = window.event;
				var keyCode = e.keyCode || e.which;
				if (keyCode == '13') {
					// Enter pressed

					// Stop this bubbling up to any parent forms and submitting them
					event.preventDefault ? event.preventDefault() : event.returnValue = false;
					submitSearch(this.id);
					return false;
				}
			}
		}

    }
}


function onSearchBoxInput(e) {
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13') {
        // Enter pressed
	var target = e.target || e.srcElement;

        // Stop this bubbling up to any parent forms and submitting them
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        submitSearch(target.id);
    }
}

function skipToContent(event) {
    var element = document.getElementById(location.hash.substring(1));
    if (element) {
        // If the target isnt a tabable item, use tabIndex to allow us to focus there.
        if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
            element.tabIndex = -1;
        }
        // Set the tab position to this item
        element.focus();
    }
}

window.addEventListener ? window.addEventListener("load", ou_init, false) : window.attachEvent && window.attachEvent("onload", ou_init);
window.addEventListener ? window.addEventListener("load", changeLinks, false) : window.attachEvent && window.attachEvent("onload", changeLinks);
window.addEventListener ? window.addEventListener("load", ou_sitestat, false) : window.attachEvent && window.attachEvent("onload", ou_sitestat);
window.addEventListener ? window.addEventListener("hashchange",skipToContent, false) : window.attachEvent && window.attachEvent("onhashchange", skipToContent);
