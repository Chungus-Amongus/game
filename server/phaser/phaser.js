import { ServerScene } from './server-scene.js';
let fps = 60
global.phaserOnNodeFPS = fps
let phaserConfig = {
    type: Phaser.HEADLESS,
    parent: 'phaser-game',
    width: 400,
    height: 300,
    banner: false,
    audio: false,
    scene: [ServerScene],
    fps: {
        target: fps
    },
    scale: {
        autoRound: true, //supposedly keeping this on 'true' is a possible performance boost, it says so here: https://photonstorm.github.io/phaser3-docs/Phaser.Core.Config.html
    },
    physics: {
        default: 'arcade',
        arcade: {
            fps: fps,
            gravity: { x: 0, y: 0 },
            // debug: true,
        }
    },
}
class PhaserGame extends Phaser.Game{
    constructor(config){
        super(config)
    }
}
export const game = new PhaserGame(phaserConfig);