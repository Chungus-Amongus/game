import { ActionMessage, WASDMessage } from "../../shared/nengi/commands"
import { BaseScene } from "./base-scene"
export class InputScene extends BaseScene {
	constructor() {
		super({ key: InputScene.name })
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