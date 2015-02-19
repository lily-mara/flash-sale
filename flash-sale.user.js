// ==UserScript==
// @name        Steam Flash Sale
// @namespace   com.natemara.flash-sale
// @description Quickly sell your steam items
// @include     /https?://(www\.)?steamcommunity\.com/market/.*
// @version     2
// @grant       none
// ==/UserScript==

function getPrice() {
	var items = document.getElementById("iteminfo1_item_market_actions");
	alert(items);
}

setInterval(function() {
	getPrice();
	window.alert("hello");
}, 1000);
