import Phaser from 'phaser'

export default class MainMenu extends Phaser.State {
  create () {
    this.music = this.add.audio('bgm')
    this.music.loop = true
    this.music.play()

    this.bg = this.add.tileSprite(0, 0, this.game.width, this.game.height, 'starfield')

    var text = this.add.text(this.game.width * 0.5, this.game.height * 0.5, 'Tap to Start!', {
      font: '42px Arial', fill: '#ffffff', align: 'center'
    })
    text.anchor.set(0.5)

    this.input.onDown.add(this.startGame, this)
  }

  update () {
    //  Do some nice funky main menu effect here
  }

  resize (width, height) {
    //  If the game container is resized this function will be called automatically.
    //  You can use it to align sprites that should be fixed in place and other responsive display things.
    this.bg.width = width
    this.bg.height = height
  }

  startGame () {
    this.music.stop()
    this.state.start('Game')
  }
}
