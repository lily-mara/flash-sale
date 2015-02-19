// ==UserScript==
// @name		Steam Flash Sale
// @namespace	com.natemara.flash-sale
// @description	Quickly sell your steam items
// @include		/https?://(www\.)?steamcommunity\.com/market/.*/
// @version		3
// @grant		none
// @require		http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.js
// ==/UserScript==

var $ = unsafeWindow.jQuery;
var itemPattern = /Starting at: $[0-9.]+/;

function getPrice() {
	var matches = document.documentElement.innerHTML.match(itemPattern);
	var itemPrice = $("iteminfo1_item_market_actions");
	console.log(itemPrice);
}

setInterval(function() {
	getPrice();
}, 5000);
