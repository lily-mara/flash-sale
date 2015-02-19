// ==UserScript==
// @name        Steam Flash Sale
// @namespace   com.natemara.flash-sale
// @description Quickly sell your steam items
// @include     /https?://(www\.)?steamcommunity\.com/market/.*/
// @version     3
// @grant       none
// ==/UserScript==

var itemPattern = /Starting at: $[0-9.]+/;

function getPrice() {
	var matches = document.documentElement.innerHTML.match(itemPattern);
	var itemPrice = document.getElementById("iteminfo1_item_market_actions");
	window.alert(matches);
}

setInterval(function() {
	getPrice();
}, 5000);
