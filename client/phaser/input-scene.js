// so for other scripts to listen to input stuff should we use events? (in events.js). every script can then listen for keyup/keydown events i guess? im not sure if this is the best way. think about it.
import { ActionMessage, WASDMessage } from "../../shared/nengi/commands"
import { BaseScene } from "./base-scene"
export class InputScene extends BaseScene {
	constructor() {
		super({ key: InputScene.name })
	}
	init() {
		this.input.keyboard.addCapture(`W,A,S,D,SPACE,UP,DOWN,LEFT,RIGHT`) // stops these keys from propagating up to the browser. for example the Space key would scroll down a page normally
		/*
		input event properties of interest:
		altKey: false,
		ctrlKey: false,
		shiftKey: false,
		*/
		// the down/up events only fire once, they are not on repeat. for checking on repeat, go to update() and check xKey.isDown, thats how we have the functionality of both repeating and non-repeating for different purposes
		// TODO: perhaps instead of passing each key's down/up event its own anonymous function, i should pass all keys the same function and handle it all there
		this.wKey = this.input.keyboard.addKey(`W`)
		this.wKey.on(`down`, function(event){
			console.log(event)
		})
		this.wKey.on(`up`, function(event){
			console.log(event)
		})
		this.aKey = this.input.keyboard.addKey(`A`)
		this.aKey.on(`down`, function(event){
			console.log(event)
		})
		this.aKey.on(`up`, function(event){
			console.log(event)
		})
		this.sKey = this.input.keyboard.addKey(`S`)
		this.sKey.on(`down`, function(event){
			console.log(event)
		})
		this.sKey.on(`up`, function(event){
			console.log(event)
		})
		this.dKey = this.input.keyboard.addKey(`D`)
		this.dKey.on(`down`, function(event){
			console.log(event)
		})
		this.dKey.on(`up`, function(event){
			console.log(event)
		})
	}
	preload() {

	}
	create() {
	}
	update() {
		console.log(this.aKey.isDown)
		// something they can only trigger every 1000ms
		if(this.input.keyboard.checkDown(this.aKey, 1000)){
			console.log(`timed keypress`)
		}
	}
}