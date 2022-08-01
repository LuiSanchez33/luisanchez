


/***************************************************************************
	MODIFYING THE CODE BELOW THIS WILL AFFECT THE CONSENT MANAGEMENT.
	  PLEASE CONTACT SUPPORT FOR ASSISTANCE IF YOU NEED TO MODIFY.
***************************************************************************/
(function consent_prompt(){
    var $accept = document.getElementById("consent_prompt_accept"),
        $decline = document.getElementById("consent_prompt_decline"),
        $modal = document.getElementById("__tealiumGDPRecModal");

    var acceptCallBack = function () {
        utag.gdpr.setConsentValue(1);
        /** Uncomment this line to allow for view event to be sent.
        setTimeout(function (){if (window.utag && window.utag.udoname || window.utag_data) {utag.view(window[window.utag && window.utag.udoname || "utag_data"]);}},0);**/
        closePrompt();
    };
    var declineCallBack = function () {
        utag.gdpr.setConsentValue(0);
        closePrompt();
    };
    var closePrompt = function(){
        $modal.style.display = "none";
    };
    if (document.addEventListener) {
        $accept.addEventListener("click", acceptCallBack, false);
        $decline.addEventListener("click", declineCallBack, false);
    } else if (document.attachEvent) {
        $accept.attachEvent("click", acceptCallBack);
        $decline.attachEvent("click", declineCallBack);
    } else {
        $accept.onclick = acceptCallBack;
        $decline.onclick = declineCallBack;
    }
}());