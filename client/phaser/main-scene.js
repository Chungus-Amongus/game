import { BaseScene } from "./base-scene"

function Scene1() {
	BaseScene.call(this, { key: Scene1.name })
	this.cursors
}
Scene1.prototype.init = function () {

}
Scene1.prototype.preload = function () {

}
Scene1.prototype.create = function () {
	this.cursors = this.input.keyboard.createCursorKeys()
}
Scene1.prototype.update = function () {
	let wasd = {
		w: this.cursors.up.isDown,
		a: this.cursors.left.isDown,
		s: this.cursors.down.isDown,
		d: this.cursors.right.isDown,
	}
}