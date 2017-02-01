
// Uses the HTML value to find the translated equivalent, and then replaces the html with the translation
function ouTranslate() {
	
	// Find all the values to translate
	var matches = document.querySelectorAll("[data-translate]");
	
	// If the body contains, cymraeg flag we should do the welsh translation
	var welshTranslation = (document.body.className.indexOf("cymraeg") >= 0) ? true : false;
		
	for (i = 0; i < matches.length; i++) {
		// Remove the warning if its there
		match = ouExistingText(matches[i]);
		var translateObject = { originalText:match, translatedText:"", warning:false };
		// If we have a match, translate it
		if (ouTranslateText(translateObject)) {
			// Either we need to display this tranlation, or ouTranslateText flagged that we need to display a warning
			if (welshTranslation == true || !isLive() && translateObject.warning == true) {
				// If we are definitely tranlating, or we arent in live display the text
				ouReplaceText(matches[i], translateObject.translatedText);
			}
		}
	}
}

// Translates a bit of text. If no translation exists, a warning is added and returned as the translation value
function ouTranslateText(translateObject) {
    
	var warningMessage = " (missing welsh traslation)";
	translateObject.originalText = translateObject.originalText.replace(warningMessage, "");
	var textKey = translateObject.originalText.replace(/<[^>]+>/g, '').replace("&nbsp;", '').trim();
	translateObject.translatedText = translateObject.originalText.replace(textKey, _translations[textKey]);
	
	if ((textKey in _translations)) {
		return true;
	} else {
	    if (!isLive()) { // Otherwise flag that we were asked to translate something with no translation (but not on live)
			translateObject.translatedText = translateObject.originalText + warningMessage;
			translateObject.warning = true;
			return true;
		} else {
			translateObject.translatedText = translateObject.originalText;
			return false;
		}
	}
	
	return false;
}

function ouExistingText(ele) {
	if (ele.nodeName == 'INPUT') {
		return ele.getAttribute("placeholder").trim();
	}
	else {
	    return ele.innerHTML.trim();
	}
}

function ouReplaceText (ele, text) {
	if (ele.nodeName == 'INPUT') {
		ele.setAttribute("placeholder", text);
	}
	else {
		ele.innerHTML = text;
	}
}


if (typeof String.prototype.trim !== 'function') {
    String.prototype.trim = function () {
        if (this != null) {
            return this.replace(/^\s+|\s+$/g, '');
        }
        return this;
    }
}

// Start translation code after page is loaded
window.addEventListener ? window.addEventListener("load",ouTranslate,false) : window.attachEvent && window.attachEvent("onload",ouTranslate);


// Translations follow.
var _translations = {
	"The Open University": "Y Brifysgol Agored",
	'<i class="int-icon int-icon-arrow-circle-down">&nbsp;</i> Skip to content': '<i class="int-icon int-icon-arrow-circle-down">&nbsp;</i> Ymlaen i’r cynnwys',
	'<I class="int-icon int-icon-arrow-circle-down">&nbsp;</I>Skip to content': '<i class="int-icon int-icon-arrow-circle-down">&nbsp;</i> Ymlaen i’r cynnwys', // IE8 markup format
	"Skip to content": "Ymlaen i’r cynnwys",
	"Sign in": "Mewngofnodi",
	"Sign out": "Allgofnodi",
	"My Account": "Fy nghyfrif",
	"StudentHome": "HafanMyfyrwyr",
	"TutorHome": "HafanTiwtoriaid",
	"IntranetHome": "HafanMewnrwyd",
	"Contact the OU": "Cysylltu &acirc;'r OU",
	"Contact us": "Cysylltu &acirc; ni",
	"Accessibility": "Hygyrchedd",
	"Search the OU": "Chwilio’r OU",
	"Jobs": "Swyddi",
	"Conditions of use": "Amodau defnyddio",
	"Privacy and cookies": "Preifatrwydd a chwcis",
	"Modern Slavery Act": "Deddf Gaethwasiaeth Fodern",
	"Copyright": "Hawlfraint",
	"All rights reserved. The Open University is incorporated by Royal Charter (RC 000391), an exempt charity in England &amp; Wales and a charity registered in Scotland (SC 038302). The Open University is authorised and regulated by the Financial Conduct Authority.": 
		"Cedwir pob hawl. Mae'r Brifysgol Agored yn gorfforedig drwy Siarter Brenhinol (RC000391), yn elusen a eithrir yng Nghymru a Lloegr ac yn elusen gofrestredig yn yr Alban (SC038302). Awdurdodir a rheoleiddir Y Brifysgol Agored gan yr Awdurdod Ymddygiad Ariannol."
};