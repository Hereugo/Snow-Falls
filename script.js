// document.documentElement.requestFullscreen();
var H = 500;
var W = 700;
var canvas = document.getElementById("canvas")
	canvas.height = H
	canvas.width = W
var ctx = canvas.getContext('2d')

const gravity = 0.1

class Point{
	
	constructor(x , y) {
		this.x = x
		this.y = y
	}
}

class SnowFlake{

	constructor() {
		this.pos = new Point()
		this.pos.x = Math.floor(Math.random()*10000) % W
		this.pos.y = -20

		this.size= Math.random() * 10 + 0.2
		this.mass = Math.PI*this.size*this.size/4 * 0.025
		this.acc = Math.random()
		this.vel = 0
	}

	Update() {
		this.acc = gravity * this.mass
		this.vel += this.acc
		this.pos.y += this.vel
	}

	Draw() {
		ctx.beginPath()
		ctx.fillStyle = "white"
		ctx.arc(this.pos.x , this.pos.y , this.size/2 , 0 , 2*Math.PI)
		ctx.fill()
	}
}

var snow = new Array(1000)
for (let i=0 ; i<snow.length; i++) {
	snow[i] = new SnowFlake()
}


function len(a , b) {
	return Math.sqrt((a.x - b.x)*(a.x - b.x) + (a.y - b.y)*(a.y - b.y))
}
