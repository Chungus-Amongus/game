export function ServerScene() {
	Phaser.Scene.call(this, ServerScene.name)
	this.tick = 0
}
ServerScene.prototype.init = function () {

}
ServerScene.prototype.create = function () {
	this.physics.world.setBounds(0, 0, 1920, 1080)
}
ServerScene.prototype.update = function () {
	this.tick++
}