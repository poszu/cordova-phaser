import Phaser from 'phaser'

export default class TheGame extends Phaser.State {
  preload () {
  }

  create () {
    console.log('game create')
    this.game.physics.startSystem(Phaser.Physics.ARCADE)

    // Add Hello World text to show it's working
    this.text = new Phaser.Text(
      this.game,
      this.game.world.centerX,
      this.game.world.centerY,
      'Hello World!',
      { font: '20px Arial', fill: '#ff0044', align: 'center' })
    this.text.anchor.set(0.5)

    this.game.add.tween(this.text.scale).to(
      {x: 3, y: 3},
      1000,
      Phaser.Easing.Cubic.InOut,
      true, 0, -1, true)

    this.game.add.existing(this.text)
  }

  update () {
  }

  render () {
    // this.game.debug.spriteInfo(this.text.getSprite(), 32, 32)
  }

  quitGame (pointer) {
    //  Here you should destroy anything you no longer need.
    //  Stop music, delete sprites, purge caches, free resources, all that good stuff.

    //  Then let's go back to the main menu.
    this.state.start('MainMenu')
  }
}
