import { BaseScene } from "./base-scene"
export class Scene1 extends BaseScene {
	constructor() {
		super()
	}
	init() {

	}
	preload() {

	}
	create() {
		this.cursors = this.input.keyboard.createCursorKeys()
	}
	update() {
		let wasd = {
			w: this.cursors.up.isDown,
			a: this.cursors.left.isDown,
			s: this.cursors.down.isDown,
			d: this.cursors.right.isDown,
		}
	}
}