import { BaseSprite } from "../shared/base-sprite"

export function ClientSprite(scene, x = 500, y = 500, texture) {
	BaseSprite.call(this, scene, x, y, texture, frame)
	scene.add.existing(this)
	scene.physics.add.existing(this)
	this.body.setSize(32, 32)
	this.setCollideWorldBounds(true)
	this.setFrame(0)
	this.scene = scene
	scene.events.on('update', this.update, this)
}