import nengi from 'nengi'
import { TestCommand } from './commands.js'
import { PositionHaver } from './entities.js'
import { TestMessage } from './messages.js'

export const nengiConfig = {
    UPDATE_RATE: 20, 

    ID_BINARY_TYPE: nengi.UInt16,
    TYPE_BINARY_TYPE: nengi.UInt8, 

    ID_PROPERTY_NAME: 'nid',
    TYPE_PROPERTY_NAME: 'ntype', 

    USE_HISTORIAN: false,
    HISTORIAN_TICKS: 40,

    protocols: {
        entities: [
            ['PositionHaver', PositionHaver],
        ],
        localMessages: [],
        messages: [
            ['TestMessage', TestMessage],
        ],
        commands: [
            ['TestCommand', TestCommand]
        ],
        basics: []
    }
}