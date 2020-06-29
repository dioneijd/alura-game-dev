class Game {
    constructor(){
        this.scenary
        this.mainCharacter
        this.currentEnemy = 0
        this.enemies = []
        this.score
    }

    setup(){
        this.scenary = new Scenary(scenaryImage, 2)

        const mainCharacterSprite = new Sprite(mainCharacterImage, 4, 16)
        this.mainCharacter = new Character(mainCharacterSprite, 0.7, 0, 20, 2)

        const groundDropSprite = new Sprite(groundDropImage, 4, 28)
        const groundDrop = new Enemy(groundDropSprite, 0.7, 20)
        this.enemies.push(groundDrop)
        
        const airDropSprite = new Sprite(airDropImage, 3, 16)
        const airDrop = new Enemy(airDropSprite, 0.7, 200)
        this.enemies.push(airDrop)
        
        const trollSprite = new Sprite(trollImage, 5, 28)
        const troll = new Enemy(trollSprite, 0.7, 20)
        this.enemies.push(troll)

        this.score = new Score()

        //backgroundSound.loop()
    }

    keyPressed(key){
        if(key == 'ArrowUp'){
            const jumped = this.mainCharacter.jump()
            if (jumped) jumpSound.play()        
        }
    }

    draw(){
        this.scenary.show()
        this.scenary.move()
        this.mainCharacter.show()
        this.mainCharacter.gravity()    
    
        this.enemies.forEach(enemy => {
            enemy.show()
            enemy.move()
            if( this.mainCharacter.checkCollision(enemy) ){
                image(gameoverImage, (width - gameoverImage.width) / 2, height / 3)
                noLoop()
            }
        })
        this.score.addScore(0.2)
        this.score.show()
    }
}