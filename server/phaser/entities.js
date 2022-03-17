import { BaseSprite } from "../shared/base-sprite"

export function ServerSprite(scene, x = 500, y = 500) {
    BaseSprite.call(this, scene, x, y)
    scene.add.existing(this)
    scene.physics.add.existing(this)
    this.body.setSize(32, 32)
    this.setCollideWorldBounds(true)
    this.scene = scene
    scene.events.on('update', this.update, this)
}