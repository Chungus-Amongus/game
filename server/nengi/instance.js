import nengi from 'nengi'
import { nengiConfig } from '../../shared/nengi/config.js'
import { PositionHaver } from '../../shared/nengi/entities.js'
export class GameInstance {
    constructor() {
        this.players = new Map()
        this.instance = new nengi.Instance(nengiConfig, { port: 8079 })
        this.instance.onConnect((client, clientData, callback) => {
            const entity = new PositionHaver()
            this.instance.addEntity(entity)
            client.entity = entity
            client.view = {
                x: 0,
                y: 0,
                halfWidth: 99999,
                halfHeight: 99999
            }
            callback({ accepted: true, text: 'Welcome!' })
        })
        this.instance.onDisconnect(client => {
            this.instance.removeEntity(client.entity)
        })
    }
    update(delta, tick, now) {
        let cmd = null
        while (cmd = this.instance.getNextCommand()) {
            const tick = cmd.tick
            const client = cmd.client
            for (let i = 0; i < cmd.commands.length; i++) {
                const command = cmd.commands[i]
                const entity = client.entity
                if (command.protocol.name === 'TestCommand') {
                    console.log('command', command)
                }
            }
        }
        this.instance.update()
    }
}