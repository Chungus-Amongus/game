import { BaseScene } from "./base-scene"
export class BootScene extends BaseScene {
	constructor() {
		// i was setting the key: BootScene.name, but now im not just because, maybe later
		super()
	}
	init() {

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

		this.player = this.physics.add.sprite(100, 450, `player`)
		this.player.setBounce(0)
		this.player.setCollideWorldBounds(true)
		this.physics.add.collider(this.player, this.platforms)
		this.cursors = this.input.keyboard.createCursorKeys()
	}
	update() {
		if (this.cursors.left.isDown) {
			this.player.setVelocityX(-160)
		}
		if (this.cursors.right.isDown) {
			this.player.setVelocityX(160)
		}
		if (this.cursors.up.isDown) {
			this.player.setVelocityY(-160)
		}
		if (this.cursors.down.isDown) {
			this.player.setVelocityY(160)
		}
	}
}