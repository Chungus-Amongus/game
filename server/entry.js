import '@geckos.io/phaser-on-nodejs' // this imports itself globally. meaning it assigns itself to a global variable and then you can use it anywhere
import Phaser from 'phaser' // phaser imports itself globally. meaning it sets global.Phaser = itself. so only need to import it in the index and use it anywhere
import "./nengi/nengi.js"
import "./phaser/phaser.js"