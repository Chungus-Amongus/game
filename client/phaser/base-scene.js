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

	}
	preload() {

	}
	create() {

	}
	update() {

	}
}