import Phaser from 'phaser'
import { BootScene } from './boot-scene';

//* the official config with all possible options is seen here: https://photonstorm.github.io/phaser3-docs/Phaser.Types.Core.html#.GameConfig
//* configuration examples can be seen here: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/game/#configuration
const phaserConfig = {
    type: Phaser.AUTO,
    title: "game title 123",
    version: '0.0.0',
    backgroundColor: "rgb(255,255,0)",
    autoFocus: false, //automatically call window.focus() when the game boots
    disableContextMenu: true,
    scene: [BootScene],
    input: {
        gamepad: false, //default is false
        smoothFactor: 0, //mouse smoothing
    },
    render: {
        antialias: true,
        pixelArt: false, //it says this sets antialias and roundPixels to 'true', is that it? could do that manually
        roundPixels: false,
        powerPreference: 'high-performance',
    },
    scale: {
        width: 1920,
        height: 1080,
        zoom: 1,
        parent: 'phaserParent',
        expandParent: true,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        resizeInterval: 500,
        autoRound: true, //supposedly keeping this 'true' is some kind of performance boost according to this: https://photonstorm.github.io/phaser3-docs/Phaser.Core.Config.html
    },
    physics: {
        default: 'arcade',
        arcade: {
            fps: 60, //60 is the phaser default. pretty high
            gravity: { x: 0, y: 0 },
            debug: true,
        }
    },
}

class PhaserGame extends Phaser.Game {
    constructor(config) {
        super(config);
    }
}

window.addEventListener('load', () => {
    let game = new PhaserGame(phaserConfig)
})