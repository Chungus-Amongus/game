import { BaseScene } from "./base-scene"
export class Scene1 extends BaseScene {
	constructor() {
		super({key:Scene1.name})
	}
	init() {

	}
	preload() {

	}
	create() {
		console.log(this.constructor.name)
	}
	update() {

	}
}