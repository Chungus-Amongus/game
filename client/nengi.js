import nengi from 'nengi'
import { TestCommand } from '../shared/nengi/commands'
import { nengiConfig } from '../shared/nengi/config'
export class GameClient {
	constructor() {
		this.client = new nengi.Client(nengiConfig, 100)
		this.client.onConnect(res => {
			console.log('onConnect response:', res)
		})
		this.client.onClose(() => {
			console.log('connection closed')
		})
		this.client.connect('ws://localhost:8079')
	}
	update(delta, tick, now) {
		// input
		const network = this.client.readNetwork()
		network.entities.forEach(snapshot => {
			snapshot.createEntities.forEach(entity => {
				console.log('create entity', entity)
			})
			snapshot.updateEntities.forEach(update => {
				console.log('update entity', update)
			})
			snapshot.deleteEntities.forEach(nid => {
				console.log('delete entity', nid)
			})
		})
		network.predictionErrors.forEach(predictionErrorFrame => {
			console.log('prediction error frame', predictionErrorFrame)
		})
		network.messages.forEach(message => {
			console.log('message', message)
		})
		network.localMessages.forEach(localMessage => {
			console.log('local message', localMessage)
		})
		// output
		// the only client-side game logic is to randomly send a test command
		// if (Math.random() > 0.95) {
		// 	this.client.addCommand(new TestCommand('hi this is a command from the client'))
		// }
		this.client.update()
	}
}
// this should be elsewhere idk exactly
window.onload = function() {
    console.log('window loaded')
    const gameClient = new GameClient()
    let tick = 0
    let previous = performance.now()
    const loop = function() {
        window.requestAnimationFrame(loop)
        const now = performance.now()
        const delta = (now - previous) / 1000
        previous = now
        tick++
        gameClient.update(delta, tick, now)
    }
    loop()
}