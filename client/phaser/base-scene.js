// this is the ancestor to all scenes. not to be used for anything other than inheriting from

// var config = {
// 	key: "",
// 	active: false,
// 	visible: true,
// 	pack: false,
// 	cameras: null,
// 	map: {},
// 	physics: {},
// 	loader: {},
// 	plugins: false,
// 	input: {}
// }
export class BaseScene extends Phaser.Scene {
	constructor(config) {
		super(config)
	}
	init() {
		this.events.on(Phaser.Scenes.Events.SHUTDOWN, function () {
			// we should apparently use this to clean up event emitters or whatever else needs done when the scene shuts down. im just putting this on the BaseScene for now as example but its possible it may have to be on other scenes
			// example of removing an event created by this scene: (pretend it is accessing events.js where we created our global custom event emitter)
			// events.off(`some-event-created-by-this-scene`, someFunctionIdk, this)
		})
	}
	preload() {

	}
	create() {

	}
	update() {

	}
}