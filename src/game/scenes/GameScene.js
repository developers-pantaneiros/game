import { Scene } from 'phaser'
import sky from '@/game/assets/sky.png'
import ground from '@/game/assets/platform.png'
import star from '@/game/assets/star.png'
import bomb from '@/game/assets/bomb.png'
import dude from '@/game/assets/dude.png'

export default class GameScene extends Scene {
  constructor() {
    super({ key: 'GameScene' })
    this.player
    this.platforms
    this.cursors

    this.score = 0
    this.scoreText
  }

  preload() {
    this.load.image('sky', sky)
    this.load.image('ground', ground)
    this.load.image('star', star)
    this.load.image('bomb', bomb)
    this.load.spritesheet('dude', dude, { frameWidth: 32, frameHeight: 48 }
    )
  }

  create() {
    this.add.image(400, 300, 'sky')
    this.add.image(0, 0, 'sky').setOrigin(0, 0)

    this.platforms = this.physics.add.staticGroup()
    this.platforms.create(400, 568, 'ground').setScale(2).refreshBody()
    this.platforms.create(600, 460, 'ground')
    this.platforms.create(50, 250, 'ground')
    this.platforms.create(750, 220, 'ground')

    this.player = this.physics.add.sprite(100, 450, 'dude')

    this.player.setBounce(0.2)
    this.player.setCollideWorldBounds(true)
    this.player.body.setGravityY(300)

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    })

    this.anims.create({
      key: 'turn',
      frames: [{ key: 'dude', frame: 4 }],
      frameRate: 20
    })

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    })

    this.physics.add.collider(this.player, this.platforms) // colisão

    this.cursors = this.input.keyboard.createCursorKeys()

    const stars = this.physics.add.group({
      key: 'star',
      repeat: 11,
      setXY: { x: 12, y: 0, stepX: 70 }
    })

    stars.children.iterate(function (child) {
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8))
    })

    this.physics.add.collider(stars, this.platforms)

    this.physics.add.overlap(this.player, stars, collectStar, null, this)

    function collectStar(player, star) {
      star.disableBody(true, true)

      this.score += 10
      this.scoreText.setText('Score: ' + this.score)
    }

    this.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' })
  }

  update() {
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160)

      this.player.anims.play('left', true)
    }
    else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160)

      this.player.anims.play('right', true)
    }
    else {
      this.player.setVelocityX(0)

      this.player.anims.play('turn')
    }

    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-330)
    }
  }
}
