// ==UserScript==
// @name        Steam Flash Sale
// @namespace   com.natemara.flash-sale
// @description Quickly sell your steam items
// @include     /https?://(www\.)?steamcommunity\.com/market/.*/
// @version     3
// @grant       none
// ==/UserScript==

function getPrice() {
	var itemPrice = document.getElementById("iteminfo1_item_market_actions");
	if (itemPrice) {
		window.alert(itemPrice);
	}
}

setInterval(function() {
	getPrice();
}, 5000);
