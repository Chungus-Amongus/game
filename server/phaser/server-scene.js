import '@geckos.io/phaser-on-nodejs'
import Phaser from 'phaser';
export function ServerScene() {
	Phaser.Scene.call(this, ServerScene.name)
	this.tick = 0
	this.playersGroup = this.add.group() // you can add players to the group, and you can iterate over the group when you need to iterate over all players, etc
}
ServerScene.prototype.init = function () {

}
ServerScene.prototype.create = function () {
	this.physics.world.setBounds(0, 0, 1920, 1080)
}
ServerScene.prototype.update = function () {
	this.tick++
}