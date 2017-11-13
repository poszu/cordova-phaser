import 'pixi'
import 'p2'
import Phaser from 'phaser'

import Boot from './states/Boot'
import Preloader from './states/Preloader'
import MainMenu from './states/MainMenu'
import TheGame from './states/TheGame'

document.addEventListener('deviceready', onDeviceReady, false)

class Game extends Phaser.Game {
  constructor () {
    super('100%', '100%', Phaser.AUTO)
    this.state.add('Boot', Boot)
    this.state.add('Preloader', Preloader)
    this.state.add('MainMenu', MainMenu)
    this.state.add('Game', TheGame)
  }
}

var game = null

function onDeviceReady () {
  // Now safe to use device APIs
  game = new Game()
  game.state.start('Boot')
}
