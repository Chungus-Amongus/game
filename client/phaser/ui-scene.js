import { BaseScene } from "./base-scene"
export class UIScene extends BaseScene {
	constructor() {
		super({ key: UIScene.name })
	}
	init() {

	}
	preload() {

	}
	create() {
	}
	update() {
		console.log(this.constructor.name)
	}
}