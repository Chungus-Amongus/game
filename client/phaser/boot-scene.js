import { BaseScene } from "./base-scene"
import { InputScene } from "./input-scene"
export class BootScene extends BaseScene {
	constructor() {
		super({key: BootScene.name})
	}
	init() {
		this.scene.launch(InputScene.name)
	}
	preload() {
		this.load.image(`sky`, `../assets/sky.png`)
		this.load.image(`obstacle`, `../assets/brown.png`)
		this.load.image(`player`, `../assets/player.png`)
	}
	create() {
		this.add.image(0, 0, `sky`).setOrigin(0, 0)
		this.platforms = this.physics.add.staticGroup()
		this.platforms.create(400, 568, `obstacle`).setScale(1.5).refreshBody()
	}
	update() {
		// console.log(this.constructor.name)
	}
}