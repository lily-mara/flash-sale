// ==UserScript==
// @name		Steam Flash Sale
// @namespace	com.natemara.flash-sale
// @description	Quickly sell your steam items
// @include		/https?://(www\.)?steamcommunity\.com/market/.*/
// @version		3
// @grant		none
// ==/UserScript==

var itemPattern = /Starting at: $[0-9.]+/;
var $;

// Add jQuery
(function(){
	if (typeof unsafeWindow.jQuery == 'undefined') {
		var GM_Head = document.getElementsByTagName('head')[0] || document.documentElement,
			GM_JQ = document.createElement('script');

		GM_JQ.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
		GM_JQ.type = 'text/javascript';
		GM_JQ.async = true;

		GM_Head.insertBefore(GM_JQ, GM_Head.firstChild);
	}
	GM_wait();
})();

// Check if jQuery's loaded
function GM_wait() {
	if (typeof unsafeWindow.jQuery == 'undefined') {
		window.setTimeout(GM_wait, 100);
	} else {
		$ = unsafeWindow.jQuery.noConflict(true);
		letsJQuery();
	}
}

// All your GM code must be inside this function
function letsJQuery() {
	var itemPrice = $("iteminfo1_item_market_actions");
	console.log(itemPrice);
}

function getPrice() {
	var matches = document.documentElement.innerHTML.match(itemPattern);
}

setInterval(function() {
	letsJQuery();
}, 5000);
