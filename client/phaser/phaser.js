import { BootScene } from './boot-scene';
import { InputScene } from './input-scene';
import { Scene1 } from './main-scene';
import { UIScene } from './ui-scene';

//* the official config with all possible options is seen here: https://photonstorm.github.io/phaser3-docs/Phaser.Types.Core.html#.GameConfig and also possibly here https://rexrainbow.github.io/phaser3-rex-notes/docs/site/game/
//* configuration examples can be seen here: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/game/#configuration
const phaserConfig = {
    type: Phaser.AUTO,
    title: "game title 123",
    version: '0.0.0',
    backgroundColor: "rgb(255,255,0)",
    autoFocus: false, //automatically call window.focus() when the game boots
    disableContextMenu: true,
    scene: [BootScene, InputScene, UIScene, Scene1],
    loader:{
        baseURL: '',
        path: '',
        enableParallel: true,
        maxParallelDownloads: 4,
        crossOrigin: undefined,
        responseType: '',
        async: true,
        user: '',
        password: '',
        timeout: 0
    },
    fps: {
        min: 10,
        target: 60,
        forceSetTimeOut: false,
        deltaHistory: 10
    },
    input: {
        gamepad: false, //default is false
        smoothFactor: 0, //mouse smoothing
    },
    render: {
        antialias: true,
        // antialiasGL: true,
        // desynchronized: false,
        // clearBeforeRender: true,
        // preserveDrawingBuffer: false,
        // premultipliedAlpha: true,
        // powerPreference: 'high-performance',
        // batchSize: 4096,
        // maxLights: 10,
        // maxTextures: -1,
        // mipmapFilter: 'LINEAR',
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