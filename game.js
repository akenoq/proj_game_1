"use strict";

window.onload = function() {
	let can = document.getElementById("can");
	let holst = can.getContext('2d');
	
	let label = document.getElementById("label");
	
	function drawFon() {
		holst.clearRect(0, 0, 800, 600);
		holst.fillStyle = '#0000FF';
		holst.fillRect(0, 0, 800, 600);
	}
	
	drawFon();
	
	let xx = 100;
	let yy = 200;
	
	function drawHero() {
		holst.fillStyle = '#00FF00';
		holst.fillRect(xx, yy, 50, 50);
	}
	
	drawHero();
	
	let w = false;
	let a = false;
	let s = false;
	let d = false;
	
	window.onkeydown = function(event) {
		let n = event.keyCode;
		console.log(n);
		if(n === 87) w = true;
		if(n === 83) s = true;
		if(n === 65) a = true;
		if(n === 68) d = true;
	}
	
	window.onkeyup = function(event) {
		let n = event.keyCode;
		if(n === 87) w = false;
		if(n === 83) s = false;
		if(n === 65) a = false;
		if(n === 68) d = false;
	}
	
	function moveHero() {
		if(d === true) xx += 5;
		if(a === true) xx -= 5;
		if(w === true) yy -= 5;
		if(s === true) yy += 5;
	}
	
	let arr = [];
	
	arr[0] = {xxx: 400, yyy: 300};
	arr[1] = {xxx: 500, yyy: 100};
	arr[2] = {xxx: 200, yyy: 350};
	
	function drawPoints() {
		let k = arr.length;
		for(let i = 0; i < k; i++) {
			holst.fillStyle = '#FFFFFF';
			holst.fillRect(arr[i].xxx, arr[i].yyy, 50, 50);
		}
	}
	
	let count = 0;
	label.innerHTML = count;
	
	function controlHit() {
		let k = arr.length;
		for(let i = 0; i < k; i++) {
			let sx = Math.abs(arr[i].xxx - xx);
			let sy = Math.abs(arr[i].yyy - yy);
			if(sx <= 50 && sy <= 50) {
				arr[i].xxx = 1000;
				count += 1;
				label.innerHTML = count;
			}
		}
	}
	
	let myInter = setInterval(function() {
		moveHero();
		controlHit();
		drawFon();
		drawHero();
		drawPoints();
	}, 50);
	
}













